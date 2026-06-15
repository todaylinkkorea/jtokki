import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/newtoki`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/jtokki`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: '2026-06-15',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ntk01`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: '2026-06-15',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/webtoon-site`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/webtoon-free`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-webtoon`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/newtoki-address`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/jtokki-address`,
      lastModified: '2026-06-15',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: '2026-04-28',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: '2026-04-28',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
