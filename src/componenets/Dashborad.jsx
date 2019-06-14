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
  Container,
  Divider
} from "semantic-ui-react";
import MyAirport from "./MyAirport";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/login");
    } else {
      console.log("fff");
    }
  }
  render() {
    const { username, signout, myairports } = this.props;
    return (
      <React.Fragment>
        <Container fluid className="profile">
          <Image src="https://picsum.photos/450/150/" fluid />
        </Container>
        <Image
          className="profile-image"
          src="https://picsum.photos/150/150/"
          size="small"
          circular
        />
        <Container>
          <div>
            <Container textAlign="left">
              {" "}
              <Header as="h1">{`Welcome ${username}`}</Header>
            </Container>
            <Container textAlign="right">
              <b />
              <Button negative onClick={signout}>
                Sign out
              </Button>
            </Container>
          </div>
          {/* <Container>
            <Header as="h2">{`Welcome ${username}`}</Header>

            <Button negative onClick={signout}>
              Sign out
            </Button>
          </Container> */}

          <Container>
            <Header as="h3">You are following these Airports</Header>
            <Grid stackable columns={3}>
              {myairports.length === 0 && (
                <p>Sorry, you don't have any items.</p>
              )}
              {myairports.map(myairport => (
                <MyAirport key={myairport.id} myairport={myairport} />
              ))}
            </Grid>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
