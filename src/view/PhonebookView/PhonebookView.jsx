import React, { Component } from "react";
import { connect } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

import operations from '../../redux/contacts/contacts-operations';
import {getIsLoading} from '../../redux/contacts/contacts-selectors';

import styles from './PhonebookView.module.css'

class PhonebookView extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {

    return (
    <div>
    <div>
          {this.props.isLoadingContacts && <h1 className={styles.title}>Загружаем...</h1>}
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
}

const mapStateToProps = state => ({
  isLoadingContacts: getIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts())
})

export default connect(mapStateToProps,mapDispatchToProps)(PhonebookView);

