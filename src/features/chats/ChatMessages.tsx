import { useChatMessagesInfo } from './useChatMessagesInfo';
import { useChatSubscription } from './useChatSubscription';
import { useParams } from 'react-router-dom';
import ChatMessage from '../../components/ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatMembersCurrent from './ChatMembersCurrent';
import { InputBarProvider } from '../../context/InputBarProvider';

function ChatMessages() {
  const { chatId } = useParams() as { chatId: string };
  useChatSubscription(chatId);
  const { isLoading, chatMessagesInfo } = useChatMessagesInfo(chatId);

  if (!chatMessagesInfo || isLoading) return null;

  return (
    <div className="relative h-full basis-full">
      <div className="h-full overflow-y-auto pb-28 pt-20 ">
        <ChatMembersCurrent />
        {chatMessagesInfo.data?.map((message) => (
          <ChatMessage key={message.created_at} message={message} />
        ))}
      </div>

      <InputBarProvider>
        <ChatMessageInput />
      </InputBarProvider>
    </div>
  );
}

export default ChatMessages;
