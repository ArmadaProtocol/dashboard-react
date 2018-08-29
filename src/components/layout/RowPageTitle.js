import React from "react";
import PropTypes from "prop-types";

class RowPageTitle extends React.Component {

  
  render(){
    return (
      <div className="row page-titles">
        <div className="col-md-5 media-text-left">
          <h3 className="text-primary">
            {this.props.sideBarPageName}
          </h3>{" "}
        </div>
        <div className="col-md-7 align-self-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>
      </div>
    );
  }

}

export default RowPageTitle;
