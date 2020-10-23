import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCpXfYtL5daB3uGGIKOeYNmaOJE01DDy_A";

const App = ({}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    onTermSubmit("green environmntal food");
  }, []);

  const onTermSubmit = async (term) => {
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
    setSelectedVideo(response.data.items[0]);

    // onVideoSelect(this.state.videos[0]);
    // this.setState({ selectedVideo: this.state.videos[0] });
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
