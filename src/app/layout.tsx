import type { Metadata } from 'next';
import { SITE_URL, GITHUB_URL, FACEBOOK_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '짭토끼 - 실시간 검증 사이트 모음',
    template: '%s | 짭토끼',
  },
  description:
    '짭토끼가 실시간으로 검증한 살아있는 사이트만 모았습니다. 웹툰, 드라마, 커뮤니티 등 카테고리별 Top 3 추천과 실시간 접속 상태를 확인하세요.',
  keywords: ['짭토끼', '짭토끼 주소', '짭토끼 바로가기', '짭토끼 사이트', '사이트 모음', '링크 모음'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '짭토끼 - 실시간 검증 사이트 모음',
    description:
      '죽은 링크 없는, 진짜 살아있는 사이트만 모았습니다. 짭토끼가 실시간 헬스체크로 검증한 안전한 사이트 주소를 확인하세요.',
    siteName: '짭토끼',
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: '짭토끼 로고',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '짭토끼 - 실시간 검증 사이트 모음',
    description:
      '죽은 링크 없는, 진짜 살아있는 사이트만 모았습니다. 짭토끼가 실시간 헬스체크로 검증한 안전한 사이트 주소를 확인하세요.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: { index: true, follow: true },
};

/** Sitewide Organization schema for entity SEO */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '짭토끼',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: '실시간 헬스체크로 검증된 안전한 사이트 주소를 제공하는 링크 디렉토리 서비스',
  sameAs: [FACEBOOK_URL, GITHUB_URL],
  foundingDate: '2024-01-01',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Organization schema — sitewide entity SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Privacy-friendly analytics by Plausible — with custom event tracking */}
        <script async src="https://plausible.taskagenticai.com/js/pa-gicDJpf9v7C58om7zemkU.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              // Init Plausible
              `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`,
              // Track outbound site clicks
              `document.addEventListener('click',function(e){`,
              `  var a=e.target.closest('a.site-row__name');`,
              `  if(a){plausible('Site Click',{props:{site:a.textContent.trim(),url:a.href,category:a.closest('.category-card')?.querySelector('.card__title')?.textContent.trim()||'unknown'}})}`,
              `});`,
              // Track favorite toggles
              `document.addEventListener('click',function(e){`,
              `  var b=e.target.closest('.card__item-fav');`,
              `  if(b){var name=b.closest('.site-row')?.querySelector('.site-row__name')?.textContent.trim()||'unknown';`,
              `  plausible('Favorite Toggle',{props:{site:name,action:b.classList.contains('active')?'remove':'add'}})}`,
              `});`,
              // Track CTA button clicks
              `document.addEventListener('click',function(e){`,
              `  var c=e.target.closest('.cta-banner__btn,.article-cta__link');`,
              `  if(c){plausible('CTA Click',{props:{text:c.textContent.trim(),page:location.pathname}})}`,
              `});`,
              // Track social link clicks
              `document.addEventListener('click',function(e){`,
              `  var s=e.target.closest('.footer__social-link');`,
              `  if(s){plausible('Social Click',{props:{platform:s.getAttribute('aria-label')||'unknown'}})}`,
              `});`,
            ].join('\n'),
          }}
        />
      </head>
      <body>
        {children}

        {/* Footer — shared across pages */}
        <footer className="footer">
          {/* Internal links to content pages — resolves orphan page issue */}
          <nav className="footer__content-links" aria-label="콘텐츠 바로가기">
            <a href="/about">짭토끼 소개</a>
            <a href="/guide">이용 가이드</a>
            <a href="/newtoki">뉴토끼 주소</a>
            <a href="/newtoki-address">뉴토끼 새주소</a>
            <a href="/ntk01">ntk01 주소</a>
            <a href="/webtoon-site">웹툰 사이트</a>
            <a href="/webtoon-free">웹툰 무료</a>
            <a href="/free-webtoon">무료 웹툰</a>
            <a href="/jtokki-address">짭토끼 주소</a>
          </nav>

          <nav className="footer__links">
            <a href="/terms">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
            <a href="https://github.com/todaylinkkorea/jtokki/issues" target="_blank" rel="noopener noreferrer">문의하기</a>
          </nav>

          {/* Social links */}
          <div className="footer__social">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="짭토끼 GitHub"
              className="footer__social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="짭토끼 Facebook"
              className="footer__social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

          </div>

          <p className="footer__disclaimer">
          &copy; 2024-2026 짭토끼. All rights reserved. 이 사이트의 정보는 참고용이며, 최종 결정은 사용자의 책임입니다.
        </p>
        </footer>
      </body>
    </html>
  );
}
