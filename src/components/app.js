import React, { Component } from 'react';
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav-bar">
          <Link to="/" className="navbar-item">Main</Link>
          <Link to="/youtube" className="navbar-item">Youtube Player</Link><br/>
          <Link to="/weather" className="navbar-item">US Weather</Link><br/>
          <Link to="/blog" className="navbar-item">Blog</Link><br/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
