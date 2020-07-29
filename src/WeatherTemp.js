import React from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  return (
    <div className="temp-scale-btn">
      <button className="btn-celsius active" id="cels">
        ℃
      </button>
      <button className="btn-fahrenheit" id="fahr">
        ℉
      </button>
    </div>
  );
}
