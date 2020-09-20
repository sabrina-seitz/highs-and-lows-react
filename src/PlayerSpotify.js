import React from "react";
import "./PlayerSpotify.css";

export default function PlayerSpotify() {
  return (
    <div className="PlayerSpotify">
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/track/2jgO1U79PZt7giXGV1dbd7"
        width="300"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
