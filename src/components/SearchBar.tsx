import { useState } from 'react';
import Input from './Input';
import InputBarProvider from '../context/InputBarProvider';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="grow">
      <InputBarProvider>
        <InputBarProvider.Icon onClick={() => {}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-gray-500"
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
        </InputBarProvider.Icon>

        <Input
          placeholder="Pretraga..."
          value={searchText}
          variation="secondary"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <InputBarProvider.Icon onClick={() => setSearchText('')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </InputBarProvider.Icon>
      </InputBarProvider>
    </div>
  );
}

export default SearchBar;
