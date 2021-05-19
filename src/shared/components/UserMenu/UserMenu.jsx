import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

import styles from './UserMenu.module.css';
import defaultAvatar from './user.png';

const UserMenu = () => {
  const name = useSelector(state => authSelectors.getUserName(state), shallowEqual)
  
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout} className={styles.button}>
        Log out
    </button>
    </div>
  )
}
export default UserMenu;

