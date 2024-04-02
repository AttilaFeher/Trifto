import { useUser } from '../features/authentication/useUser';
import { ChatMessageInfoViewType } from '../types/collection';

const messageVariation = {
  main: 'ml-auto bg-blue-500 text-white p-2 mt-4 rounded-xl mx-4 min-w-[120px]',
  another: 'mr-auto bg-gray-200 p-2 mt-4 rounded-xl mx-4 min-w-[120px]',
};

type ChatMessageType = {
  message: ChatMessageInfoViewType;
};

function ChatMessage({ message }: ChatMessageType) {
  const { userId } = useUser();

  const createdAtDate = new Date(message.created_at);
  const hour = createdAtDate.getHours();
  const minutes = createdAtDate.getMinutes();

  return (
    <div
      className={`${
        message.user_id === userId
          ? messageVariation.main
          : messageVariation.another
      } 0 mt-4 w-max max-w-3xl`}
    >
      <p>{message.message}</p>
      <p className="ml-auto w-10">
        {hour}:{minutes}
      </p>
    </div>
  );
}

export default ChatMessage;
