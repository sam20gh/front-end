import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #f27125;
  border: 2px solid #f0f0f0;
  border-radius: 100%;
  user-select: none;
  image: require('/images/airplane-flight.svg'),
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    {...(props.onClick ? { onClick: props.onClick } : {})}
  />
);

Marker.defaultProps = {
  onClick: null
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Marker;
