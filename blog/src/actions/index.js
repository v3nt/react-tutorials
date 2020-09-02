import jsonPlaceholder from "../apis/jsonPlaceholder.js";

// major refactoring of export and function within
// https://www.udemy.com/course/react-redux/learn/lecture/12586868#overview

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};

//
//
// export const selectPost = () => {
//   return { type: "SELECT_POST" };
// };
