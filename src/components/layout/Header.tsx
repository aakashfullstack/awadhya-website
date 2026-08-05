'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border)] transition-colors duration-300">
      {/* Announcement Bar */}
      <div className="relative w-full bg-[var(--bg-announcement)] text-[var(--text-announcement)] py-2 overflow-hidden transition-colors duration-300 font-medium">
        <div className="whitespace-nowrap md:text-center text-xs md:text-sm font-body px-4 relative z-10">
          <span className="inline-block animate-[marquee_20s_linear_infinite] md:animate-none">
            Free Shipping on orders above ₹599 | Handcrafted in Lucknow | COD Available
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Mobile Menu & Logo */}
          <div className="flex-1 flex items-center justify-start space-x-2 md:space-x-4">
            <button
              type="button"
              className="p-2 md:hidden text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300 min-w-[44px] min-h-[44px]"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" onClick={handleHomeClick} className="block">
              <Image
                src="/logo-full.jpg"
                alt="Awadhya — Stand for something. Wear it."
                width={200}
                height={100}
                className="h-12 md:h-16 w-auto object-contain scale-125 origin-left"
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="flex-shrink-0 hidden md:flex items-center justify-center">
            <nav className="flex space-x-8">
              <Link href="/" onClick={handleHomeClick} className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                Shop
              </Link>
              <Link href="/collections" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                Collections
              </Link>
              <Link href="/about" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                About
              </Link>
              <Link href="/journal" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                Journal
              </Link>
            </nav>
          </div>

          {/* Right: Icons */}
          <div className="flex-1 flex items-center justify-end space-x-2 md:space-x-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300 relative min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Heart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-[10px] flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </button>
            <button className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300 relative min-w-[44px] min-h-[44px] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-[10px] flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setIsMobileNavOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[var(--bg-primary)] shadow-2xl z-50 flex flex-col transition-colors duration-300 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                <span className="font-display text-xl text-[var(--text-primary)] tracking-widest">AWADHYA</span>
                <button
                  type="button"
                  className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  onClick={() => setIsMobileNavOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-6">
                <Link href="/" onClick={handleHomeClick} className="text-lg font-medium text-[var(--text-primary)]">
                  Home
                </Link>
                <Link href="/shop" onClick={() => setIsMobileNavOpen(false)} className="text-lg font-medium text-[var(--text-primary)]">
                  Shop
                </Link>
                <Link href="/collections" onClick={() => setIsMobileNavOpen(false)} className="text-lg font-medium text-[var(--text-primary)]">
                  Collections
                </Link>
                <Link href="/about" onClick={() => setIsMobileNavOpen(false)} className="text-lg font-medium text-[var(--text-primary)]">
                  About
                </Link>
                <Link href="/journal" onClick={() => setIsMobileNavOpen(false)} className="text-lg font-medium text-[var(--text-primary)]">
                  Journal
                </Link>
                <div className="pt-6 mt-6 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)] font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
