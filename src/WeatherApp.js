import React from "react";

import TempUnits from "./TempUnits";
import Date from "./Date";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp() {
  let weatherData = {
    tempNow: 19,
    tempMin: 14,
    tempMax: 19,
    city: "Munich",
    iconClass: "fas fa-cloud",
    description: "cloudy",
    humidity: 10,
    wind: 3,
  };

  return (
    <div className="WeatherApp">
      <div className="row justify-content-between head">
        <div className="col-4 city">{weatherData.city}</div>
        <div className="col-4">
          <TempUnits />
        </div>
      </div>
      <div className="icon">
        <i className={weatherData.iconClass} alt={weatherData.description}></i>
      </div>
      <div className="description">{weatherData.description}</div>
      <div className="temp">{weatherData.tempNow}°</div>
      <Date />
      <div className="form">
        <div className="row align-items-baseline">
          <div className="col-2">
            <button className="btn search-location">
              <i className="fas fa-compass"></i>
            </button>
          </div>
          <div className="col-10">
            <div className="search">
              <form>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Another city"
                    autoComplete="off"
                    autoFocus="on"
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
      <div className="details row">
        <div className="col-4">
          <span className="detail-text">Today: </span>
          <br />
          {weatherData.tempMin}°/{weatherData.tempMax}°
        </div>
        <div className="col-4">
          <span className="detail-text">Wind: </span>
          <br /> {weatherData.wind} km/h
        </div>
        <div className="col-4">
          <span className="detail-text">Humidity:</span> <br />
          {weatherData.humidity} %
        </div>
      </div>
    </div>
  );
}
