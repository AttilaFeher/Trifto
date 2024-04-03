import ChatItem from './ChatItem';
import { useChats } from './useChats';

function AllChats() {
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;

  return (
    <div className="custom-scrollbar ml-4 h-full w-96 overflow-auto pt-2">
      <ul className="border-r-2 pr-4">
        {chats.data.map((chat) => (
          <ChatItem key={chat.chat_id} chat={chat} />
        ))}
      </ul>
    </div>
  );
}

export default AllChats;
