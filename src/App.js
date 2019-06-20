import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./Componenets/homepage";
import AirportList from "./Componenets/AirportList";
import Navbar from "./Componenets/NavBar";
import AirportDetails from "./Componenets/AirportDetails";
import { Dimmer, Loader, Image, Segment, Container } from "semantic-ui-react";
import LoginForm from "./Componenets/LoginForm";
import Dashboard from "./Componenets/Dashborad";
import JoinForm from "./Componenets/JoinForm";
import Footer from "./Componenets/Footer";
import API from "./API";

class App extends Component {
  state = {
    username: "",
    userId: "",
    airports: [],
    allAirports: [],
    myairports: [],
    lat: null,
    lng: null
  };
  signin = (username, token, userId) => {
    localStorage.setItem("token", token);
    this.setState({ username, userId });
    // this.setState({ username }, () => {
    //   this.props.history.push("/airports");
    // });
  };

  handleStateUpdateLikeAirport = data => {
    this.setState({
      myairports: data
    });
  };

  signout = () => {
    this.setState({ username: "" });
    localStorage.removeItem("token");
  };
  componentDidMount() {
    API.validate().then(data => {
      this.signin(data.username, localStorage.getItem("token"));
    });
    API.getMyAirports().then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.setState({ myairports: data });
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
    this.fetchAllAirportData();
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
        "&distance=44.8"
    )
      .then(resp => resp.json())
      .then(json => json.filter(airport => airport.codeIcaoAirport !== ""))
      .then(airports => this.setState({ airports }));
  };
  fetchAllAirportData = () => {
    const API_KEY = process.env.REACT_APP_AVIATION_API_KEY;
    fetch(
      "https://aviation-edge.com/v2/public/airportDatabase?key=" +
        API_KEY +
        "&codeIso2Country=GB"
    )
      .then(resp => resp.json())
      .then(allAirports => this.setState({ allAirports }));
  };

  render() {
    const { signin, signout } = this;
    const { username } = this.state;

    // const allAirports = [
    //   {
    //     created_at: "2019-06-14T09:35:16.374Z",
    //     iatacode: "LCY",
    //     icaocode: "EGLC",
    //     id: 1,
    //     name: "London City Airport",
    //     updated_at: "2019-06-14T09:35:16.374Z"
    //   },
    //   {
    //     created_at: "2019-06-14T09:35:16.374Z",
    //     iatacode: "LCY",
    //     icaocode: "EGLC",
    //     id: 2,
    //     name: "London City Airport",
    //     updated_at: "2019-06-14T09:35:16.374Z"
    //   },
    //   {
    //     created_at: "2019-06-14T09:35:16.374Z",
    //     iatacode: "LCY",
    //     icaocode: "EGLC",
    //     id: 3,
    //     name: "London City Airport",
    //     updated_at: "2019-06-14T09:35:16.374Z"
    //   },
    //   {
    //     created_at: "2019-06-14T09:35:16.374Z",
    //     iatacode: "LCY",
    //     icaocode: "EGLC",
    //     id: 4,
    //     name: "London City Airport",
    //     updated_at: "2019-06-14T09:35:16.374Z"
    //   }
    // ];

    // const airport1 = {
    //   created_at: "2019-06-14T09:35:16.374Z",
    //   iatacode: "LCY",
    //   icaocode: "EGLC",
    //   id: 4,
    //   name: "London City Airport",
    //   updated_at: "2019-06-14T09:35:16.374Z"
    // };

    // const doILikeThisAirport = targetAirport =>
    //   this.state.allAirports.some(airport => airport.id === targetAirport.id);

    return (
      <div className="App">
        {/* <Airport airport={airport1} liked={doILikeThisAirport(airport1)} /> */}
        <Navbar username={username} />
        {/* <Sidebar /> */}
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <HomePage
                {...props}
                airports={this.state.airports}
                allAirports={this.state.allAirports}
                myairports={this.state.myairports}
                handleStateUpdateLikeAirport={data =>
                  this.handleStateUpdateLikeAirport(data)
                }
              />
            )}
          />
          <Route
            exact
            path="/airports"
            component={props => (
              <AirportList
                {...props}
                airports={this.state.airports}
                myairports={this.state.myairports}
                allAirports={this.state.allAirports}
                handleStateUpdateLikeAirport={data =>
                  this.handleStateUpdateLikeAirport(data)
                }
              />
            )}
          />
          <Route
            exact
            path="/join"
            component={props => (
              <JoinForm
                {...props}
                signin={signin}
                airports={this.state.airports}
              />
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
                myairports={this.state.myairports}
                handleStateUpdateLikeAirport={data =>
                  this.handleStateUpdateLikeAirport(data)
                }
              />
            )}
          />
          <Route
            path="/airports/:code"
            component={props => {
              const code = props.match.params.code;
              const airport = this.state.airports.find(
                airport => airport.codeIataAirport === code
              );

              if (this.state.airports.length === 0)
                return (
                  <Container textAlign="center">
                    <Segment>
                      <Dimmer active inverted>
                        <Loader size="large">Loading</Loader>
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
