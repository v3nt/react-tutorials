import React from "react";

const Spinner = (props) => {
  return (
    <div className="">
      <div className="ui active dimmer">
        <div className="ui big text loader">
          <h1>{props.heading}</h1>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

// setting deafults for a conponemnt.
Spinner.defaultProps = {
  heading: "Def. Loading location",
  message: "Def. Please allow us yo use your location.",
};

export default Spinner;
