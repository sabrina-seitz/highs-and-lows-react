import React from "react";
import "./Player.css";

export default function Player(props) {
  const songData = {
    "01d": {
      // clear sky, day
      spotifyId: "4Fe4a65JErIRywwlm2x5ob",
      trackDescription:
        "What a beautiful sunny day! Get inspired by this soundtrack for today’s wild adventures:",
    },
    "01n": {
      // clear sky, night
      spotifyId: "3hRV0jL3vUpRrcy398teAU",
      trackDescription:
        "What a crystal-clear, cloudless sky! Here's the perfect soundtrack for looking at the stars:",
    },
    "02d": {
      // few clouds, day
      spotifyId: "2k4qxMwA8PmA8OOY5cCSnr",
      trackDescription:
        "Yeehaw, there’re only a few clouds in the sky! Listen to the perfect soundtrack for this wonderful day:",
    },
    "02n": {
      // few clouds, night
      spotifyId: "2PQNABElbdO5wXhEWbF6gg",
      trackDescription:
        "Turn up the music and forget about the clouds hiding the stars! Here's the perfect track for gloomy nights:",
    },
    "03d": {
      // scattered clouds, day
      spotifyId: "1fu7I8XhF0Yk4qlwTf2Do1",
      trackDescription:
        "Turn up the music and forget about the grey sky! Here's the perfect soundtrack for cloudy days:",
    },
    "03n": {
      // scattered clouds, night
      spotifyId: "6HPZo9krwjbhMGKbqVkkDQ",
      trackDescription:
        "Turn up the music and forget about the clouds! Here's the perfect soundtrack for starless nights:",
    },
    "04d": {
      // broken clouds, day
      spotifyId: "2jgO1U79PZt7giXGV1dbd7",
      trackDescription:
        "Turn up the music and forget about the grey sky! Here's the perfect soundtrack for cloudy days:",
    },
    "04n": {
      // broken clouds, night
      spotifyId: "0cAo4yYl8sVoabZs27gwN2",
      trackDescription:
        "Turn up the music and forget about the clouds! Here's the perfect soundtrack for starless nights:",
    },
    "09d": {
      // shower rain, day
      spotifyId: "2YG3fktEoHQAUlXP9VtmRN",
      trackDescription:
        "Turn up the music and forget about the rain! Here's the perfect soundtrack for grey days:",
    },
    "09n": {
      // shower rain, night
      spotifyId: "7sqOLGaoAUBxPUL5w1mUZv",
      trackDescription:
        "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:",
    },
    "10d": {
      // rain, day
      spotifyId: "0ecM7uGyjgJnBliXS2fPP9",
      trackDescription:
        "It's raining cats and dogs! Here's the perfect soundtrack for singing in the rain and forgetting about the grey:",
    },
    "10n": {
      // rain, night
      spotifyId: "6EarBwcaOb0gj12jqrJk2G",
      trackDescription:
        "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:",
    },
    "11d": {
      // thunderstorm, day
      spotifyId: "6L9pR4PhEuTfjE33nTQdgn",
      trackDescription:
        "Turn up the music and drown out the thunder! Here's the perfect soundtrack for stormy days:",
    },
    "11n": {
      // thunderstorm, night
      spotifyId: "0GQeRhpKjPwEnOwskqtveD",
      trackDescription:
        "Turn up the music and drown out the thunder! Here's the perfect soundtrack for scary nights:",
    },
    "13d": {
      // snow, day
      spotifyId: "7Gogd7R68UpTsQle3bqYv5",
      trackDescription:
        "Turn up the music and forget about the cold! Here's a heartwarming track for snowy days:",
    },
    "13n": {
      // snow, night
      spotifyId: "31wS6gEaj89kOZhDw0xMNw",
      trackDescription:
        "Turn up the music and forget about the cold! Here's a heartwarming track for snowy nights:",
    },
    "50d": {
      // mist, day
      spotifyId: "6oAxXy1ShGGk4XBXGKuPmB",
      trackDescription:
        "Turn up the music and forget about the mist! Here's the perfect soundtrack for gloomy days:",
    },
    "50n": {
      // mist, night
      spotifyId: "5XXsoXGSO43Nt2pZ4JjWzF",
      trackDescription:
        "Turn up the music and forget about the mist! Here's the perfect soundtrack for starless nights:",
    },
  };

  return (
    <div className="Player">
      <div className="player-text">
        <h3>
          <i className="fas fa-forward"></i> Highs & Lows
        </h3>
        <p className="text-player">{songData[props.code].trackDescription}</p>
      </div>
      <div className="player-spotify">
        <iframe
          title="Spotify Player"
          src={`https://open.spotify.com/embed/track/${
            songData[props.code].spotifyId
          }`}
          width="300"
          height="80"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
