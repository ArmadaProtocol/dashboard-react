import React from "react";
import PropTypes from "prop-types";

// Sub Components
import PropertyCard from "./PropertyCard";

class Listings extends React.Component {
  render() {
    return (
      <div className="row">
        <PropertyCard
          marketValue="$750,000"
          streetAddress="4600 W Guadalupe St"
          city="Austin"
          state="TX"
          zipCode="78705"
          numInvestors="126"
          numTokens="1712"
          imageSrc="/images/property1.jpg"
        />

        <PropertyCard
          marketValue="$900,450"
          streetAddress="36 Boston Ave."
          city="Clifton Park"
          state="NY"
          zipCode="12065"
          numInvestors="14,964"
          numTokens="200,000"
          imageSrc="/images/property2.jpg"
        />

        <PropertyCard
          marketValue="$85,743"
          streetAddress="186 Military Road Unit #6"
          city="Tuscaloosa"
          state="AL"
          zipCode="35405"
          numInvestors="12"
          numTokens="18"
          imageSrc="/images/property3.jpg"
        />

        <PropertyCard
          marketValue="$509,244"
          streetAddress="9427 Madison St."
          city="Brockton"
          state="MA"
          zipCode="02301"
          numInvestors="92"
          numTokens="106"
          imageSrc="/images/property4.jpg"
        />
      </div>
    );
  }
}

export default Listings;
