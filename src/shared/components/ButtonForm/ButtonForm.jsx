import React from 'react';
import styles from './ButtonForm.module.css';

const ButtonForm = ({children}) => {
    return (
        <button className={styles.button} type="submit">
           {children}
         </button>
    )
};

export default ButtonForm;
