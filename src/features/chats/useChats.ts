import { useQuery } from "@tanstack/react-query";
import { getChats } from "../../services/apiChats";
import { useUser } from "../authentication/useUser";

export function useChats() {
  const { userId } = useUser();
  const { isLoading, data: chats } = useQuery({
    queryKey: ["user", "chats"],
    queryFn: () => getChats({ userId }),
  });
  console.log(chats);
  return { isLoading, chats };
}
