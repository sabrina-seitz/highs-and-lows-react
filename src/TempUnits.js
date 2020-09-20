import React from "react";
import "./TempUnits.css";

export default function TempUnits() {
  return (
    <span className="TempUnits">
      <a className="active" id="celsius" href="/">
        °C
      </a>
      /
      <a className="inactive" id="fahrenheit" href="/">
        °F
      </a>
    </span>
  );
}
