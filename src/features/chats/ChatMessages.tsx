import { useState } from "react";
import { useChatMessagesInfo } from "./useChatMessagesInfo";
import { useCreateChatMessage } from "./useCreateChatMessage";

function ChatMessages() {
  const { isLoading, chatMessagesInfo } = useChatMessagesInfo();
  const { isCreating, createChatMessage } = useCreateChatMessage();
  const [message, setMessage] = useState("");

  function handleMessage() {
    createChatMessage({ chat_id: 1, created_at: string; id: number; message: string | null; user_id: number | null; });
  }

  if (!chatMessagesInfo || isLoading || isCreating) return null;

  return (
    <div>
      {chatMessagesInfo.data?.map((message) => (
        <p key={message.created_at}>
          <span>{message.nickname} </span>
          <br></br>
          {message.message}
        </p>
      ))}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessage}>send message</button>
    </div>
  );
}

export default ChatMessages;
