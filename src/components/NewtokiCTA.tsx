'use client';

import { CATEGORIES, NEWTOKI_HISTORY } from '@/data/categories';
import type { HistoryEntry } from '@/data/categories';

/**
 * 뉴토끼 최신 주소 변경 내역 (최대 5건, 최신순)
 * — 빌드 시 fetch-categories.ts 가 크롤러 DB에서 자동 생성
 * — NEWTOKI_HISTORY 가 없으면 (API 미연결 빌드) 빈 배열로 fallback
 */
const ADDRESS_HISTORY: HistoryEntry[] = NEWTOKI_HISTORY ?? [];

/**
 * 뉴토끼 최신 주소를 categories.ts 에서 가져온다.
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
      {/* 주소 변경 내역 — 날짜만 표시 (도메인 텍스트 제거로 스팸 신호 방지) */}
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
              <span className="ntk-cta__history-label">주소 변경됨</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA 버튼 */}
      <a
        href={currentUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
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
    </section>
  );
}
