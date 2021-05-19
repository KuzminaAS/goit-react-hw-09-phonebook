import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');

// export const addContact = ({ name, number }) =>
// ({
//         type: ADD_TO_CONTACT,
//         payload: {
//         id: shortid.generate(),
//         name,
//         number
//       }
// })
// const addContact = createAction(ADD_TO_CONTACT, ({ name, number }) => {
//   return {
//      payload: {
//         id: shortid.generate(),
//         name,
//         number
//       }
//      }
// })

// export const deleteContact = (index) => ({
//      type: DELETE_CONTACT,
//      payload: index
// })

// export const changeFilter = (value) => ({
//      type: CHANGE_FILTER,
//      payload: value
// })

