import React from "react";
import "./WeekForecast.css";

export default function Weekforecast() {
  return (
    <div className="weekforecast">
      <span className="col2 sun">
        Sun <br />
        ☀ <br />
        29°
      </span>
      <span className="col2">
        Mon <br />
        🌦
        <br />
        25°
      </span>
      <span className="col2">
        Tue <br />⛈<br />
        26°
      </span>
      <span className="col2">
        Wed <br />
        🌤
        <br />
        28°
      </span>
      <span className="col2">
        Thue <br />☀<br />
        31°
      </span>
    </div>
  );
}
