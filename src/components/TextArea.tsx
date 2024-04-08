import { ChangeEvent, forwardRef } from 'react';
import { InputVariationType, inputVariation } from '../styles/inputVariation';

type TextAreaType = {
  variation?: InputVariationType;
  placeholder: string;
  id: string;
  children?: string;
  value?: string | null;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextArea(
  {
    variation = 'primary',
    placeholder,
    id,
    children,
    value,
    onChange,
  }: TextAreaType,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <textarea
      placeholder={placeholder}
      id={id}
      value={value || ''}
      onChange={onChange}
      className={inputVariation[variation]}
      ref={ref}
    >
      {children}
    </textarea>
  );
}

export default forwardRef<HTMLTextAreaElement, TextAreaType>(TextArea);
