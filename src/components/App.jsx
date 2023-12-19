import React, { useEffect, useState } from 'react';

import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import { nanoid } from 'nanoid';
import SearchContact from './Search/SearchContact';
import { StyledWrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    
    if (storedContacts?.length) {
      setContacts(storedContacts)
    }
  }, []);
  
  useEffect(() =>{
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  const  handleAddNewContact = newData => {
    const contactToFind = contacts.find(
      contact => contact.name === newData.name
    );
    if (contactToFind) {
      alert(`${newData.name} is already in your list!`);
    } else {
      const newContact = { id: nanoid(), ...newData };
     
      setContacts(prev => [...prev, newContact])
    }
  };

 const  handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  };

 const  handleSearchContact = name => {
   setFilter(name)
  };

  const getFilterData = () => {
    return contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  return (
    <StyledWrapper>
      <h1>Contact book</h1>
      <AddContactForm addContact={handleAddNewContact} />
      <SearchContact setFilter={handleSearchContact} />
      <ContactList
        deleteContact={handleDeleteContact}
        contacts={getFilterData()}
      />
    </StyledWrapper>
  );
  



}

export default App;
