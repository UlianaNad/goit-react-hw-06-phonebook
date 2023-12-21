import React, { useState } from 'react';
import {
  StyledButtonSubmit,
  StyledForm,
  StyledInput,
} from './AddContact.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          placeholder="New name"
        />
        <StyledInput
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          required
          placeholder="Phone number"
        />

        <StyledButtonSubmit>Add new contact</StyledButtonSubmit>
      </StyledForm>
    </div>
  );
};
