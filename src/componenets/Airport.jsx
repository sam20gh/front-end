import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Image, Item, Label, Card, Icon } from "semantic-ui-react";

const Airport = props => {
  const { airport } = props;

  return (
    <Card href={"../airports/" + airport.codeIcaoAirport} centered="true">
      <Image
        fluid
        label={{
          as: "a",
          color: "red",
          content: "Nearest",
          icon: "map marker alternate",
          ribbon: true
        }}
        src="https://picsum.photos/300/300/?grayscale&blur=10"
        wrapped
        ui={true}
      />
      <Card.Content>
        <Card.Header>{airport.nameAirport}</Card.Header>
        <Card.Meta>
          <span className="date">{airport.codeIcaoAirport}</span>
        </Card.Meta>
        <Card.Description>{airport.nameAirport}</Card.Description>
        <span className="date">{airport.nameCountry}</span>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="map marker alternate" />
          {airport.distance}
        </a>
      </Card.Content>
    </Card>
  );
};

export default Airport;
