import { Database } from "./supabase-types";

// Database tables
export type UserType = Database["public"]["Tables"]["users_info"]["Row"];
export type ChatType = Database["public"]["Tables"]["chats"]["Row"];
export type ChatMessageType =
  Database["public"]["Tables"]["chat_messages"]["Row"];
export type ChatUsersType = Database["public"]["Tables"]["chat_users"]["Row"];
