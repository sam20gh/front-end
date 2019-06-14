import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import TimeTable from "./TimeTable";
import {
  Grid,
  Image,
  Segment,
  Input,
  Rail,
  Icon,
  Header,
  Divider,
  Container,
  Table,
  Card,
  Message,
  Progress,
  Button,
  Reveal
} from "semantic-ui-react";
import Moment from "react-moment";
import Switch, { Case, Default } from "react-switch-case";

class SingleFlight extends Component {
  state = {
    percent: 60
  };
  render() {
    return (
      <React.Fragment>
        <Container textAlign="left">
          <h3>{this.props.flight.departure.iataCode}</h3>
        </Container>
        <Container textAlign="left">
          <p>terminal: {this.props.flight.departure.terminal}</p>
        </Container>
        <Container textAlign="right">
          <h3>{this.props.flight.arrival.iataCode}</h3>
        </Container>
        <Container textAlign="right">
          <p>terminal: {this.props.flight.arrival.terminal}</p>
        </Container>
        <Container textAlign="justified">
          <b>Flight Details</b>
          <Divider />
          <div>
            <Progress percent={this.state.percent} indicating />
          </div>
          <Header as="h2">Airline:</Header>
          <Header as="h3" color="red">
            {this.props.flight.airline.name}
          </Header>
          <h3>Airline Code:</h3> <p>{this.props.flight.airline.iataCode}</p>
          <h1>Status:</h1>
          <p>{this.props.flight.status}</p>
          <Divider />
        </Container>
      </React.Fragment>
    );
  }
}

export default SingleFlight;
