import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // always first function in class called
  // constructor(props) {
  //   // constructor - good place for one time setup
  //   super(props); // from extends React.Component. Parents construction function
  //   // only time direct assignment to this.state.
  //   this.state = { lat: null, errorMessage: "", loadingStatus: "Loading..." };

  //   // This was moved to componentDidMount() and shortened. So we can re-factor state.
  //   //
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   (position) => {
  //   //     // we canlled setState!!!
  //   //     this.setState({ lat: position.coords.latitude });
  //   //   },
  //   //   (err) => {
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );
  // }

  // can be used here without 'this.' instead of in constructor which is ran anyway. Babel converts this to correct format and adds constructor
  state = { lat: null, errorMessage: "" };

  //
  //  Lifecycle methods
  componentDidMount() {
    console.log("componentDidMount — Comp was rendered to screen");
    // good place to do data loading
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate — Comp was updated rendered to screen");
    // good place to do more data loading when state/props change
  }
  componentWillUnmount() {
    console.log("componentWillUnmount — Comp was removed");
    // good place to do cleanup (esp non react stuff)
    // Not used so often anymore
  }
  // 3 more Lifecycle methods but rarely used.
  //  shouldComponentUpdate
  //  getDerivedStateFromProps
  //  getSnapshotBeforeUpdate

  renderContent() {
    // helper function to avoid conditionals in render() function
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Location request" />;
  }
  // always need render()!
  render() {
    // only returnds JSX.
    return <div className="border red">{this.renderContent()}</div>;
    //calls lifecycle methods.
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
