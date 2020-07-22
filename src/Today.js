import React from "react";
import "./Today.css";

export default function TodayTemp() {
  return (
    <div className="row today-data">
      <div className="col-6 city-name">
        <div className="date">
          <span className="datetime">Monday 17:35</span>
        </div>
        <h1>Madrid</h1>
        <img src="/02d.svg" width="100px" id="main-icon" alt="" />
        <p id="todayWeather">Sunny</p>
      </div>
      <div className="col-6 city-temp">
        <h2>19°</h2>
      </div>
    </div>
  );
}
