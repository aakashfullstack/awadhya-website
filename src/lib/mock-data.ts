// ============================================
// Awadhya — Mock Data (placeholder until Supabase is wired)
// ============================================

import type { Collection, Product, Review } from "./types";

// --- Tab Configuration (Super-Admin-editable in production) ---
export interface TabConfig {
  id: string;
  label: string;
  type: "all" | "category" | "trending" | "ornament";
  ornamentType?: string; // only for type === "ornament"
  order: number;
}

export const tabConfig: TabConfig[] = [
  { id: "tab-all", label: "All", type: "all", order: 0 },
  { id: "tab-category", label: "Category", type: "category", order: 1 },
  { id: "tab-trending", label: "Trending", type: "trending", order: 2 },
  { id: "tab-rakhi", label: "Rakhi", type: "ornament", ornamentType: "rakhi", order: 3 },
  { id: "tab-earrings", label: "Earrings", type: "ornament", ornamentType: "earrings", order: 4 },
  { id: "tab-necklace", label: "Necklace", type: "ornament", ornamentType: "necklace", order: 5 },
  { id: "tab-bracelet", label: "Bracelet", type: "ornament", ornamentType: "bracelet", order: 6 },
  { id: "tab-rings", label: "Rings", type: "ornament", ornamentType: "rings", order: 7 },
  { id: "tab-customized", label: "Customized", type: "ornament", ornamentType: "customized", order: 8 },
];

// --- Collections ---
export const collections: Collection[] = [
  {
    id: "col-festive",
    name: "Rakshabandhan",
    slug: "rakshabandhan",
    nameDevanagari: "रक्षाबंधन",
    meaning: "Celebrating bonds that protect",
    description:
      "Seasonal, festival-specific drops celebrating the sacred bond between siblings. Handcrafted rakhis and festive ornaments from the heart of Lucknow.",
    ornamentTypes: ["rakhi", "bracelet", "earrings"],
    iconEmoji: "🪷",
    productCount: 12,
  },
  {
    id: "col-kavach",
    name: "Kavach",
    slug: "kavach",
    nameDevanagari: "कवच",
    meaning: "I protect my peace, my people",
    description:
      "Armor for the soul. Bold, protective pieces for those who guard what matters most — their peace, their people, their power.",
    ornamentTypes: ["bracelet", "rings", "necklace", "earrings"],
    iconEmoji: "🛡️",
    productCount: 8,
  },
  {
    id: "col-tejas",
    name: "Tejas",
    slug: "tejas",
    nameDevanagari: "तेजस्",
    meaning: "I don't dim myself for anyone",
    description:
      "Radiance, inner fire. Statement pieces for those who refuse to shrink — designed to catch light and never let it go.",
    ornamentTypes: ["earrings", "necklace", "rings"],
    iconEmoji: "✨",
    productCount: 10,
  },
  {
    id: "col-nakshatra",
    name: "Nakshatra",
    slug: "nakshatra",
    nameDevanagari: "नक्षत्र",
    meaning: "I know exactly who I am",
    description:
      "Star, constellation. Celestial-inspired pieces for those whose identity is written in the stars — unapologetic and self-aware.",
    ornamentTypes: ["earrings", "necklace", "rings", "bracelet"],
    iconEmoji: "⭐",
    productCount: 9,
  },
  {
    id: "col-anant",
    name: "Anant",
    slug: "anant",
    nameDevanagari: "अनन्त",
    meaning: "The people who hold me together matter",
    description:
      "Infinite. Pieces that celebrate unbreakable bonds — designed for those who understand that connection is the truest luxury.",
    ornamentTypes: ["bracelet", "necklace", "customized"],
    iconEmoji: "♾️",
    productCount: 7,
  },
  {
    id: "col-ruchi",
    name: "Ruchi",
    slug: "ruchi",
    nameDevanagari: "रुचि",
    meaning: "I make my own rules",
    description:
      "Personal taste. Playful, unconventional pieces for the ones who set trends, never follow them.",
    ornamentTypes: ["earrings", "rings", "customized", "necklace"],
    iconEmoji: "🎨",
    productCount: 11,
  },
];

