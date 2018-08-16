import React from "react";
import PropTypes from "prop-types";

class Analytics extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card bg-primary p-20">
              <div className="media widget-ten">
                <div className="media-left meida media-middle">
                  <span>
                    <i className="ti-home f-s-40" />
                  </span>
                </div>
                <div className="media-body media-text-right">
                  <h2 className="color-white">4</h2>
                  <p className="m-b-0">Total Properties</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-pink p-20">
              <div className="media widget-ten">
                <div className="media-left meida media-middle">
                  <span>
                    <i className="ti-money f-s-40" />
                  </span>
                </div>
                <div className="media-body media-text-right">
                  <h2 className="color-white">$185,204.75</h2>
                  <p className="m-b-0">Net Returns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-danger p-20">
              <div className="media widget-ten">
                <div className="media-left meida media-middle">
                  <span>
                    <i className="ti-location-pin f-s-40" />
                  </span>
                </div>
                <div className="media-body media-text-right">
                  <h2 className="color-white">278</h2>
                  <p className="m-b-0">Total Visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card nestable-cart">
              <div className="card-title">
                <h4>My Property Map</h4>
              </div>
              <div className="datamap">
                <div id="world-datamap" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Property Values</h4>
                <div className="ct-svg-chart" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-title">
                <h4>Portfolio Breakdown</h4>
              </div>
              <div className="card-body">
                <div className="current-progress">
                  <div className="progress-content">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="progress-text">4600 W Guadalupe St</div>
                      </div>
                      <div className="col-lg-8">
                        <div className="current-progressbar">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary w-15"
                              role="progressbar"
                              aria-valuenow="14"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              14%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-content">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="progress-text">36 Boston Ave.</div>
                      </div>
                      <div className="col-lg-8">
                        <div className="current-progressbar">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary w-35"
                              role="progressbar"
                              aria-valuenow="33"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              33%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-content">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="progress-text">
                          186 Military Road Unit #6
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="current-progressbar">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary w-20"
                              role="progressbar"
                              aria-valuenow="22"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              22%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-content">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="progress-text">9427 Madison St.</div>
                      </div>
                      <div className="col-lg-8">
                        <div className="current-progressbar">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-primary w-30"
                              role="progressbar"
                              aria-valuenow="31"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              31%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </div>
    );
  }
}

export default Analytics;
