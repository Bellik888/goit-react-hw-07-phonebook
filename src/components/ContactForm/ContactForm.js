import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

//==========redux========
import { addContact } from '../../redux/contacts/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  let inputNameID = shortid();
  let inputNumberID = shortid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const searchDuplicate = value => {
    const names = contacts.map(contact => contact.name);
    names.includes(value.name)
      ? alert(`${value.name} is already in contacts!!!`)
      : dispatch(addContact(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let contact = {
      id: shortid(),
      name: name,
      number: number,
    };

    if (name && number) {
      setName(contact.name);
      setNumber(contact.number);
      searchDuplicate(contact);
      setName('');
      setNumber('');
    }
    return;
  };
  // console.log(onAdd)

  return (
    <section className={s.section}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={inputNameID}>Names</label>
        <input
          id={inputNameID}
          name={name}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я включає букви, при потребі : апостроф, тире і пробіли"
          value={name}
          onChange={handleChangeName}
        ></input>

        <label htmlFor={inputNumberID}>Number</label>
        <input
          id={inputNumberID}
          name={number}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          tittle="обов'язково цифри! при потребі '+' , '-', '()'"
          value={number}
          placeholder="XXX-XX-XX"
          onChange={handleChangeNumber}
        ></input>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  searchDuplicate: PropTypes.func,
};

export default ContactForm;

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd:contact=>dispatch(addContact(contact))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
