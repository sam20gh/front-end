import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Plane from "./Plane";
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
    airport: {
      latitudeAirport: -5.466667,
      longitudeAirport: 122.6333
    },
    zoom: 6
  };

  render() {
    const GOOGLE_API_KEY = process.env.REACT_GOOGLE_AVIATION_API_KEY;

    return (
      <React.Fragment>
        <Progress size="tiny" percent={this.state.percent} indicating />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Container textAlign="left">
                <h3>{this.props.flight.airline.name}</h3>
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
          <div />
          <b>Flight Details</b>
          <Divider />
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
                <Plane route={this.props.route} />
              </Grid.Column>
              <Grid.Column>
                <div style={{ height: "62vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyA4kpdWEHACeoWB4CaK0zNPdGAnnwqe5dQ"
                    }}
                    defaultCenter={{
                      lat: parseFloat(this.props.route[0].geography.latitude),
                      lng: parseFloat(this.props.route[0].geography.longitude)
                    }}
                    defaultZoom={this.props.zoom}
                  >
                    <Marker
                      text={"ndndnd"}
                      lat={parseFloat(this.props.route[0].geography.latitude)}
                      lng={parseFloat(this.props.route[0].geography.longitude)}
                    />
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
