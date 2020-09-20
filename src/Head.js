import React from "react";
import "./Head.css";
import City from "./City";

export default function Head() {
  let weatherData = {
    tempMin: 14,
    tempMax: 19,
  };

  return (
    <div className="Head">
      <City />
      <span className="today-temp">
        {weatherData.tempMin}°/{weatherData.tempMax}°
      </span>
    </div>
  );
}
