import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherNow.css";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
      <div className="description">{props.data.description}</div>
      <div className="temp">{Math.round(props.data.tempNow)}°</div>
    </div>
  );
}
