import React from "react";
import WeatherApp from "./WeatherApp";
import Player from "./Player";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <div className="row no-gutters">
        <div className="col-xs-12 col-sm-7">
          <WeatherApp />
        </div>
        <div className="col-xs-12 col-sm-5 align-self-end">
          <Player />
        </div>
      </div>
      <Footer />
    </div>
  );
}
