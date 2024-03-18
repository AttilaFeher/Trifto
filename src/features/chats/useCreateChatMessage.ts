import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChatMessage as apiCreateChatMessage } from "../../services/apiChats";
import { ChatMessageType } from "../../types/collection";

export function useCreateChatMessage() {
  const queryClient = useQueryClient();

  const { mutate: createChatMessage, isLoading: isCreating } = useMutation({
    mutationFn: (messageDetail: ChatMessageType) =>
      apiCreateChatMessage({ messageDetail }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "chats", "1"],
      });
    },
  });

  return { isCreating, createChatMessage };
}
