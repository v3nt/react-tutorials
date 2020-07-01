import "./SeasonDisplay.css";
import React from "react";
// import ReactDOM from "react-dom";

const seasonConfig = {
  summer: { text: "Toasty !", iconName: "sun" },
  winter: { text: "Brrrrr - chilly!", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
  // month is jan ==0
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const theDate = new Date().getMonth();
  const season = getSeason(props.lat, theDate);
  // const resultText = season === "winter" ? "Brrr - chilly!" : "Its toasty!";
  // const icon = season === "winter" ? "snowflake" : "sun";
  const { text, iconName } = seasonConfig[season];
  //
  return (
    <div className={`SeasonDisplay season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