// --- Products (sample data for homepage) ---
export const products: Product[] = [
  // Kavach
  {
    id: "prod-1",
    name: "Kavach Shield Studs",
    slug: "kavach-shield-studs",
    collectionId: "col-kavach",
    collectionName: "Kavach",
    ornamentType: "earrings",
    price: 79900,
    compareAtPrice: 99900,
    meaningCopy:
      "Inspired by ancient armor motifs, these studs are your everyday reminder: you carry your own shield.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: false,
    isTrending: true,
    rating: 4.8,
    reviewCount: 24,
    stock: 15,
  },
  {
    id: "prod-2",
    name: "Kavach Cuff Bracelet",
    slug: "kavach-cuff-bracelet",
    collectionId: "col-kavach",
    collectionName: "Kavach",
    ornamentType: "bracelet",
    price: 129900,
    compareAtPrice: 159900,
    meaningCopy:
      "A solid cuff that wraps your wrist like a vow — to protect your peace, always.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: true,
    isTrending: true,
    rating: 4.9,
    reviewCount: 18,
    stock: 8,
  },
  // Tejas
  {
    id: "prod-3",
    name: "Tejas Flame Drops",
    slug: "tejas-flame-drops",
    collectionId: "col-tejas",
    collectionName: "Tejas",
    ornamentType: "earrings",
    price: 89900,
    compareAtPrice: 119900,
    meaningCopy:
      "Flame-shaped drops that move with you — because your fire was never meant to be still.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: true,
    isTrending: true,
    rating: 4.7,
    reviewCount: 31,
    stock: 12,
  },
  {
    id: "prod-4",
    name: "Tejas Radiance Pendant",
    slug: "tejas-radiance-pendant",
    collectionId: "col-tejas",
    collectionName: "Tejas",
    ornamentType: "necklace",
    price: 149900,
    compareAtPrice: 189900,
    meaningCopy:
      "A sun-burst pendant handcrafted to sit at your collar. You don't dim yourself. This necklace knows that.",
    images: ["/placeholder-product.jpg"],
    isFeatured: false,
    isNew: true,
    isTrending: false,
    rating: 4.6,
    reviewCount: 12,
    stock: 6,
  },
  // Nakshatra
  {
    id: "prod-5",
    name: "Nakshatra Constellation Hoops",
    slug: "nakshatra-constellation-hoops",
    collectionId: "col-nakshatra",
    collectionName: "Nakshatra",
    ornamentType: "earrings",
    price: 99900,
    meaningCopy:
      "Delicate hoops dotted with star motifs — your birth chart, translated into gold.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: false,
    isTrending: true,
    rating: 4.9,
    reviewCount: 42,
    stock: 20,
  },
  {
    id: "prod-6",
    name: "Nakshatra Star Ring",
    slug: "nakshatra-star-ring",
    collectionId: "col-nakshatra",
    collectionName: "Nakshatra",
    ornamentType: "rings",
    price: 69900,
    compareAtPrice: 89900,
    meaningCopy:
      "A single star sits on a slender band. For the one who always knew exactly who they were.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: false,
    isTrending: false,
    rating: 4.8,
    reviewCount: 56,
    stock: 25,
  },
  // Anant
  {
    id: "prod-7",
    name: "Anant Infinity Chain",
    slug: "anant-infinity-chain",
    collectionId: "col-anant",
    collectionName: "Anant",
    ornamentType: "necklace",
    price: 159900,
    compareAtPrice: 199900,
    meaningCopy:
      "An infinity loop meets a delicate chain — for bonds that have no beginning and no end.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: true,
    isTrending: true,
    rating: 5.0,
    reviewCount: 8,
    stock: 4,
  },
  // Ruchi
  {
    id: "prod-8",
    name: "Ruchi Rebel Ear Cuff",
    slug: "ruchi-rebel-ear-cuff",
    collectionId: "col-ruchi",
    collectionName: "Ruchi",
    ornamentType: "earrings",
    price: 59900,
    meaningCopy:
      "No piercing required. This ear cuff wraps on its own terms — exactly like the person wearing it.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: true,
    isTrending: true,
    rating: 4.7,
    reviewCount: 19,
    stock: 30,
  },
  // Festive
  {
    id: "prod-9",
    name: "Sacred Thread Rakhi",
    slug: "sacred-thread-rakhi",
    collectionId: "col-festive",
    collectionName: "Rakshabandhan",
    ornamentType: "rakhi",
    price: 49900,
    compareAtPrice: 69900,
    meaningCopy:
      "Handwoven thread meets handcrafted charm. This rakhi carries a prayer older than words.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: true,
    isTrending: true,
    rating: 4.9,
    reviewCount: 67,
    stock: 50,
  },
  {
    id: "prod-10",
    name: "Festive Jhumka Drops",
    slug: "festive-jhumka-drops",
    collectionId: "col-festive",
    collectionName: "Rakshabandhan",
    ornamentType: "earrings",
    price: 109900,
    compareAtPrice: 139900,
    meaningCopy:
      "Traditional jhumkas reimagined with a modern lightness — because celebrations should never weigh you down.",
    images: ["/placeholder-product.jpg"],
    isFeatured: true,
    isNew: false,
    isTrending: false,
    rating: 4.8,
    reviewCount: 33,
    stock: 18,
  },
  // Additional products for more variety
  {
    id: "prod-11",
    name: "Ruchi Twist Ring",
    slug: "ruchi-twist-ring",
    collectionId: "col-ruchi",
    collectionName: "Ruchi",
    ornamentType: "rings",
    price: 74900,
    compareAtPrice: 99900,
    meaningCopy:
      "A twisted band that refuses to be ordinary. For fingers that point at convention and say 'not today.'",
    images: ["/placeholder-product.jpg"],
    isFeatured: false,
    isNew: true,
    isTrending: false,
    rating: 4.6,
    reviewCount: 14,
    stock: 22,
  },
  {
    id: "prod-12",
    name: "Anant Bond Bracelet",
    slug: "anant-bond-bracelet",
    collectionId: "col-anant",
    collectionName: "Anant",
    ornamentType: "bracelet",
    price: 119900,
    meaningCopy:
      "Two interlocking links that cannot be separated without breaking both. That's the point.",
    images: ["/placeholder-product.jpg"],
    isFeatured: false,
    isNew: false,
    isTrending: false,
    rating: 4.7,
    reviewCount: 9,
    stock: 11,
  },
];

