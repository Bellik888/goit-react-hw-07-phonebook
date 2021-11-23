import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import {
  getThunkContacts,
  deleteThunkContact,
} from '../../redux/contacts/operations';
import { Spinner } from '../Spinner/Spinner';

const ContactListItem = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const state = useSelector(state => state.contacts.loading);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getThunkContacts()), [dispatch]);

  return (
    <>
      {state && <Spinner />}
      {filter === ''
        ? contacts.length > 0 &&
          contacts.map(({ name, number, id }) => (
            <li key={id} className={s.item}>
              <p>
                {name} : {number}
              </p>
              <button
                type="button"
                className={s.button}
                onClick={() => dispatch(deleteThunkContact(id))}
              >
                Delete
              </button>
            </li>
          ))
        : contacts.length > 0 &&
          contacts.map(
            ({ name, number, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={id} className={s.item}>
                  <p>
                    {name} : {number}
                  </p>
                  <button
                    type="button"
                    className={s.button}
                    onClick={() => dispatch(deleteThunkContact(id))}
                  >
                    Delete
                  </button>
                </li>
              ),
          )}
    </>
  );
};

ContactListItem.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default ContactListItem;
