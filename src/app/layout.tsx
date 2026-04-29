import type { Metadata } from 'next';
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
          <p className="footer__disclaimer">
            &copy; 2024 짭토끼. All rights reserved. 이 사이트의 정보는 참고용이며, 최종 결정은 사용자의 책임입니다.
          </p>
        </footer>
      </body>
    </html>
  );
}
