import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import logo from "./tek_logo.png";
import "./App.css";
import NavBar from "./Components/NavBar";
import Headlines from "./Views/Headlines";
import Sports from "./Views/Sports";
import Weather from "./Views/Weather";
import Politics from "./Views/Politics";
import Footer from "./Components/Footer";

const KEY1 = "17294b5695msh448d8980c810fe1p10afbdjsnf117787d7d9b";
const KEY2 = "3a4d1723b9msh514b58b71d4a5b4p19a043jsn6b22c58c3f67";

const makeOptions = (query) => {
  return {
    method: "GET",
    url: "https://newscatcher.p.rapidapi.com/v1/search",
    params: {
      q: query,
      lang: "en",
      sort_by: "relevancy",
      page: "1",
      media: "True",
    },
    headers: {
      "x-rapidapi-key": KEY1,
      "x-rapidapi-host": "newscatcher.p.rapidapi.com",
    },
  };
};

function App() {
  const [sportInfo, setSportInfo] = useState([{ loaded: false }]);
  const [weatherInfo, setWeatherInfo] = useState([{ loaded: false }]);
  const [politicInfo, setPoliticInfo] = useState([{ loaded: false }]);
  let loaded = false;

  useEffect(() => {
    axios
      .request(makeOptions("dallas stars"))
      .then(function (response) {
        setSportInfo([{ loaded: true }, response.data.articles]);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(makeOptions("dallas weather"))
      .then(function (response) {
        setWeatherInfo([{ loaded: true }, response.data.articles]);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(makeOptions("us politics"))
      .then(function (response) {
        setPoliticInfo([{ loaded: true }, response.data.articles]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (politicInfo[0].loaded && sportInfo[0].loaded && weatherInfo[0].loaded)
    loaded = true;

  console.log(loaded);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <br />
          <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p>
        </div>
        {!loaded ? (
          <h1> Loading...</h1>
        ) : (
          <>
            {console.log(sportInfo)}
            <Route exact path="/">
              <Headlines
                sport={sportInfo[1][0]}
                weather={weatherInfo[1][0]}
                politic={politicInfo[1][0]}
              />
            </Route>
            <Route path="/sports">
              <Sports sport={sportInfo[1]} />
            </Route>
            <Route path="/weather">
              <Weather weather={weatherInfo[1]} />
            </Route>
            <Route path="/politics">
              <Politics politic={politicInfo[1]} />
            </Route>
          </>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default App;
