import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import {
  getThunkContacts,
  deleteThunkContact,
} from '../../redux/contacts/operations';

const ContactListItem = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getThunkContacts()), [dispatch]);

  const contacts = useSelector(getContacts);
  return (
    <>
      {filter === ''
        ? contacts.map(({ name, phone, id }) => (
            <li key={id} className={s.item}>
              <p>
                {name} : {phone}
              </p>
              <button
                type="button"
                className={s.button}
                onClick={() =>
                  dispatch(deleteThunkContact(id)).then(() =>
                    dispatch(getThunkContacts()),
                  )
                }
              >
                Delete
              </button>
            </li>
          ))
        : contacts.map(
            ({ name, phone, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={id} className={s.item}>
                  <p>
                    {name} : {phone}
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
