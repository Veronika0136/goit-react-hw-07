import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    options.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mini 3 characters')
      .max(50, 'Max 50 characters')
      .trim()
      .required('Name is required'),
    number: Yup.string()
      .matches(/^[0-9\-()+\s]+$/, 'Must be a valid phone number')
      .min(9, 'There must be a number format')
      .max(12, 'Max 12 numbers')
      .trim()
      .required('Phone number is required'),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={ContactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.err} name="name" component="p" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.err} name="number" component="p" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
