import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="col next-day">
      <h3>{props.weekDay}</h3>
      <img src="02d.svg" alt="" />
      <div className="col temp">
        <span className="high">{props.tempMax}</span> |{" "}
        <span className="low">{props.tempMin}</span>
      </div>
    </div>
  );
}
