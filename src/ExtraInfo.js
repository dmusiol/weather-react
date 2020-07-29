import React from "react";
import "./ExtraInfo.css";

export default function ExtraInfo(props) {
  return (
    <div className="row extra-info">
      <div className="col-4 extra">
        <i className="fas fa-tint" />
        <h3>HUMIDITY</h3>
        <p>
          <span id="humid">{props.info.humidity}</span> %
        </p>
      </div>
      <div className="col-4 extra">
        <i className="fas fa-wind" />
        <h3>WIND</h3>
        <p>
          <span id="wind">{Math.round(props.info.wind)}</span> m/s
        </p>
      </div>
      <div className="col-4 extra">
        <i className="fas fa-cloud"></i>
        <h3>CLOUDS</h3>
        <p>
          <span id="pres">{props.info.clouds}</span> %{" "}
        </p>
      </div>
    </div>
  );
}
