// reducers for redux
//
//
import { combineReducers } from "redux";
//(name export means use {}), find out by checking that library's docs.

// SongList, SelectedSong
// static array so no props
const songsReducer = () => {
  return [
    {
      title: "Hello",
      duration: "2:05",
    },
    {
      title: "Allstart",
      duration: "4:15",
    },
    {
      title: "I want it that way",
      duration: "7:37",
    },
    {
      title: "Macarena",
      duration: "2:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

// Another example

// // This is declaring the types of actions.
// export const ADD_ARTICLE = `ADD_ARTICLES`;
// export const CLEAR_ARTICLES = `CLEAR_ARTICLES`;
// // This will be called for every dispatch. It is passed the type of action.
// export default function(state = [], {type, article } ) {
//     // Here I ignore or handle each action type.
//     switch(type) {
//         case CLEAR_ARTICLES:
//             return [];

//         case ADD_ARTICLE:
//             return [
//                 ...state,
//                 article
//             ];
//         // if I don't care about the action I just pass along the state that was given.
//         default:
//             return state;
//     }
// }
