import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='abv'
          placeholder='%5.5' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;