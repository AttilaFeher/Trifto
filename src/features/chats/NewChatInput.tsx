import { IoSend } from 'react-icons/io5';
import Input from '../../components/Input';
import InputBarProvider from '../../context/InputBarProvider';
import { FormEvent, useState } from 'react';
import { useUser } from '../authentication/useUser';
import { useNewChat } from './useNewChat';
import { useUserInfo } from '../authentication/useUserInfo';
import { useParams } from 'react-router-dom';

function NewChatInput() {
  const { userId: userId1Def } = useUser() as { userId: string };
  const { userId: userId2Def } = useParams() as { userId: string };
  const { userInfo: { id: userId1 } = {}, isLoading: isLoading1 } = useUserInfo(
    {
      userId: userId1Def,
    },
  );
  const { userInfo: { id: userId2 } = {}, isLoading: isLoading2 } = useUserInfo(
    {
      userId: userId2Def,
    },
  );
  const { createChat, isCreating } = useNewChat();
  const [message, setMessage] = useState('');

  function handleMessage() {
    if (!message || !userId1 || !userId2) return null;
    createChat(
      { message, userId1, userId2 },
      {
        onSuccess: () => {
          setMessage('');
        },
      },
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-white pt-8">
      <InputBarProvider onSubmit={handleMessage}>
        <Input
          placeholder="Poruka..."
          value={message}
          variation="secondary"
          onChange={(e) => setMessage(e.target.value)}
        />
        <InputBarProvider.Icon
          onClick={handleMessage}
          isDisable={isLoading1 || isLoading2 || isCreating}
        >
          <IoSend />
        </InputBarProvider.Icon>
      </InputBarProvider>
    </div>
  );
}

export default NewChatInput;
