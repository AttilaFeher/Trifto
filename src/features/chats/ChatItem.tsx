import { Link } from 'react-router-dom';
import { ChatSummaryViewType } from '../../types/collection';

type ChatItemType = {
  chat: ChatSummaryViewType;
};

function ChatItem({ chat }: ChatItemType) {
  if (!chat.chat_id) return null;

  return (
    <li>
      <Link to={chat.chat_id.toString()}>{chat.nicknames}</Link>
    </li>
  );
}

export default ChatItem;
