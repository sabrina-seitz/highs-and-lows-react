import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherNow.css";

export default function WeatherNow(props) {
  let unit = props.unit;

  function fahrenheit() {
    return (props.data.tempNow * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherNow">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <div className="description">{props.data.description}</div>
        <div className="temp">{Math.round(props.data.tempNow)}°</div>
      </div>
    );
  } else {
    return (
      <div className="WeatherNow">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <div className="description">{props.data.description}</div>
        <div className="temp">{Math.round(fahrenheit())}°</div>
      </div>
    );
  }
}
