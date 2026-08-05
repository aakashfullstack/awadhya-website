'use client';

import { useRef } from 'react';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/mock-data';

export default function ReviewsStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-16 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-display text-3xl text-center text-[var(--text-primary)] relative inline-block left-1/2 -translate-x-1/2">
          <span className="text-[var(--accent-primary)] absolute -left-6 -top-4 text-5xl font-serif">"</span>
          Why I wear my Awadhya
          <span className="text-[var(--accent-primary)] absolute -right-6 -bottom-6 text-5xl font-serif">"</span>
        </h2>
      </div>

      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-8 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border)] min-w-[300px] md:min-w-[350px] snap-center shrink-0 shadow-sm flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-[var(--rating)] text-[var(--rating)]' : 'text-[var(--border)]'}`} />
                ))}
              </div>
              
              <h3 className="font-body font-semibold text-[var(--text-primary)] mb-3 text-lg">
                "{review.title}"
              </h3>
              
              <p className="font-body text-sm text-[var(--text-secondary)] line-clamp-4 flex-grow mb-6 italic">
                {review.body}
              </p>
              
              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] text-[var(--bg-primary)] flex items-center justify-center font-bold text-sm">
                    {review.avatarInitial}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{review.customerName}</p>
                    <p className="text-xs text-[var(--text-muted)]">{review.location}</p>
                  </div>
                </div>
                {review.productName && (
                  <p className="text-xs text-[var(--accent-primary)] max-w-[100px] truncate text-right">
                    on {review.productName}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
