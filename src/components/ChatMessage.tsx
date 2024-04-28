import { useUser } from '../features/authentication/useUser';
import { ChatMessageInfoViewType } from '../types/collection';

const messageVariation = {
  main: 'ml-auto bg-blue-500 text-white',
  another: 'mr-auto bg-gray-200',
};

type ChatMessageType = {
  message: ChatMessageInfoViewType;
};

function ChatMessage({ message }: ChatMessageType) {
  const { userId } = useUser();
  const createdAtDate = new Date(message.created_at as string);
  const hour = createdAtDate.getHours();
  const minutes = createdAtDate.getMinutes();
  // console.log(message.user_id);
  // console.log(userId);
  // console.log(message.user_id === userId);
  return (
    <div className={`${message.user_id === userId ? 'ml-24' : 'mr-24'}`}>
      <div
        className={`${
          message.user_id === userId
            ? messageVariation.main
            : messageVariation.another
        }  mx-4 mt-4 grid w-max max-w-3xl rounded-xl p-2`}
        style={{ gridTemplateColumns: 'minmax(0, max-content) 3rem' }}
      >
        <p className="row-end-1 text-wrap">{message.message}</p>
        <p className="col-span-2 -mt-2 ml-auto w-10 text-right text-xs font-medium">
          {hour < 10 ? `0${hour}` : hour}:
          {minutes < 10 ? `0${minutes}` : minutes}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;
