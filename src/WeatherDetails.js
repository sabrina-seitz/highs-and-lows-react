import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  let unit = props.unit;

  function fahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function miles(km) {
    return km / 1.609;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherDetails">
        <div className="details row">
          <div className="col-4">
            <span className="detail-text">Today: </span>
            <br />
            {Math.round(props.data.tempMin)}°/{Math.round(props.data.tempMax)}°
          </div>
          <div className="col-4">
            <span className="detail-text">Wind: </span>
            <br /> {Math.round(props.data.wind)} km/h
          </div>
          <div className="col-4">
            <span className="detail-text">Humidity:</span> <br />
            {props.data.humidity} %
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDetails">
        <div className="details row">
          <div className="col-4">
            <span className="detail-text">Today: </span>
            <br />
            {Math.round(fahrenheit(props.data.tempMin))}°/
            {Math.round(fahrenheit(props.data.tempMax))}°
          </div>
          <div className="col-4">
            <span className="detail-text">Wind: </span>
            <br /> {Math.round(miles(props.data.wind))} mph
          </div>
          <div className="col-4">
            <span className="detail-text">Humidity:</span> <br />
            {props.data.humidity} %
          </div>
        </div>
      </div>
    );
  }
}
