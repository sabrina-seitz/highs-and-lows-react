import React from "react";
import "./Player.css";
import PlayerText from "./PlayerText";
import PlayerSpotify from "./PlayerSpotify";

export default function Player() {
  return (
    <div className="Player">
      <PlayerText />
      <PlayerSpotify />
    </div>
  );
}
