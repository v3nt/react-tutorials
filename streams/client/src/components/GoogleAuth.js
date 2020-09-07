import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // callback post load
      window.gapi.client
        .init({
          clientId:
            "93406813006-q4s76ahjhit1cle3f0kf76u0c2v12fou.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //now update state!
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div> Not signed in</div>;
    }
  }
  render() {
    return <div>Google Auth {this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
