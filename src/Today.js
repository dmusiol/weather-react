import React from "react";
import "./Today.css";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function TodayTemp(props) {
  return (
    <div className="row today-data">
      <div className="col-6 city-name">
        <FormattedDate date={props.data.date} />
        <h1>{props.data.city}</h1>
        <img src="/02d.svg" width="100px" id="main-icon" alt="" />
        <p id="todayWeather">{props.data.description}</p>
      </div>
      <div className="col-6 city-temp">
        <h2>19°</h2>
      </div>
    </div>
  );
}
