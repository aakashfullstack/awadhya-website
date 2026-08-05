import Link from 'next/link';
import { Camera } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramGrid() {
  // Using 6 items for the grid
  const items = Array.from({ length: 6 }).map((_, i) => i);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] flex items-center justify-center gap-3 mb-2">
            <InstagramIcon className="w-6 h-6 md:w-8 md:h-8" />
            As seen on Instagram
          </h2>
          <a 
            href="https://instagram.com/awadhya.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:underline font-medium"
          >
            @awadhya.in
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-8">
          {items.map((i) => (
            <a 
              key={i} 
              href="https://instagram.com/awadhya.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative aspect-square bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden flex items-center justify-center"
            >
              <Camera className="w-8 h-8 text-[var(--text-muted)] opacity-30 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs md:text-sm font-medium flex items-center gap-1 text-center px-2">
                  <InstagramIcon className="w-4 h-4 hidden sm:block" />
                  View on Instagram &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://instagram.com/awadhya.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors border-b border-transparent hover:border-[var(--accent-primary)] pb-0.5"
          >
            Follow us on Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
