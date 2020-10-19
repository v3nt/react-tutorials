import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  { title: "title1", content: "test content" },
  { title: "TWO", content: "test content WHY" },
  { title: "III", content: "NOT test content" },
];

const options = [
  { label: "A Red", value: "red" },
  { label: "A Green", value: "green" },
  { label: "A Blue", value: "blue" },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui page">
      <div className="ui container">
        <Translate />
      </div>
    </div>
  );
}

export default App;
