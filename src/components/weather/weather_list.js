import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    if (!this.props.weather[0]) {
      return <div>"Loading..."</div>;
    }
    const name = this.props.weather[0].city.name;
    console.log(name);
    return <div>{name}</div>;
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
