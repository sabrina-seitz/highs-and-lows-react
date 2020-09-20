import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      name: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e5551b43cbca96dceabb04d6c75c6371";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form
      onSubmit={handleSubmit}
      className="form-inline ml-auto justify-content-center"
    >
      <input
        type="search"
        className="form-control"
        placeholder="Enter a city"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="btn btn-secondary" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="Weather">
          <img src={weather.icon} alt={weather.description} />
          <h3 className="pull-left">{weather.name}</h3>
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {Math.round(weather.wind)} km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
