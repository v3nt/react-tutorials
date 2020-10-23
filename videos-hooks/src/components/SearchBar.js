import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <div>
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Search for videos</label>
            <input type="text" value={term} onChange={onInputChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
