import { ReactElement } from 'react';

type FormRowVerticalType = {
  label: string;
  error?: string;
  children: ReactElement<HTMLInputElement>;
};

function FormRowVertical({ label, error, children }: FormRowVerticalType) {
  return (
    <div className="flex flex-col gap-1 py-4">
      {label && (
        <label
          className="inline-block cursor-pointer text-gray-700 transition duration-200 ease-in-out hover:border-gray-300 hover:text-gray-800"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-lg text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
