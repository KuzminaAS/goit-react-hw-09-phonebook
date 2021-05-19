import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => {
    return (
    <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.active_link}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.active_link}
    >
      Log in
    </NavLink>
  </div>
)
};

export default AuthNav;
