import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addChatUser,
  createChat as createChatApi,
  createChatMessage,
} from '../../services/apiChats';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

type NewChatType = {
  message: string;
  userId1: number;
  userId2: number;
};

export function useNewChat() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createChat, isPending: isCreating } = useMutation({
    mutationFn: async function ({ message, userId1, userId2 }: NewChatType) {
      try {
        const {
          chat: { id: chat_id },
        } = await createChatApi({ last_message: message });
        console.log(chat_id);
        await addChatUser({ chat_id, user_id: userId1 });
        await addChatUser({ chat_id, user_id: userId2 });
        await createChatMessage({ chat_id, message, user_id: userId1 });
        return { chat_id };
      } catch (err) {
        console.error(err);
        // throw new Error(err);
      }
    },
    onSuccess: ({ chat_id }) => {
      console.log(chat_id);
      queryClient.invalidateQueries({
        queryKey: ['user', 'chats'],
      });
      navigate(`/chats/${chat_id}`);
    },
    onError: () => {
      toast.error(`Došlo je do problema prilikom slanja poruke.`);
    },
  });

  return { createChat, isCreating };
}
