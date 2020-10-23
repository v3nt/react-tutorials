import React from "react";
import VideoItem from "./VideoItem";

// class VideoList extends React.Component {
//   render() {
//     return <div>List</div>;
//   }
// }

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  // {videos} instead of props.xxxx
  //
  return <div className="ui list">{renderedList}</div>;
};

export default VideoList;
