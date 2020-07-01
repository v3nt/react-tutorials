import jsonPlaceholder from "../apis/jsonPlaceholder.js";

export const fetchPosts = () => {
   // bad, breaking rules of aciton creator.
   const promise = jsonPlaceholder.get("/posts");

   return {
      type: "FETCH_POSTS",
      payload: promise,
   };
};

//
