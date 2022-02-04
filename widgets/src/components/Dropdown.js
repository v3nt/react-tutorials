import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    // addEventListener gets called first!
    // only fire when comp is not clicked. So truley on the outseid of the comp.
    document.body.addEventListener("click", onBodyClick);

    // cleanup function
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  // how to close when not in component and click on DOM?
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            onSelectedChange(option);
          }}
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{title}</label>
        <div
          onClick={() => {
            setOpen(!open); // toggle value true / false
            // console.log("menu");
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
