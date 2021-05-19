import React from 'react';

import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';
import ButtonForm from '../../shared/components/ButtonForm';
import { useDispatch} from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css'

const LoginView = () => {

  const dispatch = useDispatch();
 
    return (
      <Formik
        onSubmit={(values) => {dispatch(authOperations.logIn(values))}}
        initialValues={initialValues} 
      >
        <Form
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <Field className={styles.field}
              {...fields.email}
            />
          </label>

          <label className={styles.label}>
            <Field className={styles.field}
              {...fields.password}
            />
          </label>
          <ButtonForm>Log in</ButtonForm>
        </Form>
      </Formik>
    );
}

export default LoginView;
