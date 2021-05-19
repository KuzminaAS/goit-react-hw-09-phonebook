import React, { Component } from 'react';

import { Formik, Form, Field } from "formik";
import ButtonForm from '../../components/ButtonForm';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css'

class LoginView extends Component {
  state = {
    email:'',
    password:'',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Formik>
        <Form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <Field className={styles.field}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </label>

          <label className={styles.label}>
            <Field className={styles.field}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </label>
          <ButtonForm>Log in</ButtonForm>
        </Form>
      </Formik>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn
}

export default connect(null, mapDispatchToProps)(LoginView);
