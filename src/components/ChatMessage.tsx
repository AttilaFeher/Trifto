import { useUser } from '../features/authentication/useUser';
import { ChatMessageInfoViewType } from '../types/collection';

const messageVariation = {
  main: 'ml-auto', // My message
  another: 'mr-auto', // Another user message
};

type ChatMessageType = {
  message: ChatMessageInfoViewType;
};

function ChatMessage({ message }: ChatMessageType) {
  console.log(message);
  const { userId } = useUser();
  return (
    <p
      className={`${
        message.user_id === userId
          ? messageVariation['main']
          : messageVariation['another']
      } w-48`}
    >
      {/* <span>{message.nickname}</span>
      <br></br> */}
      {message.message}
    </p>
  );
}

export default ChatMessage;
