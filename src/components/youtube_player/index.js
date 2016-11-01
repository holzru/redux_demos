import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';



class YoutubeIndex extends Component {
  render() {
    return (<div className="component">
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
