import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import { Grid, Image, Segment, Input, Icon, Header, Divider, Container, Table } from "semantic-ui-react";

class TimeTable extends Component {
  render() {
    return (
      <React.Fragment>
          <Table.Body>
            <Table.Row>
            <th scope="row">1</th>
            <td>{this.props.flight.airline.name}</td>
            <td>{this.props.flight.flight.number}</td>
            <td>{this.props.flight.arrival.scheduledTime}</td>
            <td>{this.props.flight.arrival.estimatedTime}</td>
            <td>{this.props.flight.status}</td>
          </Table.Row>
        </Table.Body>
      </React.Fragment>
    );
  }
}

export default TimeTable;
