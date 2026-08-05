// ============================================
// Awadhya — Shared Types
// ============================================

export type OrnamentType =
  | "all"
  | "earrings"
  | "rakhi"
  | "necklace"
  | "bracelet"
  | "rings"
  | "customized";

export interface Collection {
  id: string;
  name: string;
  slug: string;
  nameDevanagari: string;
  meaning: string;
  description: string;
  ornamentTypes: OrnamentType[]; // which ornament types have inventory
  iconEmoji: string; // placeholder until real icons
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collectionId: string;
  collectionName: string;
  ornamentType: Exclude<OrnamentType, "all">;
  price: number; // in paise
  compareAtPrice?: number; // MRP in paise
  meaningCopy: string;
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  isTrending: boolean;
  rating: number;
  reviewCount: number;
  stock: number;
}

export interface Review {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  title: string;
  body: string;
  productName: string;
  date: string;
  avatarInitial: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  instagramUrl: string;
  caption: string;
}
