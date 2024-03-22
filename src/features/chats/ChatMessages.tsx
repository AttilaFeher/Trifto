import { useState } from 'react';
import { useChatMessagesInfo } from './useChatMessagesInfo';
import { useCreateChatMessage } from './useCreateChatMessage';
import { useChatSubscription } from './useChatSubscription';
import { useParams } from 'react-router-dom';
import { ChatMessageType } from '../../types/collection';
import { useUserInfo } from '../authentication/useUserInfo';

function ChatMessages() {
  const { chatId } = useParams() as { chatId: string };
  useChatSubscription(chatId);
  const { isLoading, chatMessagesInfo } = useChatMessagesInfo(chatId);
  const { isCreating, createChatMessage } = useCreateChatMessage(chatId);
  const { isLoading: isLoadingUser, userInfo } = useUserInfo();
  const [message, setMessage] = useState('');

  if (!chatMessagesInfo || isLoading || isLoadingUser) return null;

  function handleMessage() {
    if (!userInfo?.id || !message) return;

    const newMessage = {
      chat_id: +chatId,
      user_id: userInfo.id,
      message,
    } as ChatMessageType;
    createChatMessage(newMessage);
  }

  return (
    <div>
      {chatMessagesInfo.data?.map((message) => (
        <p key={message.created_at}>
          <span>{message.nickname} </span>
          <br></br>
          {message.message}
        </p>
      ))}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessage}>send message</button>
    </div>
  );
}

export default ChatMessages;
