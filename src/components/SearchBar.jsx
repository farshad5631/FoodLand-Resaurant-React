import React, { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearchChange(value);
  };

  return (
    <div className="search-bar mb-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for meals..."
        className="border border-gray-400 p-2 rounded-xl w-44 md:w-96"
      />
    </div>
  );
};

export default SearchBar;
