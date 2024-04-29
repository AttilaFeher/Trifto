import { IoSend } from 'react-icons/io5';
import Input from '../../components/Input';
import InputBarProvider from '../../context/InputBarProvider';
import { useState } from 'react';
import { useCreateChatMessage } from './useCreateChatMessage';
import { useUserInfo } from '../authentication/useUserInfo';
import { useParams } from 'react-router-dom';
import { useUser } from '../authentication/useUser';

function ChatMessageInput() {
  const { userId } = useUser() as { userId: string };
  const { chatId } = useParams() as { chatId: string };
  const { isCreating, createChatMessage } = useCreateChatMessage(chatId);
  const { isLoading: isLoadingUser, userInfo } = useUserInfo({ userId });
  const [message, setMessage] = useState('');

  if (isLoadingUser) return null;

  function handleMessage() {
    if (!userInfo?.id || !message) return;

    createChatMessage({ message, chat_id: +chatId, user_id: userInfo.id });
    setMessage('');
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-white pt-8">
      <InputBarProvider onSubmit={handleMessage}>
        <Input
          placeholder="Poruka..."
          value={message}
          variation="secondary"
          onChange={(e) => setMessage(e.target.value)}
        />
        <InputBarProvider.Icon onClick={handleMessage} isDisable={isCreating}>
          <IoSend />
        </InputBarProvider.Icon>
      </InputBarProvider>
    </div>
  );
}

export default ChatMessageInput;
