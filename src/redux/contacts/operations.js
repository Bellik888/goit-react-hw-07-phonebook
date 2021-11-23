import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from '../../service/mockapi';

export const getThunkContacts = createAsyncThunk(
  'getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const addThunkContact = createAsyncThunk(
  'addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await addContact(contact);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteThunkContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
