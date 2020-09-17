// sample

// array
const streamReducerArr = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map((stream) => {
        if (stream.id === action.payload.id) {
          return actions.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

// OBJECT! Easier
const streamReducerObj = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // still not ery concise
      const newState = { ...state }; // return new OBJ from reducer
      newState[action.payload.id] = action.payload;
      return newState;
      //
      // WOW. single line version!
      // [] not an array here but key interpolation
      return { ...state, [action.payload.id]: action.payload };
    //
    default:
      return state;
  }
};
