// import React from "react"; // on for JSX!

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
