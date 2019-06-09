import React, { Component } from "react";
import TimeTable from "./TimeTable";
import { Grid, Image, Segment, Input, Icon, Header, Divider, Container, Table, Tab } from "semantic-ui-react";

class AirportDetails extends Component {
  state = {
    flights: [],
    type: "arrival"
  };
  componentDidMount() {
    this.getTimeTable();
  }
  getTimeTable = () => {
    const API_KEY = process.env.REACT_APP_AVIATION_API_KEY;
    fetch(
      "http://aviation-edge.com/v2/public/timetable?key=" +
        API_KEY +
        "&iataCode=" +
        this.props.airport.codeIataAirport +
        "&type=" +
        this.state.type
    )
      .then(resp => resp.json())
      .then(flights => {
        this.setState({ flights: flights });
      })
      .catch(error => {
        console.log(error, "catch the hoop");
      });
  };
 

  render() {
    const panes = [
      {
        menuItem: 'Arrivals', render: () => <Tab.Pane><Table padded='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Airline</Table.HeaderCell>
              <Table.HeaderCell>Flight Number</Table.HeaderCell>
              <Table.HeaderCell>scheduledTime</Table.HeaderCell>
              <Table.HeaderCell>estimatedTime</Table.HeaderCell>
              <Table.HeaderCell>status</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.state.flights.map(flight => (
            <TimeTable flight={flight} />
          ))}
        </Table></Tab.Pane> },
      { menuItem: 'Departure', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Airport Info', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]
    return (
      <React.Fragment>
        <Container>
        <h1>{this.props.airport.nameAirport}</h1>
          <Tab panes={panes} />

        
        </Container>
      </React.Fragment>
    );
  }
}

export default AirportDetails;
