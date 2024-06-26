import { FormEvent, useState } from 'react';
import Input from './Input';
import Form from './Form';
import Button from './Button';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchText);
  }

  return (
    <div className="grow">
      <Form onSubmit={handleSubmit}>
        <Button type="submit" variation="icon" isDisable={false}>
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
        </Button>
        <Input
          placeholder="Pretraga..."
          value={searchText}
          variation="secondary"
          disabled={false}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variation="icon"
          type="button"
          isDisable={false}
          onClick={() => setSearchText('')}
        >
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
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
