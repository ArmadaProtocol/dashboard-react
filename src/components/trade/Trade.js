import React from "react";
import PropTypes from "prop-types";

// SubComponents
import Order from "./Order";

class Trade extends React.Component {
  render() {
    return (
      <div class="col-xs-12">
        <div class="card">
          <div class="card-title">
            <h4>Orders</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Property</th>
                    <th>Token Ask Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <Order
                    type="Buy"
                    property="36 Boston Ave."
                    ask="108.00"
                    quantity="200,000"
                    statusDone={true}
                  />
                  <Order
                    type="Buy"
                    property="9427 Madison St."
                    ask="72.59"
                    quantity="106"
                    statusDone={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trade;
