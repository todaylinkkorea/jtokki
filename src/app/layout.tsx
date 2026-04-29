import type { Metadata } from 'next';
import { GITHUB_URL, FACEBOOK_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '짭토끼 - 실시간 검증 사이트 모음',
    template: '%s | 짭토끼',
  },
  description:
    '짭토끼가 실시간으로 검증한 살아있는 사이트만 모았습니다. 웹툰, 드라마, 커뮤니티 등 카테고리별 Top 3 추천.',
  keywords: ['짭토끼', '짭토끼 주소', '짭토끼 바로가기', '짭토끼 사이트', '사이트 모음', '링크 모음'],
  openGraph: {
    title: '짭토끼 - 실시간 검증 사이트 모음',
    description: '죽은 링크 없는, 진짜 살아있는 사이트만. 짭토끼가 실시간으로 검증합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}

        {/* Footer — shared across pages */}
        <footer className="footer">
          <nav className="footer__links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">문의하기</a>
            <a href="#">제휴 안내</a>
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
            &copy; 2024 짭토끼. All rights reserved. 이 사이트의 정보는 참고용이며, 최종 결정은 사용자의 책임입니다.
          </p>
        </footer>
      </body>
    </html>
  );
}

