import { useQuery } from '@tanstack/react-query';
import { getChats } from '../../services/apiChats';
import { useUser } from '../authentication/useUser';
import { useNavigate } from 'react-router-dom';

export function useChats() {
  const { userId } = useUser();
  const navigate = useNavigate();

  const {
    isLoading,
    data: chats,
    isSuccess,
  } = useQuery({
    queryKey: ['user', 'chats'],
    queryFn: () => getChats({ userId }),
    // select: (data) => {
    //   console.log(data);
    //   navigate(`${data!.data[0].chat_id}`);
    //   return data;
    // },
  });

  // if (isSuccess && chats?.data) {
  //   navigate(`${chats?.data[0].chat_id}`);
  // }
  return { isLoading, chats };
}
