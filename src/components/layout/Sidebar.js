import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Sidebar = props => {
  return (
    <div className="left-sidebar">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="nav-devider" />
            <li>
              {" "}
              <Link to="/" aria-expanded="false">
                <i className="fa fa-tachometer" />
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/analytics" aria-expanded="false">
                <i className="fa fa-bar-chart" />
                <span className="hide-menu">Analytics</span>
              </Link>
            </li>
            <li>
              {" "}
              <a href="#" aria-expanded="false">
                <i className="fa fa-exchange" />
                <span className="hide-menu">
                  <strike>Trade</strike>
                </span>
              </a>
            </li>
            <li>
              {" "}
              <Link to="/discover" aria-expanded="false">
                <i className="fa fa-search" />
                <span className="hide-menu">
                  Discover
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
