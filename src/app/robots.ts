import { MetadataRoute } from 'next';

const baseUrl = 'https://www.awadhya.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any private routes you don't want indexed here
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
