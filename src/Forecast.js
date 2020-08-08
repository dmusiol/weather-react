import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const apiKey = "34c58b2c4ee93547facc769d027d3250";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
  }, [props.city]);

  return (
    <div className="row weather-forecast" id="forecast">
      {loaded && props.city === forecast.city.name ? (
        <>
          <ForecastPreview data={forecast.list[7]} unit={props.unit} />
          <ForecastPreview data={forecast.list[15]} unit={props.unit} />
          <ForecastPreview data={forecast.list[23]} unit={props.unit} />
          <ForecastPreview data={forecast.list[31]} unit={props.unit} />
          <ForecastPreview data={forecast.list[39]} unit={props.unit} />
        </>
      ) : (
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            marginTop: 50,
            opacity: 0.6,
            width: "100%",
          }}
        >
          No forecast for the city...
        </h3>
      )}
    </div>
  );
}
