import { FormEvent, createContext } from 'react';
import { ChildrenType } from '../types/reusableTypes';
import Button from '../components/Button';

const InputBarContext = createContext(null);

type InputBarType = ChildrenType & {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

function InputBarProvider({ onSubmit, children }: InputBarType) {
  return (
    <InputBarContext.Provider value={null}>
      <div className="mx-4 w-full">
        <form
          onSubmit={onSubmit}
          className="mx-auto flex max-w-[40rem] appearance-none items-center gap-4 rounded-md border-2 border-gray-300 px-2 py-2 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:outline-none focus:ring-gray-600"
        >
          {children}
        </form>
      </div>
    </InputBarContext.Provider>
  );
}

type IconType = ChildrenType & {
  isDisable?: boolean;
  onClick?: () => void;
};

function Icon({ onClick, isDisable, children }: IconType) {
  return (
    <Button
      type="submit"
      variation="icon"
      onClick={onClick}
      isDisable={isDisable}
    >
      {isDisable ? '...' : children}
    </Button>
  );
}

InputBarProvider.Icon = Icon;

export default InputBarProvider;
