import React from "react";
import "./Today.css";
import FormattedDate from "./FormattedDate";

export default function TodayTemp(props) {
  if (props.unit === "celsius") {
    return (
      <div className="row today-data">
        <div className="col-6 city-name">
          <FormattedDate date={props.data.date} />
          <h1>{props.data.city}</h1>
          <img
            src={"color/" + props.icon + ".svg"}
            width="100px"
            id="main-icon"
            alt=""
          />
          <p id="todayWeather">{props.data.description}</p>
        </div>
        <div className="col-6 city-temp">
          <h2>{Math.round(props.data.temperature)}°</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row today-data">
        <div className="col-6 city-name">
          <FormattedDate date={props.data.date} />
          <h1>{props.data.city}</h1>
          <img
            src={"color/" + props.icon + ".svg"}
            width="100px"
            id="main-icon"
            alt=""
          />
          <p id="todayWeather">{props.data.description}</p>
        </div>
        <div className="col-6 city-temp">
          <h2>{Math.round((props.data.temperature * 9) / 5 + 32)}°</h2>
        </div>
      </div>
    );
  }
}
