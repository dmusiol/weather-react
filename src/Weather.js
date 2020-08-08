import React, { useState, useEffect } from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import Today from "./Today";
import ExtraInfo from "./ExtraInfo";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayWeather(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "34c58b2c4ee93547facc769d027d3250";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function displayLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "34c58b2c4ee93547facc769d027d3250";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(displayLocation);
  }

  useEffect(search, []);
  if (!weatherInfo.ready) {
    // search();
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "1.2em",
          marginTop: 50,
          marginBottom: 50,
          opacity: 0.8,
          width: "100%",
          color: "#352fac",
        }}
      >
        Loading... Please wait
      </div>
    );
  }

  if (weatherInfo.ready) {
    return (
      <div className="WeatherApp">
        <div className="row search-city">
          <div className="col-8">
            <form id="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city"
                id="search-engine"
                autoComplete="off"
                autoFocus="on"
                onChange={changeCity}
              />
              <button type="submit" className="btn-search">
                <i className="fas fa-search" />
              </button>
              <button className="btn-geo" id="geo" onClick={getCurrentPosition}>
                <i className="fas fa-map-marker-alt" />
              </button>
            </form>
          </div>
          <div className="col-4 cel-fah">
            <div className="temp-scale-btn">
              <button
                className={`btn-celsius ${unit === "celsius" ? "active" : ""}`}
                id="cels"
                onClick={showCelsius}
              >
                ℃
              </button>
              <button
                className={`btn-fahrenheit ${
                  unit !== "celsius" ? "active" : ""
                }`}
                id="fahr"
                onClick={showFahrenheit}
              >
                ℉
              </button>
            </div>
          </div>
        </div>
        <FormattedDate date={weatherInfo.date} />
        <Today data={weatherInfo} icon={weatherInfo.icon} unit={unit} />
        <ExtraInfo info={weatherInfo} />
        <Forecast city={weatherInfo.city} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
