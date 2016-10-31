import React, { Component } from 'react';
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Link to="/youtube">Youtube Player</Link><br/>
          <Link to="/weather">US Weather</Link><br/>
          <Link to="/blog">Blog</Link><br/>
          <Link to="/">Main</Link>
        </div>
        <div className>
        {this.props.children}
      </div>
    );
  }
}
