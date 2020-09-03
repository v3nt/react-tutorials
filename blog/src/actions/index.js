import jsonPlaceholder from "../apis/jsonPlaceholder.js";

// major refactoring of export and function within
// https://www.udemy.com/course/react-redux/learn/lecture/12586868#overview

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  // const response = await jsonPlaceholder.get("/users/" + id);

  // ES2015
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//
//
// export const selectPost = () => {
//   return { type: "SELECT_POST" };
// };
