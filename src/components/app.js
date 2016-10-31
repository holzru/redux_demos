import React, { Component } from 'react';
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/youtube">Youtube Player</Link><br/>
        <Link to="/weather">US Weather</Link>
        {this.props.children}
      </div>
    );
  }
}
