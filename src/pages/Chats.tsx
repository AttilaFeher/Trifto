import { Outlet } from 'react-router-dom';
import AllChats from '../features/chats/AllChats';

function Chats() {
  return (
    <div className="flex">
      <AllChats />
      <Outlet />
    </div>
  );
}

export default Chats;
