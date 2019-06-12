import React, { Component } from "react";
import API from "../API";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    API.signin(this.state).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        // user is authenticated!
        this.props.signin(this.state.username);
        this.props.history.push("/airports");
        localStorage.setItem("token", data.token);
      }
    });
    console.log(this.state);
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/images/logo.png" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleChange}
                type="username"
                id="username"
                name="username"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                placeholder="Password"
                type="password"
                id="password"
                name="password"
              />

              <Button color="teal" fluid size="large" onClick={handleSubmit}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
