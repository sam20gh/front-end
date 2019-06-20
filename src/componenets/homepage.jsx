import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import {
  Grid,
  Image,
  Segment,
  Input,
  Icon,
  Header,
  Divider,
  Button,
  Container
} from "semantic-ui-react";
// const allAirports = this.props.allAirports;

class HomePage extends Component {
  state = {
    value: "",
    suggestions: []
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.allAirports.filter(
          airport =>
            airport.nameAirport.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  getSuggestionValue = suggestion => {
    return suggestion.nameAirport;
  };

  renderSuggestion = suggestion => {
    return <span>{suggestion.nameAirport}</span>;
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const allAirports = this.props.allAirports;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter Airport name",
      value,
      onChange: this.onChange
    };
    const doILikeThisAirport = targetAirport =>
      this.props.myairports.some(
        airport => airport.name === targetAirport.nameAirport
      );
    return (
      <React.Fragment>
        <div className="landing-image">
          <div className="ui vertical center aligned segment">
            <Container>
              <Header as="h1" icon textAlign="center" color="black">
                <Icon name="plane" color="orange" circular />
                <Header.Content>Airio</Header.Content>
                <p>Search Airports and find their Live timetable</p>
              </Header>
              <Grid>
                <Grid.Column stackable width={12}>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={
                      this.onSuggestionsFetchRequested
                    }
                    onSuggestionsClearRequested={
                      this.onSuggestionsClearRequested
                    }
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                  />
                </Grid.Column>
                <Grid.Column stackable width={4}>
                  {this.state.suggestions[0] && (
                    <Button
                      content="Search"
                      color="red"
                      as={Link}
                      to={
                        "/airports/" + this.state.suggestions[0].codeIataAirport
                      }
                    />
                  )}
                  {!this.state.suggestions[0] && (
                    <Button content="Search" color="red" as={Link} />
                  )}
                </Grid.Column>
              </Grid>
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
              <Airport
                key={airport.airportId}
                airport={airport}
                myairports={this.props.myairports}
                allAirports={this.props.allAirports}
                liked={doILikeThisAirport(airport)}
                handleStateUpdateLikeAirport={data =>
                  this.props.handleStateUpdateLikeAirport(data)
                }
              />
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomePage;
