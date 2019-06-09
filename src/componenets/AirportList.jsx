import React, { Component } from "react";
import Airport from "./Airport";
import { Grid, Image, Segment } from "semantic-ui-react";

class AirportList extends Component {
  render() {
    return (
      <Grid stackable columns={3}>
        {this.props.airports.map(airport => (
          <Airport
            key={airport.airportId}
            airport={airport}
            getTimeTable={airport}
          />
        ))}
      </Grid>
    );
  }
}

export default AirportList;
