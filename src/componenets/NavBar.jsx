import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Dropdown, Button } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { username } = this.props;

    return (
      <Menu stackable>
        <Menu.Item as={Link} to="/">
          <img src="/images/logo.png" />
        </Menu.Item>

        <Menu.Item
          name="list ul"
          to="/home"
          active={activeItem === "list ul"}
          onClick={this.handleItemClick}
        >
          <Icon name="list ul" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/dashboard">
            <Icon name="user circle outline" />
            <p>{!username ? "Welcome" : `Welcome ${username}`}</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
