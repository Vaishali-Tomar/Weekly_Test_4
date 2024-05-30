import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const SearchBar = () => {
  const { dispatch } = useContext(TodoContext);

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search todos..."
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
