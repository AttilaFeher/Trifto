import { useParams } from 'react-router-dom';
import ChatMessageName from './ChatMessageName';
import { useUserInfo } from '../authentication/useUserInfo';
import ChatMessageInput from './ChatMessageInput';

function NewChat() {
  const { userId } = useParams() as { userId: string };
  const { isLoading: isLoadingUser, userInfo } = useUserInfo({
    userId,
  });
  if (isLoadingUser || !userInfo) return null;

  return (
    <div className="relative h-full basis-full">
      <ChatMessageName userInfo={userInfo} />
      <div className="h-full overflow-y-auto pb-28 pt-20 ">
        {/* {chatMessagesInfo.data?.map((message) => (
          <ChatMessage key={message.created_at} message={message} />
        ))} */}
      </div>
      <ChatMessageInput />
    </div>
  );
}

export default NewChat;
