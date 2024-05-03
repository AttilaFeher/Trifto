import { IoSend } from 'react-icons/io5';
import { useCreateChatMessage } from './useCreateChatMessage';
import { useParams } from 'react-router-dom';
import {
  CallBack,
  InputBarProvider,
  useInputBar,
} from '../../context/InputBarProvider';

function ChatMessageInput() {
  const { chatId } = useParams() as { chatId: string };
  const { isCreating, createChatMessage } = useCreateChatMessage(chatId);
  const { clearInput } = useInputBar();

  const createMessage: (userId2: number) => CallBack['callBack'] = function (
    chatId,
  ) {
    return ({ message, user_id }) =>
      createChatMessage(
        { message, chat_id: chatId, user_id },
        { onSuccess: clearInput },
      );
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-white pt-8">
      <InputBarProvider.Form callBack={createMessage(+chatId)}>
        <InputBarProvider.InputHolder isDisabled={isCreating} />
        <InputBarProvider.Icon isDisable={isCreating}>
          <IoSend />
        </InputBarProvider.Icon>
      </InputBarProvider.Form>
    </div>
  );
}

export default ChatMessageInput;
