import { useParams } from 'react-router-dom';
import { useChats } from './useChats';

function ChatMessageName() {
  const { chatId } = useParams() as { chatId: string };
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;
  const chatUsers = chats.data.find((chat) => chat.chat_id === +chatId);

  return (
    <div className="absolute left-0 right-0 top-0 z-10 mr-4 bg-white shadow-md">
      <div className="py-3 pl-8 leading-tight text-gray-800  ">
        <p className="flex items-center gap-2">
          <img
            src="../public/default.jpg"
            className="h-[54px] w-[54px] rounded-full"
          ></img>{' '}
          <span className="font-medium">
            {chatUsers?.nicknames?.join(', ')}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ChatMessageName;
