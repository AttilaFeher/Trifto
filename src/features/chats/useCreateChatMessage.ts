import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChatMessage as apiCreateChatMessage } from '../../services/apiChats';

export function useCreateChatMessage(chatId: string) {
  const queryClient = useQueryClient();

  const { mutate: createChatMessage, isPending: isCreating } = useMutation({
    mutationFn: apiCreateChatMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user', 'chats', chatId],
      });
    },
  });

  return { isCreating, createChatMessage };
}
