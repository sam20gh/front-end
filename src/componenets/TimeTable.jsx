import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";

class TimeTable extends Component {
  render() {
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.props.flight.airline.name}</td>
            <td>{this.props.flight.flight.number}</td>
            <td>{this.props.flight.arrival.scheduledTime}</td>
            <td>{this.props.flight.arrival.estimatedTime}</td>
            <td>{this.props.flight.status}</td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}

export default TimeTable;
