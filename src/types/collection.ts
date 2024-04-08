import { Database } from './supabase-types';

// Database tables
export type UserType = Database['public']['Tables']['users_info']['Row'];
export type ChatType = Database['public']['Tables']['chats']['Row'];
export type ChatMessageType =
  Database['public']['Tables']['chat_messages']['Row'];
export type ChatUsersType = Database['public']['Tables']['chat_users']['Row'];
export type ProductsType = Database['public']['Tables']['products']['Row'];
export type ProductsInsertType =
  Database['public']['Tables']['products']['Insert'];

// Views
export type ChatSummaryViewType =
  Database['public']['Views']['chat_summary']['Row'];

export type ChatMessageInfoViewType =
  Database['public']['Views']['chat_messages_info_view']['Row'];
