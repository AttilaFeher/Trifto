import { FormEvent, ReactNode } from 'react';

type FormType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

function Form({ onSubmit, children }: FormType) {
  return (
    <div className="mx-4 w-full">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-[40rem] appearance-none items-center gap-4 rounded-md border-2 border-gray-300 px-2 py-2 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:outline-none focus:ring-gray-600"
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
