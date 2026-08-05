import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, Heart, Quote } from 'lucide-react';
import { products, formatPrice, getDiscountPercent } from '@/lib/mock-data';
import ProductCard from '@/components/ui/ProductCard';
import ImageCarousel from '@/components/product/ImageCarousel';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: `${product.name} | Awadhya`,
    description: product.meaningCopy,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.collectionId === product.collectionId && p.id !== product.id)
    .slice(0, 4);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = hasDiscount ? getDiscountPercent(product.price, product.compareAtPrice!) : 0;

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb / Back */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors mb-6 md:mb-10 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Left: Image Carousel */}
          <div className="w-full">
            <ImageCarousel productName={product.name} ornamentType={product.ornamentType} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[var(--accent-primary)] font-body font-semibold mb-2 block">
                {product.collectionName}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[var(--rating)] text-[var(--rating)]'
                          : 'text-[var(--border)]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-body text-[var(--text-muted)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-body text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <>
                    <span className="font-body text-xl md:text-2xl text-[var(--text-muted)] line-through">
                      {formatPrice(product.compareAtPrice!)}
                    </span>
                    <span className="bg-[var(--accent-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {product.meaningCopy && (
                <div className="mb-8 bg-[var(--bg-elevated)] p-6 rounded-2xl border border-[var(--border)] relative overflow-hidden group">
                  <Quote className="absolute -bottom-4 -right-4 w-24 h-24 text-[var(--border)] opacity-20 group-hover:opacity-40 transition-opacity" />
                  <p className="font-body text-[15px] md:text-base text-[var(--text-secondary)] italic leading-relaxed relative z-10">
                    "{product.meaningCopy}"
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 w-full sm:w-auto bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-full px-8 py-4 font-semibold font-body text-lg transition-all hover:shadow-[0_0_20px_var(--accent-primary)] hover:scale-[1.02] active:scale-[0.98]">
                  Add to Cart
                </button>
                <button className="hidden sm:flex w-16 h-16 shrink-0 rounded-full border border-[var(--border)] items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors" aria-label="Add to Wishlist">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="sm:hidden w-full flex items-center justify-center gap-2 border border-[var(--border)] rounded-full px-8 py-4 font-semibold font-body text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors">
                  <Heart className="w-5 h-5" /> Add to Wishlist
                </button>
              </div>
              <button className="w-full bg-transparent border-2 border-[var(--text-primary)] text-[var(--text-primary)] rounded-full px-8 py-4 font-semibold font-body text-lg transition-all hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">
                Buy it now
              </button>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-body font-medium text-[var(--text-primary)] py-6 border-t border-[var(--border)]">
              <span className="flex items-center gap-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] px-4 py-2 rounded-full hover:border-[var(--accent-primary)] transition-colors cursor-default">
                🚚 Free Shipping on ₹599+
              </span>
              <span className="flex items-center gap-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] px-4 py-2 rounded-full hover:border-[var(--accent-primary)] transition-colors cursor-default">
                🔄 7-day Returns
              </span>
              <span className="flex items-center gap-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] px-4 py-2 rounded-full hover:border-[var(--accent-primary)] transition-colors cursor-default">
                🇮🇳 Handmade in India
              </span>
              <span className="flex items-center gap-1.5 bg-[var(--bg-elevated)] border border-[var(--border)] px-4 py-2 rounded-full hover:border-[var(--accent-primary)] transition-colors cursor-default">
                💳 COD Available
              </span>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="pt-16 border-t border-[var(--border)]">
            <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-8 text-center">
              You May Also Like
            </h2>
            
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {relatedProducts.map((p) => (
                <div key={p.id} className="min-w-[280px] lg:min-w-0 snap-start">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
