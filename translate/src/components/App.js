import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <h1>APP</h1>
        <LanguageSelector onLanguageChange={() => this.onLanguageChange} />
        <div>
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value="yellow">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
