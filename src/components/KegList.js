import React from 'react';
import Keg from './Keg';

const mainKegList = [
  {
    beer: 'Wanderlust',
    location: 'Portland, OR',
    status: '50%'
  },
  {
    beer: 'Johnny Utah',
    location: 'Bend, OR',
    status: '73%'
  },
  {
    beer: 'Belching Beaver',
    location: 'Seattle, WA',
    status: '24%'
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr />
      {mainKegList.map((keg, index) =>
        <Keg
          beer={keg.beer}
          location={keg.location}
          status={keg.status}
          key={index}/>
        )}
    </React.Fragment>
  );
}

export default KegList;