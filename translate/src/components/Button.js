import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static add property to the class itself. ie/or  Button.contextType = LanguageContext;
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
