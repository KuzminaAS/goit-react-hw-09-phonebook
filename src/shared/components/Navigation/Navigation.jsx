import React from 'react';
import { useSelector, shallowEqual} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';
import styles from './Navigation.module.css';


const Navigation = () => {
  const isLoggedIn = useSelector(state=>(authSelectors.getIsAuthenticated(state)), shallowEqual);
  return (
    <nav className={styles.nav}>
    <NavLink to="/" exact className={styles.link} activeClassName={styles.active_link}>
      Home
    </NavLink>
      {isLoggedIn && (<NavLink
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

export default Navigation;