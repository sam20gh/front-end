import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Input,
  Icon,
  Header,
  Divider,
  Container,
  Table
} from "semantic-ui-react";

class TimeTable extends Component {
  render() {
    return (
      <React.Fragment>
        <Table.Body>
          <Table.Row>
            <th scope="row">#</th>
            <td>
              <img
                src={"/images/" + this.props.flight.airline.icaoCode + ".png"}
              />
            </td>
            <td>{this.props.flight.flight.number}</td>
            <td>{this.props.flight.arrival.scheduledTime}</td>
            <td>{this.props.flight.arrival.estimatedTime}</td>
            <td>{this.props.flight.status}</td>
            <td>
              <Icon disabled name="chevron right" />
            </td>
          </Table.Row>
        </Table.Body>
      </React.Fragment>
    );
  }
}

export default TimeTable;
