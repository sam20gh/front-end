import React, { Component } from "react";
import TimeTable from "./TimeTable";

class AirportDetails extends Component {
  state = {
    flights: [],
    type: "arrival"
  };
  componentDidMount() {
    this.getTimeTable();
  }
  getTimeTable = () => {
    const API_KEY = process.env.REACT_APP_AVIATION_API_KEY;
    fetch(
      "http://aviation-edge.com/v2/public/timetable?key=" +
        API_KEY +
        "&iataCode=" +
        this.props.airport.codeIataAirport +
        "&type=" +
        this.state.type
    )
      .then(resp => resp.json())
      .then(flights => {
        this.setState({ flights: flights });
      })
      .catch(error => {
        console.log(error, "catch the hoop");
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.airport.nameAirport}</h1>
        <button
          onClick={event => {
            event.preventDefault();
            console.log(this.props.airport);
            this.setState({ type: "departure" });
            this.getTimeTable();
          }}
        >
          departure
        </button>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Airline</th>
              <th scope="col">Flight Number</th>
              <th scope="col">scheduledTime</th>
              <th scope="col">estimatedTime</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          {this.state.flights.map(flight => (
            <TimeTable flight={flight} />
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default AirportDetails;
