import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder.js";

// major refactoring of export and function within
// https://www.udemy.com/course/react-redux/learn/lecture/12586868#overview

// action crator to call both. Alt method to reduce get requests
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // when calling aciton crator inside another action creator we need to call dispatch
  console.log("fetchPostsAndUsers called");
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));

  console.log(userIds);
  console.log("fetchPostsAndUsers complete");

  // optional refactor, chain need value at the end.
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

//  alternat method to reduce user get requests
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// refactor memoized

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// example memoize : only allows to be called if a new or unique arg
// ont work if user data has been updated since app started

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
