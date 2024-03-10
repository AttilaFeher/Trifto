// > trifto@0.0.0 supabase
// > supabase gen types typescript --project-id=wgmvfcqzrfufnictjcsm

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      chat_messages: {
        Row: {
          chatId: number | null;
          created_at: string;
          id: number;
          message: string | null;
          userId: number | null;
        };
        Insert: {
          chatId?: number | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          userId?: number | null;
        };
        Update: {
          chatId?: number | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          userId?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_chat_messages_chatId_fkey";
            columns: ["chatId"];
            isOneToOne: false;
            referencedRelation: "chat_summary";
            referencedColumns: ["chat_id"];
          },
          {
            foreignKeyName: "public_chat_messages_chatId_fkey";
            columns: ["chatId"];
            isOneToOne: false;
            referencedRelation: "chats";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_chat_messages_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users_info";
            referencedColumns: ["id"];
          }
        ];
      };
      chat_users: {
        Row: {
          chat_id: number | null;
          created_at: string;
          id: number;
          user_id: number | null;
        };
        Insert: {
          chat_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Update: {
          chat_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_chat_users_chatId_fkey";
            columns: ["chat_id"];
            isOneToOne: false;
            referencedRelation: "chat_summary";
            referencedColumns: ["chat_id"];
          },
          {
            foreignKeyName: "public_chat_users_chatId_fkey";
            columns: ["chat_id"];
            isOneToOne: false;
            referencedRelation: "chats";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_chat_users_userId_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users_info";
            referencedColumns: ["id"];
          }
        ];
      };
      chats: {
        Row: {
          created_at: string;
          id: number;
          last_message: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          last_message?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          last_message?: string | null;
        };
        Relationships: [];
      };
      users_info: {
        Row: {
          created_at: string;
          id: number;
          nickname: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          nickname?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          nickname?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_users_info_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      chat_summary: {
        Row: {
          chat_id: number | null;
          last_message: string | null;
          nicknames: string[] | null;
          user_ids: string[] | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
