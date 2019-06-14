import React, { Component } from "react";
import Airport from "./Airport";
import { Grid, Image, Segment, Container } from "semantic-ui-react";

class AirportList extends Component {
  render() {
    return (
      <Container>
        <Grid stackable columns={3}>
          {this.props.airports.map(airport => (
            <Airport
              key={airport.airportId}
              airport={airport}
              getTimeTable={airport}
              myairports={this.props.myairports}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default AirportList;
