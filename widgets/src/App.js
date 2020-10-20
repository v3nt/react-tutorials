import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

const items = [
  { title: "title1", content: "test content" },
  { title: "TWO", content: "test content WHY" },
  { title: "III", content: "NOT test content" },
];

// const options = [
//   { label: "A Red", value: "red" },
//   { label: "A Green", value: "green" },
//   { label: "A Blue", value: "blue" },
// ];

function App() {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };
  const showList = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };
  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return <Dropdown />;
    }
  };
  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null;
  };

  return (
    <div className="ui page">
      <div className="ui container">
        <Route path="/">
          <Accordion items={items} />
        </Route>{" "}
        <Route path="/list">
          <Search items={items} />
        </Route>
        <Route path="/dropdown">
          <Dropdown />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
}

export default App;
