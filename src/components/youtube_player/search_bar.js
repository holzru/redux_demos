import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from "../../actions/youtube_actions";
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyD0XiN2OdvqCjtchY5o76lzFulbOWnScM8';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);

    this.videoSearch("band of horses");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => {
    this.props.fetchVideos(videos);
    })
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    this.videoSearch(event.target.value);
  }

  render() {
    return (
        <div>
          <input className="input-group" placeholder="Search for Videos" onChange={this.onInputChange} />
        </div>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
