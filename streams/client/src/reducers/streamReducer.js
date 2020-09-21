import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      // add new key value pair on the fly
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      // map array to object by id
      // _ map keys
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // use lodash. create new version minus the match to del.
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
