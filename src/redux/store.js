import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactFilter } from './contacts/reducers';
import SliceContacts from './contacts/slices';

const contactsReducer = combineReducers({
  contacts: SliceContacts,
  filter: contactFilter,
});

export const store = configureStore({
  reducer: contactsReducer,
});
