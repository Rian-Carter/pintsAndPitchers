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
      <Keg 
        location="Portalnd, OR"
        beer="Wanderlust"
        status="Kegs are running low"/>
      <Keg
        location="Bend, OR"
        beer="Johnny Utah"
        status="Topped Up"/>
    </React.Fragment>
  );
}

export default KegList;