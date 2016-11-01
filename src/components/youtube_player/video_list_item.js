import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayVideo } from "../../actions/youtube_actions";

class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => this.props.displayVideo(this.props.video)} className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl}/>
            </div>
          </div>
          <div className="media-body">
            <div className="media-heading">Title: {this.props.video.snippet.title}</div>
          </div>
        </li>

      );
    }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ displayVideo }, dispatch);
}


export default connect(null, mapDispatchToProps)(VideoListItem);
