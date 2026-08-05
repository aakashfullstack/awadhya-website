import { notFound } from 'next/navigation';
import Link from 'next/link';
import { collections, products } from '@/lib/mock-data';
import CollectionPageClient from './CollectionPageClient';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return {
      title: 'Collection Not Found - Awadhya',
    };
  }

  return {
    title: `${collection.name} Collection - Awadhya | Meaningful Jewelry`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter((p) => p.collectionId === collection.id);
  const ornamentTypes = Array.from(new Set(collectionProducts.map((p) => p.ornamentType)));

  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      {/* Header */}
      <section className="px-4 py-12 md:py-16 text-center max-w-4xl mx-auto">
        <Link 
          href="/#collections" 
          className="inline-block mb-8 text-sm font-body text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          &larr; Back to Collections
        </Link>
        <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-2">
          {collection.name}
        </h1>
        <p className="font-devanagari text-xl text-[var(--accent-primary)] mb-4">
          {collection.nameDevanagari}
        </p>
        <p className="font-body italic text-[var(--text-secondary)] mb-6">
          &ldquo;{collection.meaning}&rdquo;
        </p>
        <p className="font-body text-[var(--text-secondary)] max-w-2xl mx-auto">
          {collection.description}
        </p>
      </section>

      {/* Grid and Filters */}
      <section className="px-4 pb-20 md:pb-32 max-w-7xl mx-auto">
        <CollectionPageClient 
          products={collectionProducts} 
          ornamentTypes={ornamentTypes} 
        />
      </section>
    </main>
  );
}
