import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contacts, loading, error, contactFilter } from './contacts/reducers';

// import {
//   // persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };
const contactsList = combineReducers({
  contacts,
  loading,
  error,
});

const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactFilter,
});

// const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: contactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

// export const persistor = persistStore();
// export default store;
