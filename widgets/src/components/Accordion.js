import React, { useState } from "react";

// class Accordion extends React.Component {
//   render() {
//     return 1;
//   }
// }
//

const Accordion = ({ items }) => {
  // Sets Hooks. useState from react libraray, [] is not just an array. Array destructuring. Shortcut access to array
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log("onTitleClick:" + index);
    setActiveIndex(index);
  };
  //
  //
  //
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title + ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i> {item.title}
        </div>
        <div className={`content + ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="">
      <h1>My accordion</h1>
      <div className="ui styled accordion">{renderedItems}</div>
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
