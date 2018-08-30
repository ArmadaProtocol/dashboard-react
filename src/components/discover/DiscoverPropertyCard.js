import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class DiscoverPropertyCard extends React.Component {
  render() {
    const {
      streetAddress,
      city,
      state,
      zipCode,
      marketValue,
      numInvestors,
      numTokens,
      imageSrc,
      status,
      link
    } = this.props;

    let cardCssId;
    switch (status) {
      case "IN PORTFOLIO":
        cardCssId = "discover_card_lower_banner_portfolio";
        break;
      case "UNOWNED":
        cardCssId = "discover_card_lower_banner_unowned";
        break;
      case "NEWLY LISTED":
        cardCssId = "discover_card_lower_banner_new";
        break;
    }

    return (
      <div className="col-md-4 col-md-offset-1">
        <div className="card">
          <img src={imageSrc} id="incardpropertyimage" />

          <div id="innercard_headertext">
            <Link to={link || "/discover"} id="incardpropertyimage">
                <h2>{streetAddress || "123 Fake Street"}</h2>
              <p>
                {city || "New York"}, {state || "NY"} {zipCode || "90210"}
              </p>
            </Link>
            <hr />
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <h3>{marketValue || "$999,999"}</h3>
                  <p id="innercard_normaltext_subtext">Market Value</p>
                </div>
                <div className="col-md-4">
                  <h3>{numInvestors || "N/A"}</h3>
                  <p id="innercard_normaltext_subtext">Investors</p>
                </div>
                <div className="col-md-4">
                  <h3>{numTokens || "N/A"}</h3>
                  <p id="innercard_normaltext_subtext">Tokens</p>
                </div>
              </div>
            </div>
          </div>

          <div id={cardCssId}>
            <span id="discover_card_lower_banner_text">{status}</span>
          </div>
        </div>
      </div>
    );
  }
}

DiscoverPropertyCard.PropTypes = {
  imageSrc: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  marketValue: PropTypes.string.isRequired,
  numInvestors: PropTypes.number.isRequired,
  numTokens: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default DiscoverPropertyCard;
