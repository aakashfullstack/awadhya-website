import { products } from '@/lib/mock-data';
import ProductCard from '@/components/ui/ProductCard';

export const metadata = {
  title: 'Shop All Collections | Awadhya',
  description: 'Explore our full range of handcrafted jewelry and ornaments.',
};

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4">Shop All</h1>
        <p className="font-body text-[var(--text-secondary)] max-w-2xl mx-auto">
          Discover all our handcrafted pieces. Each ornament carries a meaning, ready to become part of your story.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
