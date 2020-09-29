import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    // this.setState({ language: language });
    // if key and value the same...
    this.setState({ language });
    console.log(language);
  };

  render() {
    return (
      <div className="ui container">
        <h1>APP</h1>
        <div>
          Select language:
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          ></i>
        </div>
        <div>
          {/*top one is using state set context rest are examples*/}
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
          <LanguageContext.Provider value="dutch">
            <UserCreate />
          </LanguageContext.Provider>
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
