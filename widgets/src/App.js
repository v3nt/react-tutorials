import React from "react";
import Accordion from "./components/Accordion.js";
import Search from "./components/Search.js";

const items = [
  { title: "title1", content: "test content" },
  { title: "TWO", content: "test content WHY" },
  { title: "III", content: "NOT test content" },
];

function App() {
  return (
    <div className="ui page">
      <Search></Search>
      {/*<Accordion items={items}></Accordion>*/}
    </div>
  );
}

export default App;
