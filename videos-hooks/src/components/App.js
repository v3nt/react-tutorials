import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videos, search] = useVideos("green environmntal food");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  //   // if one line make it inline?           {/*onVideoSelect={onVideoSelect}*/}
  //   //   onVideoSelect={(video) => setSelectedVideo(video)} can become
  //   //   onVideoSelect={setSelectedVideo}
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
