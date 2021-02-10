import React from "react";
import Article from "../Components/Article";

function Sports({ sport }) {
  return (
    <div>
      <h1>Sports News goes here: </h1>
      {console.log(sport)}
      {sport.map((response) => (
        <Article info={response} />
      ))}
    </div>
  );
}

export default Sports;
