import React, { Component } from 'react';
import SearchBar from './search_bar';
import WeatherList from './weather_list';


class WeatherIndex extends Component {
  render() {
    return (<div>
              <SearchBar />
              <WeatherList />
            </div>
    );
  }
}

export default WeatherIndex;
