'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';

/**
 * 뉴토끼 최신 주소 변경 내역 (최대 3건, 최신순)
 * — categories.ts 업데이트 시 여기도 함께 수정
 */
const ADDRESS_HISTORY = [
  { date: '2026-05-11', from: 'newtoki322.com', to: 'ntk01.com' },
  { date: '2026-04-28', from: 'newtoki315.com', to: 'newtoki322.com' },
  { date: '2026-04-14', from: 'newtoki308.com', to: 'newtoki315.com' },
] as const;

/**
 * 뉴토끼 최신 주소를 categories.ts (크롤러가 갱신) 에서 가져온다.
 * categories.ts 는 prebuild 시 크롤러 API 에서 받아 자동 생성되므로
 * 배포 시점의 최신 주소가 자동 반영된다.
 */
function getNewtokiUrl(): string {
  const webtoonCat = CATEGORIES.find((c) => c.id === 'webtoon');
  const newtoki = webtoonCat?.sites.find((s) => s.name === '뉴토끼');
  return newtoki?.url ?? 'https://ntk01.com';
}

export function NewtokiCTA() {
  const currentUrl = getNewtokiUrl();

  return (
    <section className="ntk-cta" aria-label="뉴토끼 최신 주소 안내">
      {/* 주소 변경 내역 */}
      <div className="ntk-cta__history">
        <p className="ntk-cta__history-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          최근 주소 변경 내역
        </p>
        <ul className="ntk-cta__history-list">
          {ADDRESS_HISTORY.map((entry) => (
            <li key={entry.date} className="ntk-cta__history-item">
              <span className="ntk-cta__history-date">{entry.date}</span>
              <span className="ntk-cta__history-change">
                <span className="ntk-cta__history-old">{entry.from}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                <span className="ntk-cta__history-new">{entry.to}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA 버튼 */}
      <a
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ntk-cta__button"
        id="newtoki-cta-button"
      >
        <span className="ntk-cta__button-icon">🐰</span>
        뉴토끼 최신 주소 바로가기
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>

      {/* 짭토끼 메인 링크 */}
      <p className="ntk-cta__sub">
        또는 <Link href="/">짭토끼 메인 페이지</Link>에서 전체 사이트 실시간 상태를 확인하세요
      </p>
    </section>
  );
}
