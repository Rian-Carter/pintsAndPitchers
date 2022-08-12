import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.origin} - {keg.name} - {keg.price}</h3>
      <p><em>{keg.abv}</em></p>
      <button onClick={()=> onClickingDelete(ticket.id) }>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;