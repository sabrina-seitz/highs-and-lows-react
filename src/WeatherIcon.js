import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon() {
  let weatherData = {
    iconClass: "fas fa-cloud",
    alternativeName: "cloudy",
  };

  return (
    <div className="WeatherIcon">
      <i
        className={weatherData.iconClass}
        alt={weatherData.alternativeName}
      ></i>
    </div>
  );
}
