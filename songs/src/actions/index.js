// redux action creator
// if we use index.js webpack will use this by default reducing calling paths.

export const selectSong = (song) => {
   return {
      type: "SONG_SELECTED",
      payload: song,
   };
};

// export different for reduc action creators
