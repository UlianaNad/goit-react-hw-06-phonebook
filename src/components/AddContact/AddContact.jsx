import React, { useState } from 'react';
import { StyledButtonSubmit, StyledForm, StyledInput } from './AddContact.styled';
import PropTypes from 'prop-types';

export const AddContactForm = ({addContact}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  

  const handleChangeInput = ({ target }) => {
    if(target.name === 'name'){
      setName(target.value);
    }else {
      setNumber(target.value)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({name, number});

    setName('')
    setNumber('')
  };

    return (
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            value={name}
            onChange={handleChangeInput}
            type="text"
            name="name"
            required
            placeholder="New name"
          />
          <StyledInput
            value={number}
            onChange={handleChangeInput}
            type="tel"
            name="number"
            required
            placeholder="Phone number"
          />

          <StyledButtonSubmit>Add new contact</StyledButtonSubmit>
        </StyledForm>
      </div>
    );
}

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};