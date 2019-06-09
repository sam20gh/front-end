import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Image, Item, Label } from "semantic-ui-react";

const Airport = props => {
  const { airport } = props;

  return (
    <Item.Group divided>
      <Item href="#card-example-link-card">
        <Item.Image
          src="https://picsum.photos/100/100/?grayscale&blur=8"
          size="tiny"
        />
        <Item.Content>
          <Item.Header as="a">{airport.nameAirport}</Item.Header>
          <Item.Meta>
            <span className="cinema">{airport.codeIcaoAirport}</span>
          </Item.Meta>
          <Item.Description>{airport.nameAirport}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default Airport;
