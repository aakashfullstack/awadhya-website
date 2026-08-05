'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { collections, products, tabConfig } from '@/lib/mock-data';
import ProductCard from '@/components/ui/ProductCard';

export default function CollectionFilter() {
  const [activeTabId, setActiveTabId] = useState('tab-category');
  const sortedTabs = [...tabConfig].sort((a, b) => a.order - b.order);
  const activeTab = sortedTabs.find((t) => t.id === activeTabId) ?? sortedTabs[0];

  // Determine products to show for the active tab
  function getTabProducts() {
    switch (activeTab.type) {
      case 'all':
        return products;
      case 'trending':
        return products.filter((p) => p.isTrending);
      case 'ornament':
        return products.filter((p) => p.ornamentType === activeTab.ornamentType);
      default:
        return [];
    }
  }

  const showCards = activeTab.type === 'category';
  const tabProducts = showCards ? [] : getTabProducts();

  return (
    <section id="collections" className="pt-0 pb-6 md:pt-0 md:pb-8 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-2 text-center">
          Our Collections
        </h2>
        <div className="w-24 h-[2px] bg-[var(--accent-primary)] rounded-full opacity-60" />
      </div>

      {/* Unified Tab Row */}
      <div className="flex overflow-x-auto scrollbar-hide pb-4 mb-10 w-full justify-start md:justify-center gap-2 md:gap-3 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <LayoutGroup>
          {sortedTabs.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-5 py-2.5 min-h-[44px] rounded-full text-sm md:text-base font-body whitespace-nowrap snap-center transition-colors duration-300 ${
                  isActive
                    ? 'text-[var(--bg-card)] font-semibold'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[var(--accent-primary)] rounded-full z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {showCards ? (
          /* ——— Category Tab: 6 Collection Cards ——— */
          <motion.div
            key="category-cards"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-6 transition-all duration-300 hover:border-[var(--accent-primary)] hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-elevated)] text-2xl">
                    {collection.iconEmoji}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] leading-tight flex items-center flex-wrap gap-x-2">
                      {collection.name}{' '}
                      <span className="font-devanagari text-base text-[var(--accent-primary)] font-normal">
                        · {collection.nameDevanagari}
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="mb-10 flex-grow">
                  <p className="font-body text-sm text-[var(--text-secondary)] italic">
                    &ldquo;{collection.meaning}&rdquo;
                  </p>
                </div>

                <div className="mt-auto absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center font-body font-medium text-sm text-[var(--accent-primary)] group-hover:underline underline-offset-4">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        ) : (
          /* ——— All / Trending / Ornament Tabs: Product Grid ——— */
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {tabProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {tabProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-body text-lg text-[var(--text-muted)]">
                  No products found in this category yet.
                </p>
                <p className="font-body text-sm text-[var(--text-muted)] mt-2">
                  Check back soon — new pieces are always in the works.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
