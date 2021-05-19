import React, {useEffect} from "react";
import {  useSelector, useDispatch, shallowEqual } from 'react-redux';

import ContactForm from '../../shared/components/ContactForm';
import ContactList from '../../shared/components/ContactList';
import Filter from '../../shared/components/Filter';

import operations from '../../redux/contacts/contacts-operations';
import {getIsLoading} from '../../redux/contacts/contacts-selectors';

import styles from './PhonebookView.module.css'

const PhonebookView = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const isLoadingContacts = useSelector(state => getIsLoading(state), shallowEqual);

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
        <ContactList />
    </div>
  )
}
export default PhonebookView;

