import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchEntry, setSearchEntry] = useState('');

  return (
    <div>
      <label> Search </label>
      <input
        onChange={(e) => props.filterProducts(e.target.value)}
        placeholder="Search"
      ></input>
      <label> Only products in stock </label>
      <input
        type="checkbox"
        onChange={(e) => props.filterStockProducts(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
