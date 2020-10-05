import React, { useState } from "react";
import WeatherNow from "./WeatherNow";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";
import WeatherDetails from "./WeatherDetails";
import Player from "./Player";
import "./WeatherIcon";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [conversion, setConversion] = useState({
    unit: "celsius",
    celsiusActive: "active",
    fahrenheitActive: "inactive",
  });

  function showFahrenheit(event) {
    event.preventDefault();
    setConversion({
      unit: "fahrenheit",
      celsiusActive: "inactive",
      fahrenheitActive: "active",
    });
  }

  function showCelsius(event) {
    event.preventDefault();
    setConversion({
      unit: "celsius",
      celsiusActive: "active",
      fahrenheitActive: "inactive",
    });
  }

  function searchGeolocation(position) {
    const apiKey = "e5551b43cbca96dceabb04d6c75c6371";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchGeolocation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function search() {
    const apiKey = "e5551b43cbca96dceabb04d6c75c6371";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      tempNow: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="row no-gutters">
          <div className="col-xs-12 col-sm-7">
            <div className="weather">
              <div className="d-flex flex-row bd-highlight mb-3 justify-content-between head">
                <div className="p-6 bd-highlight city">{weatherData.city}</div>
                <div className="p-6 bd-highlight">
                  <span className="temp-units">
                    <a
                      className={conversion.celsiusActive}
                      href="/"
                      onClick={showCelsius}
                    >
                      °C
                    </a>
                    /
                    <a
                      className={conversion.fahrenheitActive}
                      href="/"
                      onClick={showFahrenheit}
                    >
                      °F
                    </a>
                  </span>
                </div>
              </div>
              <WeatherNow data={weatherData} unit={conversion.unit} />
              <FormatDate date={weatherData.date} />
              <div className="form">
                <div className="row align-items-baseline">
                  <div className="col-2">
                    <button
                      className="btn search-location"
                      onClick={getGeolocation}
                    >
                      <i className="fas fa-compass"></i>
                    </button>
                  </div>
                  <div className="col-10">
                    <div className="search">
                      <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                          <input
                            className="form-control"
                            type="search"
                            placeholder="Another city"
                            autoComplete="off"
                            autoFocus="on"
                            onChange={updateCity}
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
              <WeatherDetails data={weatherData} unit={conversion.unit} />
              <hr />
              <Forecast city={weatherData.city} unit={conversion.unit} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 align-self-end">
            <Player code={weatherData.icon} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
