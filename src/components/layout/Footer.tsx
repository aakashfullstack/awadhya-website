'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, RefreshCw, HandCoins } from 'lucide-react';

// Inline SVG for Instagram (lucide-react doesn't include brand icons)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-dark)] transition-colors duration-300 mt-auto overflow-hidden">
      {/* Cream chikankari pattern woven into black */}
      <div className="absolute inset-0 chikankari-overlay opacity-[0.03] pointer-events-none" />
      {/* Top cream accent border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="font-display text-3xl tracking-widest text-[var(--text-on-dark)]">
                AWADHYA
              </Link>
              <p className="mt-2 text-sm text-[var(--text-muted-on-dark)] font-body">
                Stand for something. Wear it.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Instagram" className="text-[var(--text-muted-on-dark)] hover:text-[var(--accent-primary)] transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[var(--text-muted-on-dark)] hover:text-[var(--accent-primary)] transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Subscribe to our newsletter</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-[var(--bg-dark-card)] border border-[var(--border-dark)] rounded-l-md px-4 py-2 text-sm text-[var(--text-on-dark)] placeholder:text-[var(--text-muted-on-dark)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors duration-300"
                  required
                />
                <button type="submit" className="bg-[var(--accent-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-r-md text-sm font-medium hover:bg-[var(--accent-primary-hover)] transition-colors duration-300 min-h-[44px]">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-on-dark)] tracking-wider uppercase mb-4">Collections</h3>
            <ul className="space-y-3">
              {['Kavach', 'Tejas', 'Nakshatra', 'Anant', 'Ruchi', 'Festive'].map((item) => (
                <li key={item}>
                  <Link href={`/collections/${item.toLowerCase()}`} className="text-sm text-[var(--text-muted-on-dark)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shop All', href: '/shop' },
                { name: 'About Us', href: '/about' },
                { name: 'Journal', href: '/journal' },
                { name: 'Contact', href: '/contact' },
                { name: 'Track Order', href: '/track' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted-on-dark)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wider uppercase mb-4">Policies</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shipping Policy', href: '/policies/shipping' },
                { name: 'Returns & Refunds', href: '/policies/returns' },
                { name: 'Privacy Policy', href: '/policies/privacy' },
                { name: 'Terms & Conditions', href: '/policies/terms' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Trust Strip */}
        <div className="mt-12 pt-8 border-t border-[var(--border-dark)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex items-center justify-center space-x-2 text-[var(--text-muted-on-dark)]">
              <HandCoins className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="text-xs font-medium uppercase tracking-wide">Handmade in India</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-[var(--text-muted-on-dark)]">
              <ShieldCheck className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="text-xs font-medium uppercase tracking-wide">Secure Payments</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-[var(--text-muted-on-dark)]">
              <RefreshCw className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="text-xs font-medium uppercase tracking-wide">Easy Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-[var(--text-muted-on-dark)]">
              <Truck className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="text-xs font-medium uppercase tracking-wide">COD Available</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[var(--text-muted-on-dark)]">
            &copy; {new Date().getFullYear()} Awadhya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
