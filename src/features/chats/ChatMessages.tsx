import { useState } from 'react';
import { useChatMessagesInfo } from './useChatMessagesInfo';
import { useCreateChatMessage } from './useCreateChatMessage';
import { useChatSubscription } from './useChatSubscription';
import { useParams } from 'react-router-dom';
import { ChatMessageType } from '../../types/collection';
import { useUserInfo } from '../authentication/useUserInfo';
import Input from '../../components/Input';
import { IoSend } from 'react-icons/io5';
import ChatMessage from '../../components/ChatMessage';

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
    <div className="relative h-full basis-full">
      <div className="h-full overflow-auto pb-14">
        {chatMessagesInfo.data?.map((message) => (
          <ChatMessage key={message.created_at} message={message} />
        ))}
        {/* <div>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
          <li>aawd</li>
        </div> */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex">
        <Input
          placeholder="Poruka..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleMessage}>
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default ChatMessages;
