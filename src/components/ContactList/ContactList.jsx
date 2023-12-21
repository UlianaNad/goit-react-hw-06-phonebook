import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import { StyledUl } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { searchContact } from '../../redux/selectors';
import { contactsData } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(contactsData);
  const filter = useSelector(searchContact);

  const searchWord = filter.filter.toLowerCase();
  const filteredData = contacts.filter((contact) => {
   return contact.name.toLowerCase().includes(searchWord)
  })

console.log(contacts.length);
  return (
    <div>
      <h2>Contact list</h2>
      {contacts.length !== 0 ? (
        <StyledUl>
        {filteredData.map((contact) => (
          <ContactItem {...contact} key={contact.id} />
        ))}
      </StyledUl>
      ) : <h3>You don`t have any contacts yet...</h3>}
    </div>
  );
}

export default ContactList;
