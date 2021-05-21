import React, {useEffect, useState} from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import ContactForm from '../../shared/components/ContactForm';
import ContactList from '../../shared/components/ContactList';
import Filter from '../../shared/components/Filter';

import operations from '../../redux/contacts/contacts-operations';
import {getIsLoading} from '../../redux/contacts/contacts-selectors';

import styles from './PhonebookView.module.css'

const PhonebookView = () => {

  const [showAllContacts, setContacts] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const isLoadingContacts = useSelector(state => getIsLoading(state), shallowEqual);
    const openContacts = () => {
        setContacts(!showAllContacts)
    }    
   const text = showAllContacts ? "Close contacts" : "Open contacts";
    return (
    <div>
    <div>
          {isLoadingContacts && <h1 className={styles.title}>Загружаем...</h1>}
    </div>
    <div className={styles.container_title}>
      <h2 className={styles.title}>Phonebook</h2>
    </div> 
        <ContactForm />
        <div className={styles.container_title}>
      <h2 className={styles.title}>Contacts</h2>
    </div> 
     <Filter />
   <div className={styles.container_button}><button type='button' onClick={openContacts} className={styles.button}>{text}</button></div> 
        {showAllContacts && <ContactList/>}
    </div>
  )
}
export default PhonebookView;

