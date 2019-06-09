import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./componenets/homepage";
import AirportList from "./componenets/AirportList";
import Navbar from "./componenets/NavBar";
import AirportDetails from "./componenets/AirportDetails";

class App extends Component {
  state = {
    airports: [],
    selectedAirport: null,
    lat: null,
    lng: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          this.fetchAirportData
        );
      },
      err => console.log(err)
    );
  }

  fetchAirportData = () => {
    const API_KEY = process.env.REACT_APP_AVIATION_API_KEY;
    fetch(
      "http://aviation-edge.com/v2/public/nearby?key=" +
        API_KEY +
        "&lat=" +
        this.state.lat +
        "&lng=" +
        this.state.lng +
        "&distance=50"
    )
      .then(resp => resp.json())
      .then(json => json.filter(airport => airport.codeIcaoAirport !== ""))
      .then(airports => this.setState({ airports }));
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={prop => <HomePage airports={this.state.airports} />}
          />
          <Route
            exact
            path="/airports"
            component={props => (
              <AirportList {...props} airports={this.state.airports} />
            )}
          />
          <Route
            path="/airports/:code"
            component={props => {
              const code = props.match.params.code;
              const airport = this.state.airports.find(
                airport => airport.codeIcaoAirport === code
              );

              if (this.state.airports.length === 0) return <h1>Loading...</h1>;

              if (this.state.airports.length > 0 && airport === undefined)
                return <h1>Airport not found</h1>;

              return (
                <AirportDetails
                  {...props}
                  airport={airport}
                  getTimeTable={this.getTimeTable}
                />
              );
            }}
          />
          <Route component={props => <h1>404 - Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
