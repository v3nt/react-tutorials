// Import the React & ReactDOM libraries
//
import React from "react";
import ReactDOM from "react-dom";
// Create a React component
//
//
//

// const AppTest = () => {};
const App = function () {
  const buttonText = { text: "click me obj" };
  const labelText = "Enter name";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text " />
      <button
        style={{
          border: "5x solid green",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};
// Take the React Component and show it on the screen
//
ReactDOM.render(<App />, document.querySelector("#root"));
