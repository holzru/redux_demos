import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Search For Something...</div>;
    return <div><iframe className=" embed-responsive-item" src={url}></iframe></div>
  } else {
    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className=" embed-responsive-item" src={url}></iframe>
        </div>
        <div className='details'>
          <div>Title: {props.video.snippet.title}</div>
          <div>Description: {props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
