import React from "react";
import "./BuildBy.css";

export default function BuildBy() {
  return (
    <div className="buildby">
      <small>
        <span>
          <a
            className="sourcelink"
            href="https://github.com/Zmeura/weather-react"
          >
            Open-source code
          </a>
        </span>
        <span>
          by <strong>Alina Ivanova</strong>
        </span>
      </small>
    </div>
  );
}
