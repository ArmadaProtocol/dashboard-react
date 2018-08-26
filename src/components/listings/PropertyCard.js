import React from "react";
import PropTypes from "prop-types";

class PropertyCard extends React.Component {
  render() {
    const {
      streetAddress,
      city,
      state,
      zipCode,
      marketValue,
      numInvestors,
      numTokens,
      imageSrc
    } = this.props;

    return (
      <div className="col-md-4 col-md-offset-1">
        <div className="card">
          <img src={imageSrc} id="incardpropertyimage" />
          <div id="innercard_headertext">
            <h2>{streetAddress || "123 Fake Street"}</h2>
            <p>
              {city || "New York"}, {state || "NY"} {zipCode || "90210"}
            </p>
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
        </div>
      </div>
    );
  }
}

PropertyCard.PropTypes = {
  imageSrc: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  marketValue: PropTypes.string.isRequired,
  numInvestors: PropTypes.number.isRequired,
  numTokens: PropTypes.number.isRequired
};

export default PropertyCard;
