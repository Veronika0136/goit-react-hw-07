import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectError, selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const searchContact = useSelector(selectNameFilter);
  const error = useSelector(selectError);

  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.flex}>
        {filterContacts.map(({ name, number, id }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};

export default ContactList;
