import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src="/logo.png" />
        </Menu.Item>

        <Menu.Item
          name="list ul"
          to="/home"
          active={activeItem === "list ul"}
          onClick={this.handleItemClick}
        >
          <Icon name="list ul" />
        </Menu.Item>
      </Menu>
    );
  }
}
