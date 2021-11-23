import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';
import {
  getThunkContacts,
  addThunkContact,
  deleteThunkContact,
} from './operations';

// const initState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsList = createReducer(initState, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });
export const contactFilter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export const contacts = createReducer([], {
  [getThunkContacts.fulfilled]: (_, { payload }) => payload,
  [addThunkContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteThunkContact]: (state, { payload }) =>
    // state.contacts.filter(contact => contact.id !== payload),
    state.filter(contact => console.log(contact)),
});

export const loading = createReducer(false, {
  [getThunkContacts.pending]: (_, action) => true,
  [getThunkContacts.fulfilled]: (_, action) => false,
  [getThunkContacts.rejected]: (_, action) => false,
  [addThunkContact.pending]: (_, action) => true,
  [addThunkContact.fulfilled]: (_, action) => false,
  [addThunkContact.rejected]: (_, action) => false,
  [deleteThunkContact.pending]: (_, action) => true,
  [deleteThunkContact.fulfilled]: (_, action) => false,
  [deleteThunkContact.rejected]: (_, action) => false,
});

export const error = createReducer(null, {
  [getThunkContacts.fulfilled]: (_, action) => null,
  [getThunkContacts.rejected]: (_, { payload }) => payload,
  [addThunkContact.fulfilled]: (_, action) => null,
  [addThunkContact.rejected]: (_, { payload }) => payload,
  [deleteThunkContact.fulfilled]: (_, action) => null,
  [deleteThunkContact.rejected]: (_, { payload }) => payload,
});
