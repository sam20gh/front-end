import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Image, Item, Label, Card, Icon } from "semantic-ui-react";
import API from "../API";

class Airport extends Component {
  handleLike = () => {
    API.likeAirport(this.props.airport).then(data => {
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
    return (
      <Card
        centered="true"
        href={"../airports/" + this.props.airport.codeIataAirport}
      >
        <Image
          fluid
          // label={{
          //   as: "a",
          //   color: "red",
          //   content: "Nearest",
          //   icon: "map marker alternate",
          //   ribbon: true
          // }}
          src={"/images/" + this.props.airport.codeIcaoAirport + ".jpg"}
          onError={e => {
            e.target.onerror = null;
            e.target.src = "https://picsum.photos/150/150/?blur=6";
          }}
          alt={this.props.airport.nameAirpor}
          wrapped
          ui={true}
          wrapped
        />
        <Card.Content>
          <Card.Header>{this.props.airport.nameAirport}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.airport.codeIcaoAirport}</span>
          </Card.Meta>
          <Card.Description>{this.props.airport.nameAirport}</Card.Description>
          <span className="date">{this.props.airport.nameCountry}</span>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="map marker alternate" />
            {Math.round(this.props.airport.distance * 10) / 10} Miles away
          </a>
          <a
            className="icon-right"
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              this.handleLike();
            }}
          >
            <Icon
              name={`heart ${liked ? "" : "outline"}`}
              color={liked ? "red" : ""}
            />
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default Airport;
