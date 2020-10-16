import React from "react";

const Dropdown = ({ options }) => {
  // const [activeIndex, setActiveIndex] = useState(null);
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <h1>Dropdown</h1>
      <div>{renderedOptions}</div>
    </div>
  );
};

export default Dropdown;
