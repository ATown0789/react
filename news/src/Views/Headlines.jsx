import React from "react";
import Article from "../Components/Article";

function Headlines({ sport, weather, politic }) {
  return (
    <div>
      <h1>Headline News goes here: </h1>
      <p>This should be on the main home page</p>
      {console.log("sport", sport)}
      <Article info={sport} />
      <Article info={weather} />
      <Article info={politic} />
    </div>
  );
}

export default Headlines;
