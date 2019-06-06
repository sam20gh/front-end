import React from "react";
import { NavLink } from "react-router-dom";

// import Search from "./Search";

const Navbar = props => (
  <React.Fragment>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
      <a className="navbar-brand" href="#">
        <strong>Navbar</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="view intro hm-purple-light" styles="height: 400px;" />
  </React.Fragment>
);

export default Navbar;
