import ChatItem from './ChatItem';
import { useChats } from './useChats';

function AllChats() {
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;

  return (
    <div className="h-full basis-64 overflow-auto">
      <ul className="border-r-2">
        {chats.data.map((chat) => (
          <ChatItem key={chat.chat_id} chat={chat} />
        ))}
        <div>
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
        </div>
      </ul>
    </div>
  );
}

export default AllChats;
