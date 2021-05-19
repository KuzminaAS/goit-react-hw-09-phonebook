import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';

import ButtonForm from '../ButtonForm';
import { getContacts } from '../../../redux/contacts/contacts-selectors';
import operations from '../../../redux/contacts/contacts-operations';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const list = (useSelector(state => getContacts(state), shallowEqual));

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;
        const result = list.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)

        if (result) {
            alert(`${name} is already in contacts`);
        } else {
            dispatch(operations.addContact({ name, number }));
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
export default ContactForm;

