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
  Reveal
} from "semantic-ui-react";
import Moment from "react-moment";
import Switch, { Case, Default } from "react-switch-case";

class SingleFlight extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Header as="h2" floated="left">
                {this.props.flight.departure.iataCode}
              </Header>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Header as="h2" floated="right">
                {this.props.flight.arrival.iataCode}
              </Header>
              <Header as="p" floated="right">
                {this.props.flight.arrival.iataCode}
              </Header>
            </Grid.Column>
          </Grid>

          <Divider vertical>To</Divider>
        </Segment>
        {/* <Segment textAlign="center">
          <Progress percent={60} success>
            on the way
          </Progress>

          <Rail internal position="left">
            <Segment>{this.props.flight.departure.iataCode}</Segment>
          </Rail>

          <Rail internal position="right">
            <Segment>{this.props.flight.arrival.iataCode}</Segment>
          </Rail>
        </Segment> */}
      </React.Fragment>
    );
  }
}

export default SingleFlight;
