import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder.js";

// major refactoring of export and function within
// https://www.udemy.com/course/react-redux/learn/lecture/12586868#overview

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

// example memoize : only allows to be called if a new or unique arg

// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

//
//
// export const selectPost = () => {
//   return { type: "SELECT_POST" };
// };
