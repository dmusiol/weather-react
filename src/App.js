import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="WeatherApp">
        <SearchBar />
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
          <a href="https://github.com/dmusiol/weather-app"> Open-source code</a>{" "}
          by Dominika Musiol 👩🏻‍💻
        </small>
      </div>
    </div>
  );
}

export default App;
