import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg
          whenKegClick = { props.onKegSelection }
          name={keg.name}
          origin={keg.origin}
          price={keg.price}
          abv={keg.abv}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;