// --- Reviews ---
export const reviews: Review[] = [
  {
    id: "rev-1",
    customerName: "Priya M.",
    location: "Mumbai",
    rating: 5,
    title: "My favourite rakhis ever",
    body: "Ordered 3 rakhis for my brothers. The craftsmanship is unreal — you can feel the love in every thread. They loved them. Already planning to order earrings for myself!",
    productName: "Sacred Thread Rakhi",
    date: "2026-07-28",
    avatarInitial: "P",
  },
  {
    id: "rev-2",
    customerName: "Ananya S.",
    location: "Delhi",
    rating: 5,
    title: "The meaning behind the pieces 🥺",
    body: "I bought the Kavach studs because the meaning resonated so deeply — 'I protect my peace.' Every time I wear them, I remember that. This brand gets it.",
    productName: "Kavach Shield Studs",
    date: "2026-07-15",
    avatarInitial: "A",
  },
  {
    id: "rev-3",
    customerName: "Ritu K.",
    location: "Jaipur",
    rating: 5,
    title: "Gifted the infinity chain to my maa",
    body: "The Anant chain is so delicate and beautiful. My mother teared up reading the meaning card that came with it. This is jewelry that says something.",
    productName: "Anant Infinity Chain",
    date: "2026-07-20",
    avatarInitial: "R",
  },
  {
    id: "rev-4",
    customerName: "Shreya T.",
    location: "Lucknow",
    rating: 4,
    title: "Gen Z approved ✨",
    body: "The Ruchi ear cuff is everything. Wore it to a party and got so many compliments. Love that it's handmade and actually stands for something real.",
    productName: "Ruchi Rebel Ear Cuff",
    date: "2026-06-30",
    avatarInitial: "S",
  },
  {
    id: "rev-5",
    customerName: "Meera J.",
    location: "Bangalore",
    rating: 5,
    title: "Packaging was a whole experience",
    body: "The unboxing felt so premium and personal. There was a handwritten note from the founder. The Nakshatra hoops are now my everyday pair.",
    productName: "Nakshatra Constellation Hoops",
    date: "2026-07-10",
    avatarInitial: "M",
  },
];

// --- Ornament Type Labels ---
export const ornamentTypeLabels: Record<string, string> = {
  all: "All",
  earrings: "Earrings",
  rakhi: "Rakhi",
  necklace: "Necklace",
  bracelet: "Bracelet",
  rings: "Rings",
  customized: "Customized",
};

// --- Festival Data ---
export const upcomingFestival = {
  name: "Raksha Bandhan",
  nameDevanagari: "रक्षा बंधन",
  date: new Date("2026-08-09T00:00:00+05:30"),
  tagline: "Handcrafted rakhis, made with a mother's love",
  ctaText: "Shop Rakshabandhan Collection",
  ctaHref: "/collections/rakshabandhan",
};

// --- Price Helpers ---
export function formatPrice(paise: number): string {
  return `₹${(paise / 100).toLocaleString("en-IN")}`;
}

export function getDiscountPercent(price: number, compareAt: number): number {
  return Math.round(((compareAt - price) / compareAt) * 100);
}
