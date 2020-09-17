// sample

// array
const streamReducer = (state = [], action) => {
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
// OBJECT!
