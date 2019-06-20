import React, { Component } from "react";
import SingleFlight from "./SingleFlight";
import TimeTable from "./TimeTable";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Input,
  Icon,
  Header,
  Divider,
  Container,
  Table
} from "semantic-ui-react";
import Moment from "react-moment";
import Switch, { Case, Default } from "react-switch-case";

class Plane extends Component {
  state = {
    plane: {}
  };

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_AVIATION_API_KEY;
    fetch(
      "https://aviation-edge.com/v2/public/airplaneDatabase?key=" +
        API_KEY +
        "&hexIcaoAirplane=" +
        this.props.route[0].aircraft.icao24
    )
      .then(resp => resp.json())
      .then(plane => {
        this.setState({ plane });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.plane.length > 0 && (
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" color="red">
                  <small>Plane Type: </small>{" "}
                  {this.state.plane[0].productionLine}
                </Header>
                <Header as="h3">
                  <small>Registration Number: </small>{" "}
                  {this.state.plane[0].numberRegistration}
                </Header>
                <Header as="h3">
                  <small>Age: </small> {this.state.plane[0].planeAge} years
                </Header>
                <Header as="h3">
                  <small>Number of Engines: </small>{" "}
                  {this.state.plane[0].enginesCount}
                </Header>
              </Grid.Column>

              <Grid.Column>
                <img src="/images/747.jpg" size="medium" centered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default Plane;
