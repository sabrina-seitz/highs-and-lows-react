import React from "react";
import "./Head.css";

export default function Head() {
  let weatherData = {
    iconClass: "fas fa-cloud",
    alternativeName: "cloudy",
    tempMin: 14,
    tempMax: 19,
  };

  return (
    <div className="Head">
      <i
        className={weatherData.iconClass}
        alt={weatherData.alternativeName}
      ></i>
      <span className="today-temp">
        {weatherData.tempMin}°/{weatherData.tempMax}°
      </span>
    </div>
  );
}
