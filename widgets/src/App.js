import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  return (
    <div className="ui page">
      <div className="ui container">
        <Header />
        <Route path="/">
          <Accordion items={items} />
        </Route>{" "}
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            options={options}
            selected={selected}
            title="pick A color"
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
}

export default App;
