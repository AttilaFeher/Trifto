import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <div className="relative text-black">
      <input
        className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 px-24 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-gray-600 focus:outline-none focus:ring-gray-600"
        id="username"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-1 mr-3 h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleClear}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-3 h-6 w-6 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
