import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
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
}
