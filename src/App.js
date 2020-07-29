import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />
        <div className="coded-by">
          <small>
            <a href="https://github.com/dmusiol/weather-react">
              {" "}
              Open-source code
            </a>{" "}
            by Dominika Musiol 👩🏻‍💻
            <br />
            Icons made by
            <a href="https://tereszkiewicz.tumblr.com"> Hubert Tereszkiewicz</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
