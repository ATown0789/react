import React from "react";
import Article from "../Components/Article";

function Politics({ politic }) {
  return (
    <div>
      <h1>Political News goes here: </h1>

      {politic.map((response) => (
        <Article className="politics" info={response} />
      ))}
    </div>
  );
}

export default Politics;
