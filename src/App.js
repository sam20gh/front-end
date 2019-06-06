import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./componenets/homepage";
import AirportList from "./componenets/AirportList";
import Navbar from "./componenets/NavBar";

class App extends Component {
  state = {
    airports: [],
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
    console.log(API_KEY);
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
      .then(unFilteredAirports =>
        unFilteredAirports.filter(airport => airport.codeIcaoAirport !== "")
      )
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
        </Switch>
      </div>
    );
  }
}

export default App;
