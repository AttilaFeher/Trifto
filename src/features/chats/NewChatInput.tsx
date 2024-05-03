import { IoSend } from 'react-icons/io5';
import { useNewChat } from './useNewChat';
import {
  CallBack,
  InputBarProvider,
  useInputBar,
} from '../../context/InputBarProvider';
import { UserType } from '../../types/collection';

function NewChatInput({ userId2 }: { userId2: UserType['id'] }) {
  const { createChat, isCreating } = useNewChat();
  const { clearInput } = useInputBar();

  const handleMessage: (userId2: number) => CallBack['callBack'] = function (
    userId2,
  ) {
    return ({ message, user_id: userId1 }) =>
      createChat({ message, userId1, userId2 }, { onSuccess: clearInput });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-white pt-8">
      <InputBarProvider.Form callBack={handleMessage(userId2)}>
        <InputBarProvider.InputHolder isDisabled={isCreating} />
        <InputBarProvider.Icon isDisable={isCreating}>
          <IoSend />
        </InputBarProvider.Icon>
      </InputBarProvider.Form>
    </div>
  );
}

export default NewChatInput;
