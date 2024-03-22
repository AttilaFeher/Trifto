import { ChangeEvent } from 'react';

type InputType = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, value, onChange }: InputType) {
  return (
    <input
      className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 px-24 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-gray-600 focus:outline-none focus:ring-gray-600"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
