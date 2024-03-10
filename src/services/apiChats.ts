import supabase from "./supabase";

export async function getChats({ userId }: { userId: string | undefined }) {
  if (!userId) return null;
  console.log(userId);
  const { data, error } = await supabase.from("chat_summary").select("*");
  // .eq("user_ids", userId);

  return { data, error };
}
