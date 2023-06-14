import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import React, { useEffect } from 'react';

function App() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity , setInputCity]= useState("")

  const [data , setData] = useState([])

  const getWeatherDetailes = (cityName)=>{
    if(!cityName)return;
    const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +" &appid="+ apiKey
    axios.get(apiURL).then((res)=> {
      console.log("response" , res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err" , err)
    })
  }

  const handleChangeInput = (e)=>{
    setInputCity(e.target.value)
  }

  const handleSearch = ()=>{
    getWeatherDetailes(inputCity)
  }

  // useEffect(() => {
  //   getWeatherDetailes("delhi")
  // }, [])

  return (
    <div className='col-md-12'>
      <div className='weatherBg'>
        <h1 className='heading'>Weather App</h1>
        <div className="d-grid col-4 mt-4 gap-3">
        <input type='text' className='form-control' onChange={handleChangeInput}
        value={inputCity} ></input>
        <button className='btn btn-primary' type='button'
        onClick={handleSearch}
        >Search</button>
        </div>
        
      </div>

      {Object.keys(data).length>0 &&

      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded  weatherResultBox">
          <img className="weatherIcon" 
          src={require('../src/images/OIP.jpg')}></img>
          <div className="weatherCity">{data?.name}</div>
          <div className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</div>
        </div>
      </div>
}

    </div>
   
  );
}

export default App;
