import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="row search-city">
      <div className="col-8">
        <form id="search-form">
          <input
            type="search"
            placeholder="Search city"
            id="search-engine"
            autocomplete="off"
            autofocus="on"
          />
          <button type="submit" className="btn-search">
            <i className="fas fa-search" />
          </button>
          <button className="btn-geo" id="geo">
            <i className="fas fa-map-marker-alt" />
          </button>
        </form>
      </div>
      <div className="col-4 cel-fah">
        <div className="temp-scale-btn">
          <button className="btn-celsius active" id="cels">
            ℃
          </button>
          <button className="btn-fahrenheit" id="fahr">
            ℉
          </button>
        </div>
      </div>
    </div>
  );
}
