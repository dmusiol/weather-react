import React, { useState } from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import Today from "./Today";
import ExtraInfo from "./ExtraInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherInfo, setweatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [celsSelected, setCelsSelected] = useState({});
  const [fahrsSelected, setFahrsSelected] = useState({});

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setCelsSelected({
      backgroundColor: `#d7d4ec`,
      color: `#352fac`,
      fontWeight: `500`,
    });
    setFahrsSelected({});
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setFahrsSelected({
      backgroundColor: `#d7d4ec`,
      color: `#352fac`,
      fontWeight: `500`,
    });
    setCelsSelected({
      backgroundColor: `#f6f9fa`,
      color: `#352fac`,
      borderColor: `#f6f9fa`,
    });
  }

  function displayWeather(response) {
    setweatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "622e3d04167a672cc03b37b7f405452f";
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
    const apiKey = "622e3d04167a672cc03b37b7f405452f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(displayLocation);
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
                className="btn-celsius active"
                id="cels"
                onClick={showCelsius}
                style={celsSelected}
              >
                ℃
              </button>
              <button
                className="btn-fahrenheit"
                id="fahr"
                onClick={showFahrenheit}
                style={fahrsSelected}
              >
                ℉
              </button>
            </div>
          </div>
        </div>
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
