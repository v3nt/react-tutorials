import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>APP</h1>
        <LanguageStore>
          <LanguageSelector />
          <div>
            <ColorContext.Provider value="yellow">
              <UserCreate />
            </ColorContext.Provider>
          </div>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
