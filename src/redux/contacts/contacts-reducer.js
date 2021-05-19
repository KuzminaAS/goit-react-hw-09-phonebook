import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError
} from './contacts-actions';


const items = createReducer([], {
  [fetchContactSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, {payload}) => [...state, payload],
  [deleteContactSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload),
})

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload
});

export default combineReducers({ items, filter, loading })


// const items = (state = [], { type, payload }) => {
//     switch (type) {
//       case ADD_TO_CONTACT:
//         return [...state, payload];

//       case DELETE_CONTACT:

//         return state.filter((_, index) => index !== payload);
      
//        default: return state;
//     }
  
//  }
    
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//       case CHANGE_FILTER:
//         return payload;
      
//        default: return state;
//     }
// }
// const loading = createReducer(false);


 