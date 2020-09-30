import React from "react";

// basic context objext
const Context = React.createContext("english");

// wo 'default' for export yyou need to use {} whn importing.
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
    // same as language:language
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default context;
// export default LanguageStore;
