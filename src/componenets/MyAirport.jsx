import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import API from "../API";

class MyAirport extends Component {
  handleLike = () => {
    API.likeAirport(this.props.myairport).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        // window.location.reload();

        API.getMyAirports().then(data => {
          if (data.error) {
            alert(data.error);
          } else {
            this.props.handleStateUpdateLikeAirport(data);
          }
        });
      }
    });
  };

  render() {
    const { liked } = this.props;
    if (this.props.myairport) {
      return (
        <Card
          centered="true"
          href={"../airports/" + this.props.myairport.iatacode}
        >
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
              <span className="date">
                ICAO Code: {this.props.myairport.icaocode}
              </span>
            </Card.Meta>
            <Card.Description>
              IATA code: {this.props.myairport.iatacode}
            </Card.Description>
          </Card.Content>
        </Card>
      );
    } else {
      return "jjjhh";
    }
  }
}

export default MyAirport;
