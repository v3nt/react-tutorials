import React from "react";
import Accordion from "./components/Accordion.js";

const items = [
  { title: "title1", content: "test content" },
  { title: "TWO", content: "test content WHY" },
  { title: "III", content: "NOT test content" },
];

function App() {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default App;
