import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function celsius() {
    let celsius = Math.round(props.data.main.temp);

    return `${celsius}°`;
  }

  function fahrenheit() {
    let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);
    return `${fahrenheit}°`;
  }

  let unit = props.unit;

  if (unit === "celsius") {
    return (
      <div className="ForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {celsius()}
      </div>
    );
  } else {
    return (
      <div className="ForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {fahrenheit()}
      </div>
    );
  }
}
