import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);

    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row weather-forecast" id="forecast">
        <ForecastPreview data={forecast.list[7]} unit={props.unit} />
        <ForecastPreview data={forecast.list[15]} unit={props.unit} />
        <ForecastPreview data={forecast.list[23]} unit={props.unit} />
        <ForecastPreview data={forecast.list[31]} unit={props.unit} />
        <ForecastPreview data={forecast.list[39]} unit={props.unit} />
      </div>
    );
  } else {
    const apiKey = "34c58b2c4ee93547facc769d027d3250";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
