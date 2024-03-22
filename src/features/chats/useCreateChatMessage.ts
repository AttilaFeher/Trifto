import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChatMessage as apiCreateChatMessage } from '../../services/apiChats';
import { ChatMessageType } from '../../types/collection';

export function useCreateChatMessage(chatId: string) {
  const queryClient = useQueryClient();

  const { mutate: createChatMessage, isPending: isCreating } = useMutation({
    mutationFn: (messageDetail: ChatMessageType) =>
      apiCreateChatMessage({ messageDetail }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user', 'chats', chatId],
      });
    },
  });

  return { isCreating, createChatMessage };
}
