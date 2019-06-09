import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import { Grid, Image, Segment, Input, Icon, Header, Divider, Container, Table } from "semantic-ui-react";
import Switch, { Case, Default } from 'react-switch-case';


class TimeTable extends Component {
  render() {
    
    return (
      <React.Fragment>
          <Table.Body>
            <Table.Row>
            <th scope="row">#</th>
            <td> 
              <Switch condition={ this.props.flight.airline.name }>
                <Case value="Flybe">
                  <span>sdgbdgdfgdfgdfg</span>
                </Case>
                <Case value="component2">
                  <span>Component 2</span>
                </Case>
                <Default>
                  <span>{this.props.flight.airline.name}</span>
                </Default>
              </Switch>
            </td>
            <td>{this.props.flight.flight.number}</td>
            <td>{this.props.flight.arrival.scheduledTime}</td>
            <td>{this.props.flight.arrival.estimatedTime}</td>
            <td>{this.props.flight.status}</td>
            <td ><Icon disabled name='chevron right' /></td>
          </Table.Row>
        </Table.Body>
      </React.Fragment>
    );
  }
}

export default TimeTable;
