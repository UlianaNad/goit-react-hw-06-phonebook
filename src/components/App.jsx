import React from 'react';
import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import {SearchContact} from './Search/SearchContact';
import { StyledWrapper } from './App.styled';

export const App = () => {

  // useEffect(() => {
  //   const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    
  //   if (storedContacts?.length) {
  //     setContacts(storedContacts)
  //   }
  // }, []);
  
  // useEffect(() =>{
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // },[contacts])






  return (
    <StyledWrapper>
      <h1>Contact book</h1>
      <AddContactForm  />
      <SearchContact  />
      <ContactList   />
    </StyledWrapper>
  );
  



}

export default App;
