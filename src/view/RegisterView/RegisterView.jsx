import React, { Component } from 'react'; 

import ButtonForm from '../../components/ButtonForm';
import { Formik, Form, Field } from "formik";
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterView.module.css'

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Formik>
        <Form 
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <Field className={styles.field}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder=" Name"
            />
          </label>

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

          <ButtonForm>Registration</ButtonForm>
        </Form>
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => dispatch(authOperations.register(data)),
})
// alternative: const mapDispatchToProps = {
//   onSubmit: authOperations.register,
// }


export default connect(null, mapDispatchToProps)(RegisterView);
