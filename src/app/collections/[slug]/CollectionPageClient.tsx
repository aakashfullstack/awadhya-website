'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import type { Product } from '@/lib/types';
import { ornamentTypeLabels } from '@/lib/mock-data';

interface CollectionPageClientProps {
  products: Product[];
  ornamentTypes: string[];
}

export default function CollectionPageClient({ products, ornamentTypes }: CollectionPageClientProps) {
  const [selectedType, setSelectedType] = useState('All');

  const filteredProducts = selectedType === 'All' 
    ? products 
    : products.filter(p => p.ornamentType === selectedType);

  return (
    <div className="w-full">
      {/* Filters */}
      {ornamentTypes.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-12">
          <button
            onClick={() => setSelectedType('All')}
            className={`relative px-6 py-2 rounded-full text-sm font-body transition-colors ${
              selectedType === 'All'
                ? 'text-[var(--bg-card)]'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--text-secondary)]/20 hover:border-[var(--text-primary)]/40'
            }`}
          >
            {selectedType === 'All' && (
              <motion.div
                layoutId="active-ornament-pill"
                className="absolute inset-0 rounded-full bg-[var(--accent-primary)]"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            <span className="relative z-10">All</span>
          </button>
          
          {ornamentTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`relative px-6 py-2 rounded-full text-sm font-body transition-colors ${
                selectedType === type
                  ? 'text-[var(--bg-card)]'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--text-secondary)]/20 hover:border-[var(--text-primary)]/40'
              }`}
            >
              {selectedType === type && (
                <motion.div
                  layoutId="active-ornament-pill"
                  className="absolute inset-0 rounded-full bg-[var(--accent-primary)]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              <span className="relative z-10">{ornamentTypeLabels[type] || type}</span>
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 font-body text-[var(--text-secondary)]">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
