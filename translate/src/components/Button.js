import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static add property to the class itself. ie/or  Button.contextType = LanguageContext;
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
