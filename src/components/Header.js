import React from 'react';
import kegImage from "./../img/kegs.png";

function Header(){
  return(
    <React.Fragment>
      <h1>Pints & Pitchers</h1>
      <img src={kegImage} alt="An image of kegs" />
    </React.Fragment>
  );
}

export default Header;