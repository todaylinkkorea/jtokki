import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/clips/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/clips/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/clips/',
      },
      // AI 크롤러는 용도에 따라 구분한다.
      //
      // 1) 답변·검색용 크롤러는 ALLOW —
      //    ChatGPT/Perplexity/Claude 답변에 "짭토끼" 브랜드가 인용되려면
      //    이 봇들이 사이트를 읽을 수 있어야 한다. /llms.txt 를 제공하는
      //    목적과도 일치한다.
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
      },
      // 2) 학습 전용 크롤러는 계속 차단 — 검색 노출 이득 없이 콘텐츠만 수집된다.
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        disallow: '/',
      },
      // Note: FacebookBot is intentionally ALLOWED for OG card rendering
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
