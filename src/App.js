import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";
import Today from "./Today";
import ExtraInfo from "./ExtraInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApp">
          <SearchBar />
          <Today />
          <ExtraInfo />
          <div className="row weather-forecast" id="forecast">
            <Forecast weekDay="MON" tempMax="21" tempMin="16" />
            <Forecast weekDay="TUE" tempMax="20" tempMin="16" />
            <Forecast weekDay="WED" tempMax="22" tempMin="18" />
            <Forecast weekDay="THU" tempMax="23" tempMin="18" />
            <Forecast weekDay="FRI" tempMax="24" tempMin="19" />
          </div>
        </div>
        <div className="coded-by">
          <small>
            <a href="https://github.com/dmusiol/weather-react">
              {" "}
              Open-source code
            </a>{" "}
            by Dominika Musiol 👩🏻‍💻
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
