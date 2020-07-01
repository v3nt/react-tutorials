import axios from "axios";

// const searchImages = (term) => {};

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID giVSuLF6Q_df5kFJty7v9R4blM1fYIMT4np7GIYDRJI",
  },
});

 
