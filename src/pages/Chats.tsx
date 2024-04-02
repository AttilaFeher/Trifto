import { Outlet } from 'react-router-dom';
import AllChats from '../features/chats/AllChats';

function Chats() {
  return (
    <div className="chats m flex border-t-2 border-gray-200 pb-6">
      <AllChats />
      <Outlet />
    </div>
  );
}

export default Chats;
