import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayVideo } from "../../actions/youtube_actions";
import VideoListItem from './video_list_item';

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map((video) => {
      return(
        <VideoListItem
          key={video.etag}
          video={video} />
        );
      });
    return <div>{ videoItems }</div>
  }
}


export default VideoList;
