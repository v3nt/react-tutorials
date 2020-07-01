// AIzaSyCpXfYtL5daB3uGGIKOeYNmaOJE01DDy_A;
import axios from "axios";

// GET request. part:snippet, maxResults:5, q:surfing,
//  var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: {
//       part: 'snippet',
//       type: 'video',
//       maxResults: 5,
//       key: `${KEY}`
//   }
// })
//
// params had to be called from App.js
