// import { useState} from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import ContactListItem from './components/ContactListItem/ContactListItem';

const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};

export default App;
