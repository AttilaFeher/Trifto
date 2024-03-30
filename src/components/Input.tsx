import { ChangeEvent } from 'react';

const inputVariation = {
  primary:
    'focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-6 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-gray-600 focus:outline-none focus:ring-gray-600',
  secondary:
    'outline-none w-full appearance-none border-none leading-tight text-gray-800 ',
};

type InputType = {
  placeholder: string;
  value: string;
  type?: 'text' | 'password';
  id?: string;
  variation?: 'primary' | 'secondary';
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  placeholder,
  value,
  type = 'text',
  id,
  variation = 'primary',
  disabled = false,
  onChange,
}: InputType) {
  return (
    <input
      className={inputVariation[variation]}
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      disabled={disabled}
      onChange={onChange}
    />
  );
}

export default Input;
