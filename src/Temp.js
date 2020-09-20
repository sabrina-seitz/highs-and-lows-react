import React from "react";
import "./Temp.css";

export default function Temp() {
  return (
    <div className="Temp">
      <h1>14</h1>
      <span className="temp-units">
        <a className="active" id="celsius" href="/">
          °C
        </a>
        /
        <a className="inactive" id="fahrenheit" href="/">
          °F
        </a>
      </span>
    </div>
  );
}
