import React from 'react';
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.beer}</h3>
      <p><em>{props.status}</em></p>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  beer: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Keg;