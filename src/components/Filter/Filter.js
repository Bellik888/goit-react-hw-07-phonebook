import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Filter.module.css';

// ======redux=====
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';

export const Filter = () => {
  let inputFilterID = shortid();

  // ======redux======
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChangeFilter = e => {
    // setFilter(e.target.value);
    dispatch(filterContact(e.target.value)); // в редакс
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={inputFilterID}>Find contacts by name</label>
      <input
        id={inputFilterID}
        name={filter}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
