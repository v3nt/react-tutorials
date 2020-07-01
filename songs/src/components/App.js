import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

// example only
// import actions from "../actions/"; // calls actions/index.js

// import { selectSong } from "../actions"; // { } used as export from actions is 'named'

class App extends React.Component {
  // state now in redux side of things!
  render() {
    return (
      <div className="ui container grid" style={{ marginTop: 50 }}>
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div>
            <SongDetail className="column eight wide" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
