import React from "react";
import PropTypes from "prop-types";

class Order extends React.Component {
  render() {
    const {
      type,
      property,
      ask,
      quantity,
      statusDone
    } = this.props;

    let statusBadge;
    let statusWord;
    switch (statusDone) {
      case true:
        statusBadge = "badge badge-success";
        statusWord = "Done"
        break;
      case false:
        statusBadge = "badge badge-warning";
        statusWord = "Pending"
        break;
    }

    return (
      <tr>
        <td>{type || "N/A"}</td>
        <td>{property || "N/A"}</td>
        <td>
          <span>{"$"+ask || "N/A"}</span>
        </td>
        <td>
          <span>{quantity || "N/A"}</span>
        </td>
        <td>
          <span class={statusBadge || "badge badge-success"}>{statusWord}</span>
        </td>
      </tr>
    );
  }
}

Order.PropTypes = {
  type:PropTypes.string.isRequired,
  property:PropTypes.string.isRequired,
  ask:PropTypes.number.isRequired,
  quantity:PropTypes.number.isRequired,
  statusDone:PropTypes.bool.isRequired
};

export default Order;
