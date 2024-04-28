import { useParams } from 'react-router-dom';
import ChatMembers from '../../components/ChatMembers';
import { useUserInfo } from '../authentication/useUserInfo';

function ChatMemberNew() {
  const { userId } = useParams() as { userId: string };
  console.log(userId);
  const { userInfo, isLoading } = useUserInfo({ userId });

  if (isLoading) return <p>Loading...</p>;

  return <ChatMembers nickNames={[userInfo?.nickname || '']} />;
}

export default ChatMemberNew;
