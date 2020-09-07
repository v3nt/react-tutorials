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
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // or
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    // arrow funciton means this F is bound to this comp
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"></i>SignOut
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon"></i>SignIn
        </button>
      );
    }
  }
  render() {
    return (
      <div>
        <span>Google Auth</span> {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
