import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./componenets/homepage";
import AirportList from "./componenets/AirportList";
import Navbar from "./componenets/NavBar";
import AirportDetails from "./componenets/AirportDetails";
import { Dimmer, Loader, Image, Segment, Container } from "semantic-ui-react";
import LoginForm from "./componenets/LoginForm";
import Dashboard from "./componenets/Dashborad";
import API from "./API";

class App extends Component {
  state = {
    username: "",
    airports: [],
    selectedAirport: null,
    lat: null,
    lng: null
  };
  signin = (username, token) => {
    localStorage.setItem("token", token);
    this.setState({ username });
    // this.setState({ username }, () => {
    //   this.props.history.push("/airports");
    // });
  };

  signout = () => {
    this.setState({ username: "" });
    localStorage.removeItem("token");
  };
  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        this.props.history.push("/login");
      } else {
        this.signin(data.username, localStorage.getItem("token"));
      }
    });
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
    const { signin, signout } = this;
    const { username } = this.state;
    return (
      <div className="App">
        <Navbar username={username} />
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
            exact
            path="/login"
            component={props => (
              <LoginForm
                {...props}
                signin={signin}
                airports={this.state.airports}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            component={props => (
              <Dashboard
                {...props}
                signout={signout}
                username={username}
                airports={this.state.airports}
              />
            )}
          />
          <Route
            path="/airports/:code"
            component={props => {
              const code = props.match.params.code;
              const airport = this.state.airports.find(
                airport => airport.codeIcaoAirport === code
              );

              if (this.state.airports.length === 0)
                return (
                  <Container textAlign="center">
                    <Segment>
                      <Dimmer active>
                        <Loader size="tiny">Loading</Loader>
                      </Dimmer>

                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Segment>
                  </Container>
                );

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

export default withRouter(App);
