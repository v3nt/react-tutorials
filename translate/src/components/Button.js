import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  renderColor(color) {
    return `ui button ${color}`;
  }
  render() {
    return (
      <ColorContext.Consumer>
        {/*has to be ran as function to render?! */}
        {(color) => (
          <button className={this.renderColor(color)}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
