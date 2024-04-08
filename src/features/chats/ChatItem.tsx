import { Link, useParams } from 'react-router-dom';
import { ChatSummaryViewType } from '../../types/collection';

type ChatItemType = {
  chat: ChatSummaryViewType;
};

function ChatItem({ chat }: ChatItemType) {
  const { chatId } = useParams() as { chatId: string };

  if (!chat || !chat.chat_id) return null;

  return (
    <li>
      <Link
        to={chat.chat_id.toString()}
        className={`mb-2 flex items-center gap-4 rounded p-2 font-bold hover:ease-in ${+chatId === chat.chat_id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
      >
        <img
          src="../public/default.jpg"
          className="h-14 w-14 rounded-full"
          alt="Girl"
        />
        {chat.nicknames}
      </Link>
    </li>
  );
}

export default ChatItem;
