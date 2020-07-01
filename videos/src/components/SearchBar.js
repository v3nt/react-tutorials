import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    // this.props.onFormSubmit(this.state.term);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(event.target);
    console.log(this.term);
    // return this.event.value;
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO.
    // callback from parent
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Search for videos</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
