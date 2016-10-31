import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';
import Chart from "./chart";

class WeatherList extends Component {
  renderWeather(weatherData) {
    const name = weatherData.city.name;
    const temps = weatherData.list.map((weather) => weather.main.temp);
    const humidities = weatherData.list.map((weather) => weather.main.humidity);
    const { lon, lat } = weatherData.city.coord;
    const convertedTemps = temps.map(temp => this.tempConverter(temp));

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={convertedTemps} color="red" units="F"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>);
  }

  tempConverter(temp) {
    const cel = temp - 273.15;
    return Math.round(((cel * 9/5) + 32) * 10)/10;
  }

  render() {
    if (!this.props.weather[0]) {
      return <div>"Loading..."</div>;
    }
    return (<table>
              <thead>
               {this.props.weather.map(weatherData => {
                 return this.renderWeather(weatherData);
               }) }
            </thead>
          </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
