import React, { Component } from "react";
import Airport from "./Airport";
import { Grid, Image, Segment, Container } from "semantic-ui-react";

class AirportList extends Component {
  render() {
    const doILikeThisAirport = targetAirport =>
      this.props.myairports.some(
        airport => airport.name === targetAirport.nameAirport
      );
    return (
      <Container>
        <Grid stackable columns={3}>
          {this.props.airports.map(airport => (
            <Airport
              key={airport.airportId}
              airport={airport}
              getTimeTable={airport}
              myairports={this.props.myairports}
              allAirports={this.props.allAirports}
              liked={doILikeThisAirport(airport)}
              handleStateUpdateLikeAirport={data =>
                this.props.handleStateUpdateLikeAirport(data)
              }
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default AirportList;
