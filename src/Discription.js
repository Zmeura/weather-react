import React from "react";
import "./Discription.css";

export default function Discription() {
  return (
    <ul className="discription">
      <li className="weatherdiscription" id="weatherdiscription">
        Overcast Clouds
      </li>
      <li>
        Humidity:<span id="humidityvalue">69</span>
        <span> %</span>
      </li>
      <li>
        Wind:<span id="windvalue">8</span>
        <span> km/h</span>
      </li>
    </ul>
  );
}
