import React, { useState, useEffect } from 'react'

const Weathercard = ({ tempInfo }) => {
    const [weatherState, setweatherState] = useState("")
    const { temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset, } = tempInfo;
    useEffect(() => {
        if (weathermode) {
            switch (weathermode) {
        case "Clouds":
setweatherState("wi-day-cloudy");
break;
           
        case "Haze":
setweatherState("wi-fog");
break;
            
        case "Clear":
setweatherState("wi-day-sunny");
break;
case "Smoke":
    setweatherState("wi-dust");
    break;

default:
    setweatherState("wi-day-sunny");
break;
    }
}
}, [weathermode]);




// conerting the second into time
let sec = sunset;
let date = new Date(sec * 1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`
return (
    <>

        <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weathercondition'> {weathermode}</div>
                    <div className='place'>{name},{country}</div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            {/* our 4 coulmn section */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {timeStr}PM <br />
                            Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {humidity}
                            Humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {speed} <br />
                            Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
)
}

export default Weathercard