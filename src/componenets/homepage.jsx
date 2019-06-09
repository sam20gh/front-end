import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import { Grid, Image, Segment, Input } from "semantic-ui-react";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Input fluid icon="search" placeholder="Search..." />
        <Grid stackable columns={3}>
          {this.props.airports.map(airport => (
            <Airport key={airport.airportId} airport={airport} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default HomePage;
