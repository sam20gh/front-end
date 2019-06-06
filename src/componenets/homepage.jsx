import React, { Component } from "react";
import Airport from "./Airport";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div
            id="carouselFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <section className="search-sec">
          <div className="container">
            <form action="#" method="post" noValidate="noValidate">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 p-0">
                      <input
                        type="text"
                        className="form-control search-slt"
                        placeholder="Enter Airport or flight number"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                      <button type="button" className="btn btn-danger wrn-btn">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="container">
          <div className="row">
            {this.props.airports.map(airport => (
              <Airport key={airport.airportId} airport={airport} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
