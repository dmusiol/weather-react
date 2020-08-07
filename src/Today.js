import React from "react";
import "./Today.css";

export default function TodayTemp(props) {
  const temperature =
    props.unit === "celsius"
      ? props.data.temperature
      : (props.data.temperature * 9) / 5 + 32;

  return (
    <div className="row today-data">
      <div className="header" style={{ width: "100%" }}>
        <h1>{props.data.city}</h1>
      </div>
      <div className="col-6 city-name">
        <img
          src={"color/" + props.icon + ".svg"}
          width="90px"
          id="main-icon"
          alt=""
        />
        <p id="todayWeather">{props.data.description}</p>
      </div>
      <div className="col-6 city-temp">
        <h2>{Math.round(temperature)}°</h2>
      </div>
    </div>
  );
}
