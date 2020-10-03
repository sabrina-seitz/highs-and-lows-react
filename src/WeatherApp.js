import React, { useState } from "react";
import TempUnits from "./TempUnits";
import WeatherNow from "./WeatherNow";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";
import WeatherDetails from "./WeatherDetails";
import "./WeatherIcon";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  // const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      tempNow: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconCode: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="row justify-content-between head">
          <div className="col-4 city">{weatherData.city}</div>
          <div className="col-4">
            <TempUnits />
          </div>
        </div>
        <WeatherNow data={weatherData} />
        <FormatDate date={weatherData.date} />
        <div className="form">
          <div className="row align-items-baseline">
            <div className="col-2">
              <button className="btn search-location">
                <i className="fas fa-compass"></i>
              </button>
            </div>
            <div className="col-10">
              <div className="search">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Another city"
                      autoComplete="off"
                      autoFocus="on"
                      // onChange={updateCity}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn form-button"
                        type="submit"
                        id="button"
                      >
                        <i className="fas fa-search search-icon"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Forecast />
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "e5551b43cbca96dceabb04d6c75c6371";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading ...";
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();

  // }

  // function updateCity(event) {
  //   setCity(event.target.value);
  // }
}
