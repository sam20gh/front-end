import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  TableFooter,
  Container
} from "semantic-ui-react";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/login");
    } else {
      alert("welcome");
    }
  }
  render() {
    const { username, signout } = this.props;
    return (
      <Container fluid>
        <Header as="h2">{`Welcome ${username}`}</Header>

        <Button negative onClick={signout}>
          Sign out
        </Button>
      </Container>
    );
  }
}

export default Dashboard;
