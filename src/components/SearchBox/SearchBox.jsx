import React from 'react';
import s from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchContacts = useSelector(state => state.filters.name);

  const handleChangeInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input className={s.input} value={searchContacts} onChange={handleChangeInput} />
      </label>
    </div>
  );
};

export default SearchBox;
