import React, { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchInput);
    setSearchInput('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={searchInput} onChange={onChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
