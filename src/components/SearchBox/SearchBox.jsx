import React from 'react';
import s from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchContact = useSelector(selectNameFilter);

  const handleChangeInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input className={s.input} value={searchContact} onChange={handleChangeInput} />
      </label>
    </div>
  );
};

export default SearchBox;
