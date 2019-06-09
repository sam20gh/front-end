import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Image, Item, Label } from "semantic-ui-react";

const Airport = props => {
  const { airport } = props;

  return (
    <Link to={props.airport}>
    <Item.Group divided>
  
      <Item>
        <Item.Image
          src="https://picsum.photos/100/100/?grayscale&blur=8"
          size="tiny"
        />
        <Item.Content>
          <Item.Header >{airport.nameAirport}</Item.Header>
          <Item.Meta>
            <span className="cinema">{airport.codeIcaoAirport}</span>
          </Item.Meta>
          <Item.Description>{airport.nameAirport}</Item.Description>
        </Item.Content>
      </Item>
      
    </Item.Group>
    </Link>
    
  );
};

export default Airport;
