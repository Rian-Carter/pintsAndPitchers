import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete, onPurchasingKeg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.origin}</h3>
      <p><em>{keg.abv}%</em></p>
      <p><em>${keg.price} per keg</em></p>
      <h1>Availability: {""}
      {keg.quantity > 0 ? keg.quantity + " kegs" : "Out of Stock"}
      </h1>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <button onClick={()=> onPurchasingKeg(keg.id)}>Purchase</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func,
};

export default KegDetail;