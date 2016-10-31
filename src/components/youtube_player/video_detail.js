import React from 'react';

const VideoDetail = (props) => {
  if (props.video) {
    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return <div><iframe className=" embed-responsive-item" src={url}></iframe></div>
  } else {
    return <div>Search For Something...</div>;
  }
}

export default VideoDetail;
