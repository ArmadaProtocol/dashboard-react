import React from "react";

// Components/Props

//links
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="header">
    <nav className="navbar top-navbar navbar-expand-md navbar-light">
      <div className="navbar-header">
        <a className="navbar-brand" href="index.html">
          <b>
            <img src="images/logo-text.png" className="header-logo" />
          </b>
        </a>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto mt-md-0" />
        <ul className="navbar-nav my-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted text-muted  "
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <i className="fa fa-bell" />
              <div className="notify">
                {" "}
                <span className="heartbit" /> <span className="point" />{" "}
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
              <ul>
                <li>
                  <div className="drop-title">Notifications</div>
                </li>
                <li>
                  <div className="message-center">
                    <a href="#">
                      <div className="btn btn-success btn-circle m-r-10">
                        <i className="fa fa-calendar" />
                      </div>
                      <div className="mail-contnet">
                        <h5>Voting Reminder</h5>{" "}
                        <span className="mail-desc">
                          4600 W Guadalupe St sale of property vote ends today!
                        </span>{" "}
                        <span className="time">9:30 AM</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="btn btn-success btn-circle m-r-10">
                        <i className="ti-calendar" />
                      </div>
                      <div className="mail-contnet">
                        <h5>Voting Reminder</h5>{" "}
                        <span className="mail-desc">
                          36 Boston Ave. sale of property vote ends today!
                        </span>{" "}
                        <span className="time">9:10 AM</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="btn btn-primary btn-circle m-r-10">
                        <i className="ti-user" />
                      </div>
                      <div className="mail-contnet">
                        <h5>Change of Management</h5>{" "}
                        <span className="mail-desc">
                          A new property manager has been approved for 9427
                          Madison St.
                        </span>{" "}
                        <span className="time">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-link text-center"
                    href="javascript:void(0);"
                  >
                    {" "}
                    <strong>Check all notifications</strong>{" "}
                    <i className="fa fa-angle-right" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted  "
              href="#"
              id="2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <i className="fa fa-envelope" />
              <div className="notify">
                {" "}
                <span className="heartbit" /> <span className="point" />{" "}
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right mailbox animated zoomIn"
              aria-labelledby="2"
            >
              <ul>
                <li>
                  <div className="drop-title">You have 4 new messages</div>
                </li>
                <li>
                  <div className="message-center">
                    <a href="#">
                      <div className="user-img">
                        {" "}
                        <img
                          src="/images/users/5.jpg"
                          alt="user"
                          className="img-circle"
                        />{" "}
                        <span className="profile-status online pull-right" />{" "}
                      </div>
                      <div className="mail-contnet">
                        <h5>Michael Qin</h5>{" "}
                        <span className="mail-desc">Call me!</span>{" "}
                        <span className="time">9:30 AM</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="user-img">
                        {" "}
                        <img
                          src="/images/users/2.jpg"
                          alt="user"
                          className="img-circle"
                        />{" "}
                        <span className="profile-status busy pull-right" />{" "}
                      </div>
                      <div className="mail-contnet">
                        <h5>John Oligcowzki</h5>{" "}
                        <span className="mail-desc">
                          Hey, just wanted to re...
                        </span>{" "}
                        <span className="time">9:10 AM</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="user-img">
                        {" "}
                        <img
                          src="/images/users/3.jpg"
                          alt="user"
                          className="img-circle"
                        />{" "}
                        <span className="profile-status away pull-right" />{" "}
                      </div>
                      <div className="mail-contnet">
                        <h5>Ryan Matherson</h5>{" "}
                        <span className="mail-desc">
                          Have you heard from 36 ...
                        </span>{" "}
                        <span className="time">9:08 PM</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="user-img">
                        {" "}
                        <img
                          src="/images/users/4.jpg"
                          alt="user"
                          className="img-circle"
                        />{" "}
                        <span className="profile-status offline pull-right" />{" "}
                      </div>
                      <div className="mail-contnet">
                        <h5>Michael Qin</h5>{" "}
                        <span className="mail-desc">Call me!</span>{" "}
                        <span className="time">1:25 PM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-link text-center"
                    href="javascript:void(0);"
                  >
                    {" "}
                    <strong>See all Notifications</strong>{" "}
                    <i className="fa fa-angle-right" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted  "
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/images/users/avatar-7.jpg"
                alt="user"
                className="profile-pic"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-right animated zoomIn">
              <ul className="dropdown-user">
                <li>
                  <a href="#">
                    <i className="ti-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-wallet" /> Balance
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-email" /> Inbox
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-settings" /> Setting
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-power-off" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
