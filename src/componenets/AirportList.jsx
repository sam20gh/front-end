import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";

class AirportList extends Component {
  render() {
    return (
      <React.Fragment>
        <hr className="half-rule" />
        <div className="container">
          <div className="row">
            {this.props.airports.map(airport => (
              <Airport key={airport.airportId} airport={airport} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AirportList;
