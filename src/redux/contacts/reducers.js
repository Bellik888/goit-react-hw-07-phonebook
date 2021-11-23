import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';
import {
  getThunkContacts,
  addThunkContact,
  deleteThunkContact,
} from './operations';

export const contactFilter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export const contacts = createReducer([], {
  [getThunkContacts.fulfilled]: (_, { payload }) => payload,
  [addThunkContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteThunkContact]: (state, { payload }) =>
    state.contacts.filter(contact => contact.id !== payload),
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
