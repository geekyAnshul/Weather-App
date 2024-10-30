import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './App.css'

function App() {

  const [weatherInfo,setWeatherInfo]=useState({
    city:"Delhi",
    feelsLike: 29,
    humidity: 58,
    sunrise: "5:58:36 AM",
    sunset: "5:46:55 PM",
    temp: 27.83,
    tempMax: 27.83,
    tempMin: 27.83,
    weatherDesc: "clear sky",
  })

  let updateInfo = (info)=>{
    setWeatherInfo(info);
  }
  
  return (
    <div className=' justify-center pt-10'>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>  
    )
}

export default App
