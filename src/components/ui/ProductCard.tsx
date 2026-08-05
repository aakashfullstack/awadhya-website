'use client';

import Link from 'next/link';
import { Heart, Star, Camera } from 'lucide-react';
import { useState } from 'react';
import { formatPrice, getDiscountPercent } from '@/lib/mock-data';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = hasDiscount ? getDiscountPercent(product.price, product.compareAtPrice!) : 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-primary)] hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] bg-[var(--bg-elevated)] flex items-center justify-center overflow-hidden">
        <div className="text-[var(--text-muted)] opacity-30 group-hover:scale-110 transition-transform duration-500">
          <Camera className="w-12 h-12" strokeWidth={1} />
        </div>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-xs font-semibold px-2.5 py-1 rounded-full font-body">
            New
          </span>
        )}

        {/* Trending badge */}
        {product.isTrending && !product.isNew && (
          <span className="absolute top-3 left-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold px-2.5 py-1 rounded-full font-body">
            Trending
          </span>
        )}

        {/* Wishlist heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted
                ? 'fill-[var(--error)] text-[var(--error)]'
                : 'text-[var(--text-secondary)]'
            }`}
          />
        </button>

        {/* Discount badge */}
        {hasDiscount && (
          <span className="absolute bottom-3 left-3 bg-[var(--accent-secondary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="p-4">
        <p className="text-xs text-[var(--accent-primary)] uppercase tracking-wider font-body mb-1">
          {product.collectionName}
        </p>
        <h3 className="font-body font-medium text-[var(--text-primary)] text-sm leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-body font-bold text-[var(--text-primary)]">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="font-body text-xs text-[var(--text-muted)] line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[var(--rating)] text-[var(--rating)]'
                    : 'text-[var(--border)]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--text-muted)] font-body">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
