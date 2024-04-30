import { useQuery } from '@tanstack/react-query';
import { getChats } from '../../services/apiChats';
import { useUser } from '../authentication/useUser';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function useChats(navFirst = false) {
  const { userId } = useUser();
  const navigate = useNavigate();
  const { chatId, userId: newChatMember } = useParams();

  const { isLoading, data: chats } = useQuery({
    queryKey: ['user', 'chats'],
    queryFn: () => getChats({ userId }),
  });

  useEffect(() => {
    function navigateFirstChat() {
      if (!isLoading && chats?.data && chats.data.length > 0 && !chatId) {
        navigate(`${chats.data[0].chat_id}`);
      }
    }
    if (navFirst && !newChatMember) navigateFirstChat();
  }, [isLoading, chats, navigate, chatId]);

  return { isLoading, chats };
}
