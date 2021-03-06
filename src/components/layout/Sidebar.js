import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";


class Sidebar extends React.Component {
  
  handleClick = (pageName) => {
    this.props.passSideBarName(pageName);
  }

  render(){
    return (
      <div className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="nav-devider" />
              <li>
                {" "}
                <Link to="/" aria-expanded="false" onClick={() => this.handleClick("Dashboard")}>
                  <i className="fa fa-tachometer" />
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/analytics" aria-expanded="false" onClick={() => this.handleClick("Analytics")}>
                  <i className="fa fa-bar-chart" />
                  <span className="hide-menu">Analytics</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/trade" aria-expanded="false" onClick={() => this.handleClick("Trade")}>
                  <i className="fa fa-exchange" />
                  <span className="hide-menu">Trade</span>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/discover" aria-expanded="false" onClick={() => this.handleClick("Discover")}>
                  <i className="fa fa-search" />
                  <span className="hide-menu">Discover</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
