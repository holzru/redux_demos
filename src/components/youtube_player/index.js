import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';



class YoutubeIndex extends Component {
  render() {
    return (<div className="youtube-player">
              <SearchBar />
              <VideoDetail video={this.props.youtube.videoSelected} />
              <VideoList videos={this.props.youtube.videos} />
            </div>
          );
  }
}

function mapStateToProps({youtube}) {
  return {youtube};
}

export default connect(mapStateToProps)(YoutubeIndex);

// constructor(props) {
//   super(props);
//
//   this.state = {videos: this.props.youtube.videos, videoSelected: this.props.youtube.videoSelected};
// }
