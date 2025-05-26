import React from 'react';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    s;
  };

  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="/icons.svg#icon-user"></use>
          </svg>
          <p>{name}</p>
        </div>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="/icons.svg#icon-phone"></use>
          </svg>
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
