import React from "react";
import "./SearchingForm.css";

export default function SearchingForm() {
  return (
    <div className="SearchingForm">
      <form>
        <input
          type="text"
          placeholder="Enter a city..."
          className="input"
          id="input"
          autoComplete="off"
        />

        <input type="submit" className="search button" value="SEARCH" />
        <input
          type="button"
          className="current button"
          id="currentbutton"
          value="CURRENT"
        />
      </form>
    </div>
  );
}
