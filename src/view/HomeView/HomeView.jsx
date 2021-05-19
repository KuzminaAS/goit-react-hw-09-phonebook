import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => {
    return (
    <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to Phonebook app{' '}
      <span role="img" aria-label="Иконка приветствия">
        👋😊
      </span>
    </h1>
  </div>
)
};

export default HomeView;
