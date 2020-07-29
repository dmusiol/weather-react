import React from "react";
import "./ExtraInfo.css";

export default function ExtraInfo(props) {
  return (
    <div className="row extra-info">
      <div className="col-4 extra">
        <i className="fas fa-umbrella" />
        <h3>RAIN</h3>
        <p>
          <span id="pres">25</span> mm{" "}
        </p>
      </div>
      <div className="col-4 extra">
        <i className="fas fa-tint" />
        <h3>HUMIDITY</h3>
        <p>
          <span id="humid">13</span> %
        </p>
      </div>
      <div className="col-4 extra">
        <i className="fas fa-wind" />
        <h3>WIND</h3>
        <p>
          <span id="wind">25</span> km/h
        </p>
      </div>
    </div>
  );
}
