import { ChangeEvent, forwardRef } from 'react';
import { InputVariationType, inputVariation } from '../styles/inputVariation';

type InputType = {
  placeholder: string;
  value?: string | number | null;
  type?: 'text' | 'password' | 'number';
  id?: string;
  variation?: InputVariationType;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input(
  {
    placeholder,
    value,
    type = 'text',
    id,
    variation = 'primary',
    disabled = false,
    onChange,
  }: InputType,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      placeholder={placeholder}
      value={value || ''}
      type={type}
      id={id}
      className={inputVariation[variation]}
      disabled={disabled}
      onChange={onChange}
      ref={ref}
    />
  );
}

export default forwardRef<HTMLInputElement, InputType>(Input);
