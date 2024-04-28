import { useParams } from 'react-router-dom';
import { useChats } from './useChats';
import ChatMembers from '../../components/ChatMembers';

function ChatMembersCurrent() {
  const { chatId } = useParams() as { chatId: string };
  const { isLoading, chats } = useChats();

  if (!chats?.data || isLoading) return null;

  const nickNames =
    chats.data.find((chat) => chat.chat_id === +chatId)?.nicknames || [];

  return <ChatMembers nickNames={nickNames} />;
}

export default ChatMembersCurrent;
