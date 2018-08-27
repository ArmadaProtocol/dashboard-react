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
import Listings from "./components/listings/Listings";
import Analytics from "./components/analytics/Analytics";
import Discover from "./components/discover/Discover";
import Property from "./components/property/Property";
import Trade from "./components/trade/Trade";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <div className="page-wrapper">
            <RowPageTitle />
            <div className="container-fluid">
              <Route exact path="/" component={Listings} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/trade" component={Trade} />
              <Route exact path="/property" component={Property} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
