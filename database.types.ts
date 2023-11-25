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
          update_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          product_id: number
          quantity?: number | null
          update_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number
          quantity?: number | null
          update_at?: string | null
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
