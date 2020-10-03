import React from "react";
import "./WeatherNow.css";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <div className="icon">
        <i className="fas fa-cloud" alt={props.data.description}></i>
      </div>
      <div className="description">{props.data.description}</div>
      <div className="temp">{Math.round(props.data.tempNow)}°</div>
    </div>
  );
}
