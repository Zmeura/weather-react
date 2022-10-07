import React from "react";
import "./CurrentCity.css";

export default function CurrentCity() {
  return (
    <div>
      <br />
      <span className="currentcity" id="currentcity">
        Odesa
      </span>
      <br />
      <span className="dayofweekanftime" id="dayofweekanftime">
        Friday
      </span>
      <div className="main-info">
        <span className="weathericon" id="weathericon">
          🌤
        </span>
        <span>
          <i className="currenttemperature" id="currenttemperature">
            25
          </i>
          <span className="metric">
            <i className="celsiuselement active">°C </i>
            <span className="slash">/</span>
            <i className="fahrenheitelement noactive">°F</i>
          </span>
        </span>
      </div>
    </div>
  );
}
