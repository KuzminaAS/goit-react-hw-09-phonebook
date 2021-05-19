import React from 'react';
import { Formik, Form, Field } from "formik";
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getContactsFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = ({value, onChange }) =>  {
   
    return (
        <Formik>
        <Form className={styles.form}>
        <label className={styles.label}>
        <Field className={styles.field}
            type="text"
            name="name"
            value={value}
            onChange = {onChange}
            placeholder="Find contacts by name"
            />
        </label>
        </Form>
        </Formik>
    )
};

const mapStateToProps = state => ({ 
     value: getContactsFilter(state)
})

const mapDispatchToProps = dispatch => ({ onChange: (evt) => dispatch(changeFilter(evt.target.value))})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


