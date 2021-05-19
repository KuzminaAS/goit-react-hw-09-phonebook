import React from 'react';
import { connect } from 'react-redux'
import allSelectors from '../../redux/auth/auth-selectors';
import styles from './NavBar.module.css';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';


const NavBar = ({ isAuthenticated }) => {
    return (
    <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
)
};

const mapStateToProps = state => ({
  isAuthenticated: allSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps, null)(NavBar);
