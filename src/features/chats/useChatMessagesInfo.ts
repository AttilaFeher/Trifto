import { useQuery } from '@tanstack/react-query';
import { getChatMessagesInfo } from '../../services/apiChats';

export function useChatMessagesInfo(chatId: string) {
  const { isLoading, data: chatMessagesInfo } = useQuery({
    queryKey: ['user', 'chats', chatId],
    queryFn: () =>
      getChatMessagesInfo({
        chatId: chatId,
      }),
  });
  return { isLoading, chatMessagesInfo };
}
