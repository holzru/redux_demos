import React, { Component } from 'react';
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav-bar">
          <Link to="/" className="navbar-item">Main</Link>
          <Link to="/youtube" className="navbar-item">Youtube Player</Link>
          <Link to="/weather" className="navbar-item">US Weather</Link>
          <Link to="/blog" className="navbar-item">Blog</Link>
        </div>
        {this.props.children}
        <div className="footer">
          <a className="footer-item" href='https://www.linkedin.com/in/russellholz'>LinkedIn</a>
          <a className="footer-item" href='https://www.github.com/holzru'>Github</a>
        </div>
      </div>
    );
  }
}
