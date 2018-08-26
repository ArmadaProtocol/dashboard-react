import React from "react";
import PropTypes from "prop-types";

// SubComponents
import DiscoverPropertyCard from "./DiscoverPropertyCard";

class Discover extends React.Component {
  render() {
    return (
      <div class="row ">
        <DiscoverPropertyCard
          marketValue="$750,000"
          streetAddress="4600 W Guadalupe St"
          city="Austin"
          state="TX"
          zipCode="78705"
          numInvestors="126"
          numTokens="1712"
          imageSrc="/images/property1.jpg"
          status="IN PORTFOLIO"
        />

        <DiscoverPropertyCard
          marketValue="$900,450"
          streetAddress="36 Boston Ave."
          city="Clifton Park"
          state="NY"
          zipCode="12065"
          numInvestors="14,964"
          numTokens="200,000"
          imageSrc="/images/property2.jpg"
          status="IN PORTFOLIO"
        />

        <DiscoverPropertyCard
          marketValue="$284,956"
          streetAddress="577 Wild Horse Dr."
          city="Chambersburg"
          state="PA"
          zipCode="17201"
          numInvestors="69"
          numTokens="4"
          imageSrc="/images/property5.jpg"
          status="UNOWNED"
        />

        <DiscoverPropertyCard
          marketValue="$85,743"
          streetAddress="186 Military Road Unit #6"
          city="Tuscaloosa"
          state="AL"
          zipCode="35405"
          numInvestors="12"
          numTokens="18"
          imageSrc="/images/property3.jpg"
          status="IN PORTFOLIO"
        />

        <DiscoverPropertyCard
          marketValue="$866,253"
          streetAddress="82 North Rockwell Street"
          city="Owensboro"
          state="KY"
          zipCode="42301"
          numInvestors="44"
          numTokens="9,495"
          imageSrc="/images/property6.jpg"
          status="NEWLY LISTED"
        />

        <DiscoverPropertyCard
          marketValue="$144,977"
          streetAddress="976 Meadowbrook Drive"
          city="Charlotte"
          state="NC"
          zipCode="28205"
          numInvestors="126"
          numTokens="1,712"
          imageSrc="/images/property7.jpg"
          status="UNOWNED"
        />

        <DiscoverPropertyCard
          marketValue="$509,244"
          streetAddress="9427 Madison St."
          city="Brockton"
          state="MA"
          zipCode="02301"
          numInvestors="92"
          numTokens="106"
          imageSrc="/images/property4.jpg"
          status="IN PORTFOLIO"
        />
      </div>
    );
  }
}

export default Discover;
