import { useSelector, useDispatch, shallowEqual} from 'react-redux';

import { Formik, Form, Field } from "formik";
import { fields } from './fields';
import { initialValues } from './initialValues';

import { changeFilter } from '../../../redux/contacts/contacts-actions';
import { getContactsFilter } from '../../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = () => {
    
    const value = useSelector(state => getContactsFilter(state), shallowEqual);

    const dispatch = useDispatch();
   
    return (
        <Formik
        initialValues={initialValues}>
        <Form className={styles.form}>
        <label className={styles.label}>
        <Field className={styles.field}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        value={value}
        {...fields.name}                
         />         
        </label>
        </Form>
        </Formik>
    )
};
export default Filter;


