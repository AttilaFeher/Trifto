import { createContext } from 'react';
import { ChildrenType } from '../types/reusableTypes';
import Button from './Button';

const InputBarContext = createContext(null);

function InputBarProvider({ children }: ChildrenType) {
  return (
    <InputBarContext.Provider value={null}>
      <div className="mx-4 w-full">
        <div className='className="focus:shadow-outline focus:ring-gray-600" mx-auto flex max-w-[40rem] appearance-none items-center gap-4 rounded-md border-2 border-gray-300 px-2 py-2 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-gray-600 focus:outline-none'>
          {children}
        </div>
      </div>
    </InputBarContext.Provider>
  );
}

type IconType = ChildrenType & {
  onClick: () => void;
};

function Icon({ onClick, children }: IconType) {
  return (
    <Button variation="icon" onClick={onClick}>
      {children}
    </Button>
  );
}

InputBarProvider.Icon = Icon;

// type InputBarType = {
//   leftIcon?: ReactNode;
//   rightIcon?: ReactNode;
//   children: ReactNode;
// };

// function InputBar({ leftIcon, rightIcon, children }: InputBarType) {
//   return (
//     <div className="focus:shadow-outline mx-auto flex max-w-[50rem]  appearance-none items-center gap-4 rounded-md border-2 border-gray-300 px-2 py-2 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-gray-600 focus:outline-none focus:ring-gray-600">
//       <div>{leftIcon}</div>
//       {children}
//       <div>{rightIcon}</div>
//     </div>
//   );
// }

export default InputBarProvider;
