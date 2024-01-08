import React, { useEffect, useState } from 'react'
import "./style.css";
 import Weathercard from './weathercard';
const Temp = () => {
const [searchValue,setsearchValue]=useState("Pune");
const[tempInfo,settempInfo]=useState({});
const getWeatherInfo=async()=>{
    try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c001aece62efd9fe3e75494bd798b2d5`
        const res= await fetch(url);
        const data=  await res.json();
        const {temp,humidity,pressure}=data.main;
        const {main:weathermode}=data.weather[0];
        const{name}=data;
        const {speed}= data.wind;  
        const{country,sunset}=data.sys;
        const mynewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset,
        };
        settempInfo(mynewWeatherInfo);
    } catch (error) {
        console.log(error);
    }

}
useEffect(() => { getWeatherInfo();}, []);

    return (
        <>
            <div className="wrap">
                <div className='search'>
                    <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchValue } onChange={(e)=>{
                        setsearchValue(e.target.value)
                    }} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}> Search</button>
                </div>
            </div>
            {/* our temp card */}
            <Weathercard tempInfo={tempInfo}/>
           
        </>
    )
}

export default Temp