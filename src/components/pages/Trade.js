import React from "react";
import PropTypes from "prop-types";

class Trades extends React.Component {
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
                  <tr>
                    <td>Buy</td>
                    <td>36 Boston Ave.</td>
                    <td>
                      <span>$108.00</span>
                    </td>
                    <td>
                      <span>200,000</span>
                    </td>
                    <td>
                      <span class="badge badge-success">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Buy</td>
                    <td>186 Military Road Unit #6</td>
                    <td>
                      <span>$57.92</span>
                    </td>
                    <td>
                      <span>18</span>
                    </td>
                    <td>
                      <span class="badge badge-success">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sell</td>
                    <td>4600 W Guadalupe St</td>
                    <td>
                      <span>$1274.12</span>
                    </td>
                    <td>
                      <span>15</span>
                    </td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Buy</td>
                    <td>86 El Dorado Lane </td>
                    <td>
                      <span>$19.01</span>
                    </td>
                    <td>
                      <span>2000</span>
                    </td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trades;
