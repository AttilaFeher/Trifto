import { ChatMessageType } from "../types/collection";
import supabase from "./supabase";

export async function getChats({ userId }: { userId: string | undefined }) {
  if (!userId) return null;

  const { data, error } = await supabase.from("chat_summary").select("*");
  // .eq("user_ids", userId);

  return { data, error };
}

export async function getChatMessagesInfo({ chatId }: { chatId: string }) {
  const { data, error } = await supabase
    .from("chat_messages_info_view")
    .select("*")
    .eq("chat_id", chatId);

  const chatMessages = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "chat_messages" },
      (payload) => {
        console.log("Change received!", payload);
      }
    )
    .subscribe();
  // console.log(chatMessages);

  return { data, error, chatMessages };
}

type CreateChatMessageType = {
  messageDetail: ChatMessageType;
};

export async function createChatMessage({
  messageDetail,
}: CreateChatMessageType) {
  console.log(messageDetail);
  const { data, error } = await supabase
    .from("chat_messages")
    .insert([messageDetail])
    .select();

  return { data, error };
}
