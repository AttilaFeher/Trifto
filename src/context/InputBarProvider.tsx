import {
  Dispatch,
  FormEvent,
  createContext,
  useContext,
  useState,
} from 'react';
import { ChildrenType } from '../types/reusableTypes';
import Button from '../components/Button';
import Input from '../components/Input';
import { useUser } from '../features/authentication/useUser';
import { useUserInfo } from '../features/authentication/useUserInfo';

type CreateMessageType = {
  message: string;
  user_id: number;
};

export type CallBack = {
  callBack: ({ message, user_id }: CreateMessageType) => void;
};

type InputBarContextType = {
  message: string;
  setMessage: Dispatch<React.SetStateAction<string>>;
  isLoadingUser: boolean;
  clearInput: () => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    callBack: CallBack['callBack'],
  ) => void;
};

const inputBarObj = {
  message: '',
  setMessage: () => {},
  isLoadingUser: false,
  clearInput: () => {},
  onSubmit: () => {},
};
const InputBarContext = createContext<InputBarContextType>(inputBarObj);

function InputBarProvider({ children }: ChildrenType) {
  const { userId } = useUser() as { userId: string };
  const { isLoading: isLoadingUser, userInfo } = useUserInfo({ userId });
  const [message, setMessage] = useState('');
  const clearInput = () => setMessage('');

  function onSubmit(
    e: FormEvent<HTMLFormElement>,
    callBack: CallBack['callBack'],
  ) {
    e.preventDefault();
    if (!userInfo?.id || !message) return null;

    callBack({ message, user_id: userInfo.id });
  }

  return (
    <InputBarContext.Provider
      value={{ message, setMessage, isLoadingUser, onSubmit, clearInput }}
    >
      {children}
    </InputBarContext.Provider>
  );
}

function Form({ callBack, children }: CallBack & ChildrenType) {
  const { onSubmit } = useContext(InputBarContext);

  return (
    <div className="mx-4 w-full">
      <form
        onSubmit={(e) => onSubmit(e, callBack)}
        className="mx-auto flex max-w-[40rem] appearance-none items-center gap-4 rounded-md border-2 border-gray-300 px-2 py-2 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:outline-none focus:ring-gray-600"
      >
        {children}
      </form>
    </div>
  );
}

function InputHolder({ isDisabled }: { isDisabled: boolean }) {
  const { message, setMessage, isLoadingUser } = useContext(InputBarContext);
  return (
    <Input
      placeholder="Poruka..."
      value={message}
      variation="secondary"
      disabled={isDisabled || isLoadingUser}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}

type IconType = ChildrenType & {
  isDisable: boolean;
};

function Icon({ isDisable, children }: IconType) {
  const { isLoadingUser } = useContext(InputBarContext);
  return (
    <Button
      type="submit"
      variation="icon"
      isDisable={isDisable || isLoadingUser}
    >
      {isDisable ? '...' : children}
    </Button>
  );
}

InputBarProvider.Form = Form;
InputBarProvider.InputHolder = InputHolder;
InputBarProvider.Icon = Icon;

function useInputBar() {
  const context = useContext(InputBarContext);
  if (context === undefined)
    throw new Error('InputBarContext was used outside the InputBarProvider');
  return context;
}

export { InputBarProvider, useInputBar };
