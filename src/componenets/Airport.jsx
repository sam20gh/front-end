import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Airport = props => {
  const { airport } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mt-3">
          <div className="card" id={airport.airportId}>
            <div className="card-horizontal">
              <div className="img-square-wrapper">
                <img
                  className=""
                  src="https://picsum.photos/150?blur=3"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">{airport.nameAirport}</h4>
                <p className="card-text">
                  Airport code:{airport.codeIcaoAirport}{" "}
                </p>
                <small className="text-muted">
                  Distance: {airport.distance} miles
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airport;
