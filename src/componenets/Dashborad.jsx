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
      console.log("");
    }
  }
  render() {
    const { username, signout, myairports } = this.props;
    const doILikeThisAirport = targetAirport =>
      this.props.myairports.some(
        airport => airport.name === targetAirport.nameAirport
      );
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
        <Container text>
          <div className="dashboard">
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

          <Container>
            <Header as="h2">You are following these Airports</Header>
            <Grid stackable columns={6}>
              {myairports.length === 0 && (
                <p>Sorry, you don't have any items.</p>
              )}
              {myairports.map(myairport => (
                <MyAirport
                  key={myairport.id}
                  myairport={myairport}
                  liked={doILikeThisAirport(myairport)}
                  handleStateUpdateLikeAirport={data =>
                    this.props.handleStateUpdateLikeAirport(data)
                  }
                />
              ))}
            </Grid>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
