import { useParams } from 'react-router-dom';
import { useUserInfo } from '../authentication/useUserInfo';
import ChatMemberNew from './ChatMemberNew';
import NewChatInput from './NewChatInput';

function NewChat() {
  const { userId } = useParams() as { userId: string };
  const { isLoading: isLoadingUser, userInfo } = useUserInfo({
    userId,
  });
  if (isLoadingUser || !userInfo) return null;

  return (
    <div className="relative h-full basis-full">
      <ChatMemberNew />
      <NewChatInput />
    </div>
  );
}

export default NewChat;
