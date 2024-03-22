import Hero from '../components/Hero';
import ChatMessages from '../features/chats/ChatMessages';
import { useChats } from '../features/chats/useChats';

function Chats() {
  const { isLoading, chats } = useChats();
  console.log(chats);

  if (!chats?.data || isLoading) return null;

  return (
    <div>
      <Hero></Hero>
      {chats.data[0].nicknames}
      <ChatMessages />
    </div>
  );
}

export default Chats;
