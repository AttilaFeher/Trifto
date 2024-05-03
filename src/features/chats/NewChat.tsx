import { useParams } from 'react-router-dom';
import { useUserInfo } from '../authentication/useUserInfo';
import NewChatInput from './NewChatInput';
import { InputBarProvider } from '../../context/InputBarProvider';
import ChatMembers from '../../components/ChatMembers';
import Heading from '../../components/Heading';

function NewChat() {
  const { userId } = useParams() as { userId: string };
  const { isLoading: isLoadingUser, userInfo: { id, nickname } = {} } =
    useUserInfo({
      userId,
    });

  if (isLoadingUser) return <p>Loading...</p>;

  return (
    <div className="h-full pb-28 pt-20 ">
      {nickname && <ChatMembers nickNames={[nickname]} />}
      <InputBarProvider>
        {id ? (
          <NewChatInput userId2={id} />
        ) : (
          <Heading type="h2">Korisnik nije pronađen.</Heading>
        )}
      </InputBarProvider>
    </div>
  );
}

export default NewChat;
