import { useQuery } from "@tanstack/react-query";
import { getChats } from "../../services/apiChats";
import { useUser } from "../authentication/useUser";

export function useChats() {
  const { userId } = useUser();
  const { isLoading, data: chats } = useQuery({
    queryKey: ["user", "chats"],
    queryFn: () =>
      getChats({ userId: userId || "781ff0e0-a8b6-4024-a7a9-d8d499bb38a1" }),
  });
  return { isLoading, chats };
}
