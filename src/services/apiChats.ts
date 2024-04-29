import {
  ChatInsertType,
  ChatMessageInsertType,
  ChatUsersInsertType,
} from '../types/collection';
import supabase from './supabase';

export async function getChats({ userId }: { userId: string | undefined }) {
  if (!userId) return null;

  const { data, error } = await supabase
    .from('chat_summary')
    .select('*')
    .contains('user_ids', [userId]);

  return { data: data || [], error };
}

export async function getChatMessagesInfo({ chatId }: { chatId: string }) {
  const { data, error } = await supabase
    .from('chat_messages_info_view')
    .select('*')
    .eq('chat_id', chatId);

  return { data, error };
}

// type CreateChatMessageType = {
//   messageDetail: ChatMessageType;
// };

// export async function createChatMessage({
//   messageDetail,
// }: CreateChatMessageType) {
//   console.log(messageDetail);
//   const { data, error } = await supabase
//     .from('chat_messages')
//     .insert([messageDetail])
//     .select();

//   return { data, error };
// }
export async function createChatMessage(newMessage: ChatMessageInsertType) {
  console.log(newMessage);
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([newMessage])
    .select();

  return { data, error };
}

export async function chatSubscription(resetQuery: () => Promise<void>) {
  const subscription = supabase
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'chat_messages' },
      resetQuery,
    )
    .subscribe();

  return subscription;
}

//////////////////////
export async function createChat(newChat: ChatInsertType) {
  const { data: chat, error } = await supabase
    .from('chats')
    .insert([newChat])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Došlo je do greške pilikom kreiranja četa.');
  }

  return { chat };
}

export async function addChatUser({ chat_id, user_id }: ChatUsersInsertType) {
  if (!user_id || !chat_id) {
    console.error(user_id);
    throw new Error(
      'Došlo je do greške pilikom kreiranja četa ili dodavanja usera.',
    );
  }

  const { data, error } = await supabase
    .from('chat_users')
    .insert([{ chat_id, user_id }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Došlo je do greške pilikom kreiranja četa.');
  }

  return { data };
}
