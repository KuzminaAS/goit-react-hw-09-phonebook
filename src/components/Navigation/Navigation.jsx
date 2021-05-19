import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({isAuthenticated})  => {
    return (
    <nav className={styles.nav}>
    <NavLink to="/" exact className={styles.link} activeClassName={styles.active_link}>
      Home
    </NavLink>
      {isAuthenticated && (<NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.active_link}
    >
      Contacts
    </NavLink>)}
  </nav>
    )
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(Navigation);
