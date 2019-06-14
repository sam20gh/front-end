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

class JoinForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    dob: "",
    email: "",
    password: ""
  };

  handleSubmit = () => {
    API.join(this.state).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        // user is authenticated!
        this.props.signin(this.state.username);
        this.props.history.push("/dashboard");
        localStorage.setItem("token", data.token);
      }
    });
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
            <Image src="/images/logo.png" /> Join Airio now
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First name"
                onChange={handleChange}
                type="first_name"
                id="first_name"
                name="first_name"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                onChange={handleChange}
                placeholder="last Name"
                type="last_name"
                id="last_name"
                name="last_name"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                placeholder="Date of Birth"
                type="dob"
                id="dob"
                name="dob"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                placeholder="username"
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
                name="first_password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                placeholder="re enter Password"
                type="password"
                id="password"
                name="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                placeholder="email"
                type="email"
                id="email"
                name="email"
              />

              <Button color="teal" fluid size="large" onClick={handleSubmit}>
                Join Now
              </Button>
            </Segment>
          </Form>
          <Message>Thank you</Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default JoinForm;
