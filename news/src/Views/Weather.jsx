import React from "react";
import Article from "../Components/Article";

function Weather({ weather }) {
  return (
    <div>
      <h1>Weather News goes here: </h1>

      {weather.map((response) => (
        <Article info={response} />
      ))}
    </div>
  );
}

export default Weather;
