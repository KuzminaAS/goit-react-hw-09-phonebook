import React from 'react';
import { useSelector, shallowEqual} from 'react-redux';
import allSelectors from '../../../redux/auth/auth-selectors';
import styles from './NavBar.module.css';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';


const NavBar = () => {
  const isLoggedIn = useSelector(state => (allSelectors.getIsAuthenticated(state)), shallowEqual);
    return (
    <header className={styles.header}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
)
};



export default NavBar;
