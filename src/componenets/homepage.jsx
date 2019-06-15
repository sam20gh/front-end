import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Segment,
  Input,
  Icon,
  Header,
  Divider,
  Container
} from "semantic-ui-react";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="landing-image">
            <Container>
              <Header as="h2" icon textAlign="center">
                <Icon name="plane" circular />
                <Header.Content>Airio</Header.Content>
                <p>Search flights and Airports</p>
                <p>now</p>
              </Header>
              <Input id="test" fluid icon="search" placeholder="Search..." />
            </Container>
          </div>
        </div>
        <Divider />
        <Container>
          <Header as="h2" icon textAlign="center">
            <Header.Content>Your nearest airports are</Header.Content>
          </Header>
          {/* <Image centered size='large' src='/images/wireframe/centered-paragraph.png' /> */}

          <Grid stackable columns={3}>
            {this.props.airports.map(airport => (
              <Airport key={airport.airportId} airport={airport} />
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomePage;
