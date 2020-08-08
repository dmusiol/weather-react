import React from "react";

export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = days[date.getDay()];
    return day;
  }

  function showTempC() {
    let tempC = Math.round(props.data.main.temp);

    return `${tempC}`;
  }

  function showTempF() {
    let temp = Math.round(props.data.main.temp);
    let tempF = Math.round((temp * 9) / 5 + 32);

    return `${tempF}`;
  }

  return (
    <div className="col next-day">
      <h3>{day()}</h3>
      <img src={"monokolor/" + props.data.weather[0].icon + ".svg"} alt="" />
      <div className="col temp">
        <span className="high">
          {props.unit === "celsius" ? showTempC() : showTempF()}
        </span>
        °{" "}
      </div>
    </div>
  );
}
