import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const searchContact = useSelector(state => state.filters.name);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <ul className={s.flex}>
      {filterContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
