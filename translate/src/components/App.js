import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    // this.setState({ language: language });
    // if key and value the same...
    this.setState({ language });
    // console.log(language);
  };

  render() {
    return (
      <div className="ui container">
        <h1>APP</h1>
        <div>
          Select language:
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("English UK")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("Dutch")}
          ></i>
        </div>
        {this.state.language}
        <div>
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
