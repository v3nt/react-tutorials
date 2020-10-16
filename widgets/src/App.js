import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "title1", content: "test content" },
  { title: "TWO", content: "test content WHY" },
  { title: "III", content: "NOT test content" },
];

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function App() {
  return (
    <div className="ui page">
      <div className="ui content">
        <Dropdown options={options} />
        {/*<Search></Search>*/}
        {/*      <Accordion items={items}></Accordion>*/}
      </div>
    </div>
  );
}

export default App;
