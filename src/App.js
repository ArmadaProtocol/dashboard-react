import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";

// CSS
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import RowPageTitle from "./components/layout/RowPageTitle";
import Footer from "./components/layout/Footer";
import Listings from "./components/pages/Listings";
import Analytics from "./components/pages/Analytics";
import Discover from "./components/pages/Discover";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <div className="container page-wrapper">
            <RowPageTitle />
            <div className="container-fluid">
              <Route exact path="/" component={Listings} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/discover" component={Discover} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
