import React from 'react'
import './Weather.css'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import { useEffect, useState, useRef } from 'react'

function Weather() {

    const [weatherData, setWeatherData] = useState(false);
    const inputRef = useRef();

    const allIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
    }

    const search = async (city) => {

        if (city === "") {
            alert("Enter city name");
            return;
        }

        try {

            const apiKey = "19b6e5d255f251abbed0d49689d90a12";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            })

        }
        catch (error) {

            setWeatherData(false);
            console.error("Error in fetching error data");
        }
    }

    useEffect(() => {

        search("Lahore")
    }, [])
    return (


        <div className='weather'>

            <div className="searchBar">
                <div className="inputSearch">
                    <input type="text" id="inputId" placeholder='Enter City' ref={inputRef} />
                </div>

                <div className="searchBtn">
                    <button className="btn" onClick={() => search(inputRef.current.value)}>Search</button>
                </div>
            </div>

            {weatherData ? <>

                <div className="weatherImage">
                    <img src={weatherData.icon} alt="" />
                </div>

                <div className="temp">
                    <h1>{weatherData.temperature}°C</h1>
                </div>

                <div className="city">
                    <h3>{weatherData.location}</h3>
                </div>

                <div className="column">

                    <div className="inColumn">
                        <img src={humidity} alt="something went wrong" className='columnImg' />
                        <div className="coloumnInfo">
                            <p>{weatherData.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>

                    <div className="inColumn">

                        <img src={wind} alt="something went wrong" className='columnImg' />
                        <div className="coloumnInfo">
                            <p>{weatherData.windSpeed} Km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>


                </div>

            </> : <></>}


        </div>




    )
}

export default Weather