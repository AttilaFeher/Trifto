import { useParams } from 'react-router-dom';
import { useChats } from './useChats';

function ChatMessageName() {
  const { chatId } = useParams() as { chatId: string };
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;
  const chatUsers = chats.data.find((chat) => chat.chat_id === +chatId);

  return (
    <div className="absolute left-0 right-0 top-0 z-10 border-b-2 border-gray-300 bg-slate-200">
      <div className="px-2 py-3 leading-tight text-gray-800  ">
        <p>
          Chat with:{' '}
          <span className="font-medium">
            {chatUsers?.nicknames?.join(', ')}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ChatMessageName;
