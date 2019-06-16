import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
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

  static defaultProps = {
    center: {
      lat: 52.1792,
      lng: -0.787888
    },
    zoom: 11
  };
  render() {
    return (
      <React.Fragment>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Container textAlign="left">
                <h3>{this.props.flight.departure.iataCode}</h3>
              </Container>
              <Container textAlign="left">
                <p>terminal: {this.props.flight.departure.terminal}</p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign="right">
                <h3>{this.props.flight.arrival.iataCode}</h3>
              </Container>
              <Container textAlign="right">
                <p>terminal: {this.props.flight.arrival.terminal}</p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container textAlign="justified">
          <b>Flight Details</b>
          <Divider />
          <div>
            <Progress percent={this.state.percent} indicating />
          </div>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Airline:</Header>
                <Header as="h3" color="red">
                  {this.props.flight.airline.name}
                </Header>
                <h3>Airline Code:</h3>{" "}
                <p>{this.props.flight.airline.iataCode}</p>
                <h1>Status:</h1>
                <p>{this.props.flight.status}</p>
                <Divider />
              </Grid.Column>
              <Grid.Column>
                <div style={{ height: "40vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: ""
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  >
                    {/* <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    /> */}
                  </GoogleMapReact>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default SingleFlight;
