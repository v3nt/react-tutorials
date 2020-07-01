import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
   console.log(song);
   // song is null at first
   if (!song) {
      return <div>Select a song </div>;
   }
   return (
      <div>
         <h3>Details for:</h3>
         <p>Title:{song.title}</p>
         <p>Duration:{song.duration}</p>
      </div>
   );
};

const mapStateToProps = (state) => {
   // 'song' could be anything
   return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
