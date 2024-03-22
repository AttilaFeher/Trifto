import ChatItem from './ChatItem';
import { useChats } from './useChats';

function AllChats() {
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;

  return (
    <ul>
      {chats.data.map((chat) => (
        <ChatItem key={chat.chat_id} chat={chat} />
      ))}
    </ul>
  );
}

export default AllChats;
