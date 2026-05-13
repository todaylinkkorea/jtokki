import { CATEGORIES } from '@/data/categories';

/**
 * 뉴토끼 최신 주소 바로가기 인라인 버튼 (서버 컴포넌트)
 * — callout 내부에 삽입하여 사용
 * — categories.ts (크롤러 prebuild 데이터)에서 URL을 동적으로 참조
 */
export function NewtokiInlineButton() {
  const webtoonCat = CATEGORIES.find((c) => c.id === 'webtoon');
  const newtoki = webtoonCat?.sites.find((s) => s.name === '뉴토끼');
  const url = newtoki?.url ?? '/';

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ntk-cta__button"
        style={{ marginTop: 16 }}
        id="newtoki-inline-cta"
      >
        <span className="ntk-cta__button-icon">🐰</span>
        뉴토끼 최신 주소 바로가기
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 8, marginBottom: 0 }}>
        마지막 주소 변경: 2026-05-11
      </p>
    </>
  );
}
