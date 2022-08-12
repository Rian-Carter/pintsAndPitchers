import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.origin} - {keg.name} - {keg.price}</h3>
      <p><em>{keg.abv}</em></p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;