import React from "react";
import ReactDOM from "react-dom";

// we are now add react-redux code here too.
//
import { Provider } from "react-redux"; //
import { createStore } from "redux";

// our code

import App from "./components/App";
import reducers from "./reducers";

// create instance of  Provider and 'wrap' our app comp with it.

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
