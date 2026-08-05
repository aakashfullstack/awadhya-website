'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/mock-data';
import ProductCard from '@/components/ui/ProductCard';

export default function BestsellersCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const carouselProducts = products.filter((p) => p.isFeatured || p.isNew);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl text-[var(--text-primary)]">
            Bestsellers &amp; New Arrivals
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="text-[var(--accent-primary)] hover:underline font-medium font-body hidden sm:block"
            >
              View All &rarr;
            </Link>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--text-primary)]" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-[var(--text-primary)]" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[75%] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.33%-16px)] lg:min-w-[calc(25%-18px)] snap-start shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:hidden text-center">
          <Link
            href="/shop"
            className="text-[var(--accent-primary)] hover:underline font-medium font-body"
          >
            View All &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
