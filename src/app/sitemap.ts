import { MetadataRoute } from 'next';
import { products, collections } from '@/lib/mock-data';

const baseUrl = 'https://www.awadhya.in';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const staticRoutes = [
    '',
    '/shop',
    '/collections',
    '/about',
    '/journal',
    '/contact',
    '/track',
    '/policies/privacy',
    '/policies/returns',
    '/policies/shipping',
    '/policies/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Collection Routes
  const collectionRoutes = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Product Routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes];
}
