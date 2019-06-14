import React, { Component } from "react";
import SingleFlight from "./SingleFlight";
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

class TimeTable extends Component {
  state = {
    contentLinkClicked: false,
    liked: {}
  };
  handleShowFlight = () => {
    this.setState({
      contentLinkClicked: true
    });
  };
  handleLike = flight => {
    this.setState({
      liked: flight
    });
  };
  render() {
    return (
      <React.Fragment>
        <Table.Row
          onClick={e => {
            e.preventDefault();
            this.setState({
              contentLinkClicked: !this.state.contentLinkClicked
            });
          }}
        >
          <Table.Cell>
            <img
              src={"/images/" + this.props.flight.airline.icaoCode + ".png"}
              onError={e => {
                e.target.onerror = null;
                e.target.src = "/images/default.png";
              }}
              alt={this.props.flight.airline.name}
            />
          </Table.Cell>
          <Table.Cell>{this.props.flight.flight.iataNumber}</Table.Cell>
          <Table.Cell>
            {" "}
            <Moment format="HH:mm">
              {this.props.flight.arrival.scheduledTime}
            </Moment>
          </Table.Cell>
          <Table.Cell>
            <Moment format="HH:mm">
              {this.props.flight.arrival.estimatedTime}
            </Moment>
          </Table.Cell>
          <Table.Cell>
            <Switch
              condition={this.props.flight.arrival.delay}
              addClass={"negative"}
            >
              <Case value="14">
                <span>{this.props.flight.arrival.delay} min</span>
              </Case>
              <Default>
                <span>On time</span>
              </Default>
            </Switch>
          </Table.Cell>
          <Table.Cell> {this.props.flight.arrival.terminal}</Table.Cell>
          <Table.Cell className="positive">
            {this.props.flight.status}
          </Table.Cell>
          <Table.Cell
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              this.handleLike(this.props.flight);
            }}
          >
            <Icon disabled name="heart outline" />
          </Table.Cell>
          <Table.Cell>
            <Icon disabled name="chevron right" />
          </Table.Cell>
        </Table.Row>
        {this.state.contentLinkClicked ? (
          <Table.Row>
            <Table.Cell colSpan="9">
              <SingleFlight flight={this.props.flight} />
            </Table.Cell>
          </Table.Row>
        ) : null}
      </React.Fragment>
    );
  }
}

export default TimeTable;
