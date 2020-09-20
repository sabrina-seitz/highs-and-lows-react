import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>
        <span role="img" aria-label="umbrella">
          ☔
        </span>{" "}
        Highs & Lows
      </h1>
      <SearchEngine />
    </div>
  );
}
