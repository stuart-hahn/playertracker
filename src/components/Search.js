import React from 'react';

const Search = ({ term, handleTermChange }) => {
  return (
    <div>
      <p>
        find player
        <input type="text" onChange={handleTermChange} value={term} placeholder="search..." />
      </p>
    </div>
  );
}

export default Search;
