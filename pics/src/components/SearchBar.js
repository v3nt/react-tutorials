import React from "react";

class SearchBar extends React.Component {
  state = { term: "Hello" };
  // onInputChange(event) {
  //   // console.log(event);
  //   // console.log(event.target.value);
  // }
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
    // console.log(event.target.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search bar</label> {/*onClick, onChange, onSubmit */}
            <input
              type="text"
              value={this.state.term.toUpperCase()}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
