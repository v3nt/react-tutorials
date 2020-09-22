import streams from "../apis/streams";
import history from "../history";
//
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  UPDATE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const createStream = (formvalues) => {
//   return await (dispatch) => {};
// };
// shortens to
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth; // combine with formValues
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  // if successful go to /streams
  history.push("/");
};
//
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  // put replaces everything to '' if all values aren't set. Use PATCH to just update the posted roperties
  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};
export const updateStream = (id) => async (dispatch) => {
  const response = await streams.post(`/streams/${id}`);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
};
