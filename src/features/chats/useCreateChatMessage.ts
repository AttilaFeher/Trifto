import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChatMessage as apiCreateChatMessage } from "../../services/apiChats";

export function useCreateChatMessage() {
  const queryClient = useQueryClient();

  const { mutate: createChatMessage, isLoading: isCreating } = useMutation({
    mutationFn: apiCreateChatMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "chats", "1"],
      });
    },
  });

  return { isCreating, createChatMessage };
}
