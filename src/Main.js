import React, { Component } from "react";

import {
      Route,
      NavLink,
      HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Stuff from "./Stuff";
    import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Data Structures</a></li>
            <li><a href="/stuff">React</a></li>
            <li><a href="/contact">Node.js</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;