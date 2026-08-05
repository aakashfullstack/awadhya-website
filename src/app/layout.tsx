import type { Metadata } from "next";
import { Playfair_Display, Manrope, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

// --- Font Configuration ---
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
  weight: ["400", "600"],
});

// --- Metadata ---
export const metadata: Metadata = {
  title: {
    default: "Awadhya — Stand for something. Wear it.",
    template: "%s | Awadhya",
  },
  description:
    "Handcrafted ornaments from the heart of Awadh. Each piece a symbol of what makes you, you. Discover rakhis, earrings, necklaces, bracelets, and rings that carry meaning.",
  keywords: [
    "handmade jewelry",
    "Indian jewelry",
    "Lucknow",
    "Awadhi craftsmanship",
    "rakhi",
    "earrings",
    "necklace",
    "bracelet",
    "rings",
    "spiritual jewelry",
    "festive jewelry",
    "Awadhya",
  ],
  authors: [{ name: "Awadhya" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Awadhya",
    title: "Awadhya — Stand for something. Wear it.",
    description:
      "Handcrafted ornaments from the heart of Awadh. Each piece a symbol of what makes you, you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awadhya — Stand for something. Wear it.",
    description:
      "Handcrafted ornaments from the heart of Awadh. Each piece a symbol of what makes you, you.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- FOUC Prevention Script ---
// This inline script runs before React hydration to set the correct theme
// attribute on <html>, preventing flash of wrong theme.
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('awadhya-theme');
      if (theme === 'bloom' || theme === 'noir') {
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        document.documentElement.setAttribute('data-theme', 'noir');
      }
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'noir');
    }
  })();
`;

// --- Root Layout ---
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="noir"
      className={`${playfair.variable} ${manrope.variable} ${notoDevanagari.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-bg-primary text-text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
