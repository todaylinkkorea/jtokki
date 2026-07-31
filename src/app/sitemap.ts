import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

const TODAY = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/newtoki`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/jtokki`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      // 본문이 날짜-동적이지 않은 페이지는 실제 콘텐츠 수정일(JSON-LD dateModified)과 일치시킨다
      url: `${SITE_URL}/about`,
      lastModified: '2026-05-11',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ntk01`,
      lastModified: '2026-05-23',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: '2026-05-11',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/webtoon-site`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/webtoon-free`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-webtoon`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/newtoki-address`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/jtokki-address`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/jtokki-bypass`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
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
