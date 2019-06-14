import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Image, Item, Label, Card, Icon } from "semantic-ui-react";
import API from "../API";
import dashboard from "./Dashborad";

class MyAirport extends Component {
  handleLike = () => {
    API.likeAirport(this.props.myairport).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      }
    });
  };
  render() {
    if (this.props.myairport) {
      return (
        <Card centered="true">
          <Image
            fluid
            src={"/images/" + this.props.myairport.icaocode + ".jpg"}
            onError={e => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/150/150/?blur=6";
            }}
            alt={this.props.myairport.name}
            wrapped
            ui={true}
            wrapped
            ui={true}
          />
          <Card.Content>
            <Card.Header>{this.props.myairport.name}</Card.Header>
            <Card.Meta>
              <span className="date">{this.props.myairport.icaocode}</span>
            </Card.Meta>
            <Card.Description>{this.props.myairport.icaocode}</Card.Description>
            <span className="date">{this.props.myairport.icaocode}</span>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="map marker alternate" />
              {Math.round(this.props.myairport.distance * 10) / 10} Miles
            </a>
            <a
              className="icon-right"
              onClick={event => {
                event.stopPropagation();
                this.handleLike();
              }}
            >
              <Icon name="heart outline" />
            </a>
          </Card.Content>
        </Card>
      );
    } else {
      return "jjjhh";
    }
  }
}

export default MyAirport;
