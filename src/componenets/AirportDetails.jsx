import React, { Component } from "react";
import TimeTable from "./TimeTable";
import Comments from "./Comments";
import {
  Grid,
  Image,
  Segment,
  Input,
  Icon,
  Header,
  Divider,
  Container,
  Table,
  Rating,
  Responsive,
  Tab
} from "semantic-ui-react";

class AirportDetails extends Component {
  state = {
    currentDate: new Date(),
    flights: [],
    departures: []
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
        "&type=arrival"
    )
      .then(resp => resp.json())
      .then(json =>
        json.filter(
          flight =>
            new Date(flight.arrival.estimatedTime) >= this.state.currentDate
        )
      )
      .then(flights => {
        this.setState({ flights });
      })

      .catch(error => {
        console.log(error, "catch the hoop");
      });

    fetch(
      "http://aviation-edge.com/v2/public/timetable?key=" +
        API_KEY +
        "&iataCode=" +
        this.props.airport.codeIataAirport +
        "&type=departure"
    )
      .then(resp => resp.json())
      .then(json =>
        json.filter(
          flight =>
            new Date(flight.departure.scheduledTime) >= this.state.currentDate
        )
      )
      .then(departures => {
        this.setState({ departures });
      })

      .catch(error => {
        console.log(error, "catch the hoop");
      });
  };

  render() {
    const panes = [
      {
        menuItem: "Arrivals",
        render: () => (
          <Tab.Pane>
            <Table padded="very">
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell>Airline</Table.HeaderCell>
                  <Table.HeaderCell>Flight Number</Table.HeaderCell>
                  <Table.HeaderCell>scheduledTime</Table.HeaderCell>
                  <Table.HeaderCell>estimatedTime</Table.HeaderCell>
                  <Table.HeaderCell>Delay</Table.HeaderCell>
                  <Table.HeaderCell>Terminal</Table.HeaderCell>
                  <Table.HeaderCell>status</Table.HeaderCell>
                  {/* <Table.HeaderCell>follow</Table.HeaderCell> */}
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.flights.map(flight => (
                  <TimeTable
                    key={flight.flight.iataNumber}
                    userId={this.props.userId}
                    flight={flight}
                    airport={this.props.airport}
                  />
                ))}
              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Departure",
        render: () => (
          <Tab.Pane>
            <Table padded="very">
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell>Airline</Table.HeaderCell>
                  <Table.HeaderCell>Flight Number</Table.HeaderCell>
                  <Table.HeaderCell>scheduledTime</Table.HeaderCell>
                  <Table.HeaderCell>estimatedTime</Table.HeaderCell>
                  <Table.HeaderCell>Delay</Table.HeaderCell>
                  <Table.HeaderCell>Terminal</Table.HeaderCell>
                  <Table.HeaderCell>status</Table.HeaderCell>
                  {/* <Table.HeaderCell>follow</Table.HeaderCell> */}
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.departures.map(departure => (
                  <TimeTable
                    key={departure.flight.iataNumber}
                    userId={this.props.userId}
                    flight={departure}
                    airport={this.props.airport}
                  />
                ))}
              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Airport Info",
        render: () => (
          <Tab.Pane>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <Header as="h3">
                    Contact number: {this.props.airport.phone}
                  </Header>
                  <Header as="h3">
                    Country: {this.props.airport.nameCountry}
                  </Header>
                  <Header as="h3">
                    {Math.round(this.props.airport.distance * 10) / 10} Miles
                    away
                  </Header>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <Header as="h3">User comments</Header>
                  <Divider />
                  <Comments airport={this.props.airport} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Tab.Pane>
        )
      }
    ];
    return (
      <React.Fragment>
        <Container fluid>
          <Image
            src={"/images/" + this.props.airport.codeIcaoAirport + ".jpg"}
            onError={e => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/150/150/?blur=6";
            }}
            fluid
          />
        </Container>
        <Container className="aiporthome">
          <Header as="h1" icon="plane" color="black">
            {this.props.airport.nameAirport}
          </Header>
          <Header as="h3" icon="plane" color="black">
            {this.props.airport.codeIataAirport}
          </Header>
          <Rating maxRating={5} defaultRating={3} icon="star" size="large" />
          <Tab panes={panes} />
        </Container>
      </React.Fragment>
    );
  }
}

export default AirportDetails;
