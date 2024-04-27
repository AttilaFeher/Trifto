import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChat as createChatApi } from '../../services/apiChats';
import { useNavigate } from 'react-router-dom';

export function useCreateChat() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createChat, isPending: isCreating } = useMutation({
    mutationFn: createChatApi,
    onSuccess: ({ createdChat }) => {
      queryClient.invalidateQueries({
        queryKey: ['user', 'chats'],
      });
      navigate(`/chats/${createdChat.id}`);
    },
  });

  return { isCreating, createChat };
}
