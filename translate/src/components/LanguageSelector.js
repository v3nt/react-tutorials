import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select language:
        <i
          className="flag uk"
          onClick={this.props.onLanguageChange("english")}
        ></i>
        <i
          className="flag nl"
          onClick={this.props.onLanguageChange("dutch")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
