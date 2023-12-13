export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tb_cart: {
        Row: {
          created_at: string
          id: number
          product_id: number
          quantity: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          product_id: number
          quantity?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number
          quantity?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_cart_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "tb_product"
            referencedColumns: ["id"]
          }
        ]
      }
      tb_detail_transaction: {
        Row: {
          created_at: string
          id: number
          price: number | null
          product_id: number | null
          quantity: number | null
          transaction_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          transaction_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          transaction_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_detail_transaction_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "tb_product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tb_detail_transaction_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "tb_transaction"
            referencedColumns: ["id"]
          }
        ]
      }
      tb_feedback: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: number
          invoice_number: string | null
          last_name: string | null
          note: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          invoice_number?: string | null
          last_name?: string | null
          note?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          invoice_number?: string | null
          last_name?: string | null
          note?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tb_product: {
        Row: {
          created_at: string
          id: number
          product_description: string | null
          product_image: string | null
          product_name: string | null
          product_price: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          product_description?: string | null
          product_image?: string | null
          product_name?: string | null
          product_price?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          product_description?: string | null
          product_image?: string | null
          product_name?: string | null
          product_price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tb_transaction: {
        Row: {
          address: string | null
          company_name: string | null
          country: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: number
          id_user: string | null
          last_name: string | null
          location: string | null
          note: string | null
          phone: string | null
          postal_code: string | null
          state: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          id_user?: string | null
          last_name?: string | null
          location?: string | null
          note?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          id_user?: string | null
          last_name?: string | null
          location?: string | null
          note?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

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
  : never
