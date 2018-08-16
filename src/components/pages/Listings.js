import React from "react";
import PropTypes from "prop-types";

class Listings extends React.Component {
  render() {
    return (
      <div className="row ">
        <div className="col-md-4 col-md-offset-1">
          <div className="card">
            <img src="/images/property1.jpg" id="incardpropertyimage" />
            <div id="innercard_headertext">
              <h2>4600 W Guadalupe St</h2>
              <p>Austin, TX 78751</p>
              <hr />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <h3>$148,317</h3>
                    <p id="innercard_normaltext_subtext">Market Value</p>
                  </div>
                  <div className="col-md-4">
                    <h3>126</h3>
                    <p id="innercard_normaltext_subtext">Investors</p>
                  </div>
                  <div className="col-md-4">
                    <h3>1,712</h3>
                    <p id="innercard_normaltext_subtext">Tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-md-offset-1">
          <div className="card">
            <img src="/images/property2.jpg" id="incardpropertyimage" />
            <div id="innercard_headertext">
              <h2>36 Boston Ave.</h2>
              <p>Clifton Park, NY 12065</p>
              <hr />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <h3>$900,450</h3>
                    <p id="innercard_normaltext_subtext">Market Value</p>
                  </div>
                  <div className="col-md-4">
                    <h3>14,964</h3>
                    <p id="innercard_normaltext_subtext">Investors</p>
                  </div>
                  <div className="col-md-4">
                    <h3>200,000</h3>
                    <p id="innercard_normaltext_subtext">Tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-md-offset-1">
          <div className="card">
            <img src="/images/property3.jpg" id="incardpropertyimage" />
            <div id="innercard_headertext">
              <h2>186 Military Road Unit #6</h2>
              <p>Tuscaloosa, AL 35405</p>
              <hr />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <h3>$85,743</h3>
                    <p id="innercard_normaltext_subtext">Market Value</p>
                  </div>
                  <div className="col-md-4">
                    <h3>12</h3>
                    <p id="innercard_normaltext_subtext">Investors</p>
                  </div>
                  <div className="col-md-4">
                    <h3>18</h3>
                    <p id="innercard_normaltext_subtext">Tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-md-offset-1">
          <div className="card">
            <img src="/images/property4.jpg" id="incardpropertyimage" />
            <div id="innercard_headertext">
              <h2>9427 Madison St.</h2>
              <p>Brockton, MA 02301</p>
              <hr />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <h3>$509,244</h3>
                    <p id="innercard_normaltext_subtext">Market Value</p>
                  </div>
                  <div className="col-md-4">
                    <h3>92</h3>
                    <p id="innercard_normaltext_subtext">Investors</p>
                  </div>
                  <div className="col-md-4">
                    <h3>106</h3>
                    <p id="innercard_normaltext_subtext">Tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listings;
