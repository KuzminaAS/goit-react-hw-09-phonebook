import axios from 'axios';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, fetchContactRequest, fetchContactSuccess, fetchContactError} from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios.get('/contacts')
    .then(({ data }) => {
        dispatch(fetchContactSuccess(data))
      })
   .catch(error => dispatch(fetchContactError(error.message)));
}

const addContact = (newContact) => dispatch => {

  dispatch(addContactRequest());

    axios.post('/contacts', newContact)
      .then(({ data }) => {
        dispatch(addContactSuccess(data))
      })
        .catch(error => dispatch(addContactError(error.message)));
}

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios.delete(`/contacts/${id}`)
  .then(() => dispatch(deleteContactSuccess(id)))
  .catch(error => dispatch(deleteContactError(error.message)));
}


const operations = {
  addContact,
  deleteContact,
  fetchContacts
}
export default operations;