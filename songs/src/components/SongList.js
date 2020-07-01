// import React from "react";

// // const Songlist = () => {
// //   return <div>Songlist</div>;
// // };

// class SongList extends React.Component {
//   render() {
//     return <div>song list class </div>;
//   }
// }

// alt way to write this.

import React, { Component } from "react";
import { connect } from "react-redux";
// the redux action creator
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}

// conventionally called this
const mapStateToProps = (state) => {
  // console.log(state);
  // console.log(state.selectedSong);
  // always 1st arg is state
  // always return object that appears as prop in the component
  return { songs: state.songs };
};

// Shorthand version, you can xport multiple
export default connect(mapStateToProps, { selectSong })(SongList);

// Fullhand version
// export default connect(mapStateToProps, { selectSong: selectSong })(SongList);

// this wraps redux store around Songlist componentn as this.props
//
// how this export works () ()
// function connect(){
//   return function(){
//    return "hello";
//   }

// }

// connect()();
