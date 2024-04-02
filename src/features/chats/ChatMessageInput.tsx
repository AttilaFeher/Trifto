import { IoSend } from 'react-icons/io5';
import Input from '../../components/Input';
import InputBarProvider from '../../components/InputBarProvider';
import { useState } from 'react';
import { useCreateChatMessage } from './useCreateChatMessage';
import { useUserInfo } from '../authentication/useUserInfo';
import { useParams } from 'react-router-dom';
import { ChatMessageType } from '../../types/collection';

function ChatMessageInput() {
  const { chatId } = useParams() as { chatId: string };
  const { isCreating, createChatMessage } = useCreateChatMessage(chatId);
  const { isLoading: isLoadingUser, userInfo } = useUserInfo();
  const [message, setMessage] = useState('');

  if (isLoadingUser) return null;

  function handleMessage() {
    if (!userInfo?.id || !message) return;

    const newMessage = {
      chat_id: +chatId,
      user_id: userInfo.id,
      message,
    } as ChatMessageType;
    createChatMessage(newMessage);
    setMessage('');
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-white">
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