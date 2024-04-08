import { Outlet } from 'react-router-dom';
import AllChats from '../features/chats/AllChats';
import Main from '../components/Main';

function Chats() {
  return (
    <Main>
      <div className="chats flex border-t-2 border-gray-400 pb-6">
        <AllChats />
        <Outlet />
      </div>
    </Main>
  );
}

export default Chats;
