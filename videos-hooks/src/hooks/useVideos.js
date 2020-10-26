import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyCpXfYtL5daB3uGGIKOeYNmaOJE01DDy_A";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // can be array or object!
};

export default useVideos;
