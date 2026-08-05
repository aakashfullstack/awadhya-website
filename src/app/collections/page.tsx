import { collections } from '@/lib/mock-data';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Our Collections | Awadhya',
  description: 'Explore the meaningful themes behind each of our handcrafted collections.',
};

export default function CollectionsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4">Our Collections</h1>
        <p className="font-body text-[var(--text-secondary)] max-w-2xl mx-auto">
          Every piece we make belongs to a collection rooted in identity. Discover the meanings, the ethos, and the craft behind Awadhya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {collections.map((col) => (
          <Link href={`/collections/${col.slug}`} key={col.id} className="group block">
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 group-hover:border-[var(--accent-primary)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lg)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[var(--bg-elevated)] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {col.iconEmoji}
                </div>
                <span className="font-devanagari text-[var(--accent-primary)] text-lg">{col.nameDevanagari}</span>
              </div>
              
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                {col.name}
              </h2>
              
              <p className="font-body italic text-[var(--text-muted)] text-sm mb-4">
                "{col.meaning}"
              </p>
              
              <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                {col.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
                  Explore Collection &rarr;
                </span>
                <span className="text-xs text-[var(--text-muted)] bg-[var(--bg-elevated)] px-2 py-1 rounded-md">
                  {col.productCount} pieces
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
