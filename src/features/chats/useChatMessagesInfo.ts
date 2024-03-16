import { useQuery } from "@tanstack/react-query";
import { getChatMessagesInfo } from "../../services/apiChats";

export function useChatMessagesInfo() {
  const { isLoading, data: chatMessagesInfo } = useQuery({
    queryKey: ["user", "chats", "1"],
    queryFn: () =>
      getChatMessagesInfo({
        chatId: "1",
      }),
  });
  return { isLoading, chatMessagesInfo };
}
