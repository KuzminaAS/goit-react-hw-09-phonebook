import React from 'react';
import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';
import ButtonForm from '../ButtonForm';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

import styles from './ContactForm.module.css';

const ContactForm = ({onSubmit, list}) => {

    const handleSubmit = (values, { resetForm }) => {

        const { name, number } = values;
      const result = list.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)

      if (result) {
        alert(`${name} is already in contacts`);
      } else {
        onSubmit( {name, number });
        resetForm();
      }
    }

    return (
        <Formik 
            onSubmit={handleSubmit}
            initialValues={initialValues} >
            <Form className={styles.form}> 
                <label className={styles.label}>
                    <Field className={styles.field} {...fields.name} />
                </label>

                <label className={styles.label}>
                    <Field  className={styles.field} {...fields.number} />
                </label>
                <ButtonForm>Add contact</ButtonForm>
            </Form>
        </Formik>
    )
};

const mapStateToProps = state => ({ 
     list: getContacts(state)
})

const mapDispatchToProps = dispatch => ({ onSubmit: ({ name, number }) => dispatch(operations.addContact({name, number }))})

export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);

