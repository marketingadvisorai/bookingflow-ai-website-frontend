/**
 * Supabase Database Types
 * 
 * This file will be auto-generated from Supabase after applying migrations.
 * Run: npx supabase gen types typescript --project-id hntfoviysyimogzgveau > src/types/database.types.ts
 * 
 * For now, using manual type definitions based on our schema.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: 'admin' | 'editor' | 'viewer';
          permissions: string[];
          is_active: boolean;
          preferences: Json;
          created_at: string;
          updated_at: string;
          last_login: string | null;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content: string;
          category: 'AI' | 'Marketing' | 'Operations' | 'Industry Insights';
          tags: string[];
          author_id: string | null;
          featured_image_url: string | null;
          featured_image_alt: string | null;
          meta_title: string | null;
          meta_description: string | null;
          keywords: string[];
          canonical_url: string | null;
          status: 'draft' | 'published' | 'archived';
          published_date: string | null;
          reading_time: number | null;
          view_count: number;
          structured_data: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'id' | 'created_at' | 'updated_at' | 'view_count'>;
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>;
      };
      customer_stories: {
        Row: {
          id: string;
          slug: string;
          company_name: string;
          company_logo_url: string | null;
          industry: string;
          location: string;
          company_size: string | null;
          website_url: string | null;
          challenge: string;
          solution: string;
          results: Json;
          testimonial: Json;
          stats: Json;
          featured: boolean;
          display_order: number;
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['customer_stories']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['customer_stories']['Insert']>;
      };
      seo_data: {
        Row: {
          id: string;
          page_path: string;
          title: string;
          description: string;
          keywords: string[];
          canonical_url: string | null;
          robots: string;
          og_title: string | null;
          og_description: string | null;
          og_image: string | null;
          og_type: string;
          twitter_card: string;
          twitter_title: string | null;
          twitter_description: string | null;
          twitter_image: string | null;
          structured_data: Json | null;
          seo_score: number | null;
          last_analyzed: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['seo_data']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['seo_data']['Insert']>;
      };
      meetings: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          meeting_type: 'demo' | 'consultation' | 'support';
          scheduled_date: string;
          timezone: string;
          duration: number;
          notes: string | null;
          source: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
          calendar_event_id: string | null;
          calendar_link: string | null;
          assigned_to: string | null;
          confirmation_sent_at: string | null;
          reminder_sent_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['meetings']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['meetings']['Insert']>;
      };
      media: {
        Row: {
          id: string;
          filename: string;
          original_filename: string;
          url: string;
          mime_type: string;
          size: number;
          width: number | null;
          height: number | null;
          folder: string;
          tags: string[];
          alt_text: string | null;
          caption: string | null;
          uploaded_by: string | null;
          used_in: string[];
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['media']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['media']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Convenience type aliases
export type User = Database['public']['Tables']['users']['Row'];
export type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
export type CustomerStory = Database['public']['Tables']['customer_stories']['Row'];
export type SEOData = Database['public']['Tables']['seo_data']['Row'];
export type Meeting = Database['public']['Tables']['meetings']['Row'];
export type Media = Database['public']['Tables']['media']['Row'];
