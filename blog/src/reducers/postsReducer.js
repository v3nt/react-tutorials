export default (state = [], action) => {
  // can never be empty! return 123;
  // never mutate / define things here for arrays or objects. There is one tiny corner case where you can
  // better to use swithc and case
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }
  // return state;
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "sdasdasda":
      return "test";
    default:
      return state;
  }
};
