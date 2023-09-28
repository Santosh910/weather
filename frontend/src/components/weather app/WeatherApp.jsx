import React from "react";
import './WeatherApp.css'

import search_icon from '../Assets/search.jfif';
import clear_icon from '../Assets/clear png.jpg';
import cloud_icon from "../Assets/cloud png.jpg";
import humidity_icon from "../Assets/humidity png.jpg";
import rain_icon from "../Assets/rain png.jpg";
import snow_icon from "../Assets/snow png.jpg";
import drizzle_icon from "../Assets/Weather-drizzle.svg.png";
import wind_icon from "../Assets/wind png.jpg";

const WeatherApp = () => {

    let api key = "0fd45fe8888c6728787e16974c76921f";

    const search = () => {
         const element = document.getElementsByClassName("cityInput")
         if(element[0].value === ""){
            return 0;
         }
    }
    return (
        <div className="container">
            <div className="top-bar"> 
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24<span>&#176;</span>c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>

                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">18 km/hr</div>
                        <div className="text">wind speed</div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default WeatherApp;