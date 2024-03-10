import { useChats } from "../features/chats/useChats";

function Chats() {
  const { isLoading, chats } = useChats();
  console.log(chats);
  return <div></div>;
}

export default Chats;
