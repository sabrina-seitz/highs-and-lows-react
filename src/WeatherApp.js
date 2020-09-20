import React from "react";

import Head from "./Head";
import Temp from "./Temp";
import City from "./City";
import Date from "./Date";
import Form from "./Form";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Head />
      <Temp />
      <City />
      <Date />
      <Form />
      <Forecast />
    </div>
  );
}
