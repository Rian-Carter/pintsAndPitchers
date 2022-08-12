import React from 'react';
import Keg from './Keg';

const mainKegList = [
  {
    name: 'Wanderlust',
    origin: 'Portland, OR',
    price: '$6.50',
    abv: '6.5%'
  },
  {
    name: 'Johnny Utah',
    origin: 'Bend, OR',
    price: '$6.50',
    abv: '5.5%'
  },
  {
    name: 'Belching Beaver',
    origin: 'Seattle, WA',
    price: '$6.50',
    abv: '3.7%'
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr />
      {mainKegList.map((keg, index) =>
        <Keg
          name={keg.name}
          origin={keg.origin}
          price={keg.price}
          abv={keg.abv}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;