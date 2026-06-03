'use client';

import { useEffect, useRef, useState } from 'react';
import { CATEGORIES, NEWTOKI_HISTORY } from '@/data/categories';
import type { HistoryEntry } from '@/data/categories';

/**
 * 뉴토끼 최신 주소 변경 내역 (최대 5건, 최신순)
 * — 빌드 시 fetch-categories.ts 가 크롤러 DB에서 자동 생성
 * — NEWTOKI_HISTORY 가 없으면 (API 미연결 빌드) 빈 배열로 fallback
 */
const ADDRESS_HISTORY: HistoryEntry[] = NEWTOKI_HISTORY ?? [];

/**
 * 홍보 동영상 목록 (public/clips/ 아래에 영상 파일을 추가하세요)
 * Ad Blocker 우회를 위해 디렉토리명은 clips, 파일명은 clip*.mp4/webm으로 지정합니다.
 * webm 포맷이 최우선 재생되며, fallback으로 mp4가 사용됩니다.
 */
const PROMO_CLIPS = [
  { id: 'clip1', mp4: '/clips/clip1.mp4', webm: '/clips/clip1.webm' },
  { id: 'clip2', mp4: '/clips/clip2.mp4', webm: '/clips/clip2.webm' },
  { id: 'clip3', mp4: '/clips/clip3.mp4', webm: '/clips/clip3.webm' },
  { id: 'clip4', mp4: '/clips/clip4.mp4', webm: '/clips/clip4.webm' },
] as const;

// ⚠️ 특정 영상으로 완전히 고정하고 싶을 때 여기에 ID(예: 'clip1')를 입력하세요. (null 이면 랜덤 로테이션)
const FORCED_CLIP_ID: string | null = null;

// 영상 클릭 시 이동할 공통 링크
const PROMO_TARGET_URL = "https://cu2day.com/?utm_source=jtokki&utm_medium=referral";

/**
 * Plausible 커스텀 이벤트 전송용 안전 헬퍼 함수
 */
const sendPlausible = (eventName: string, props: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props });
  }
};

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeClip, setActiveClip] = useState<{ id: string; mp4: string; webm: string } | null>(null);
  const [shouldLoadClip, setShouldLoadClip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isBot, setIsBot] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 컴포넌트 마운트 시 보여줄 영상 결정, 봇 여부 판별 및 통계 콘솔 도구 등록
  useEffect(() => {
    setMounted(true);

    // 1. User-Agent 기반 구글 봇 및 크롤러 탐지
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase();
      const botPatterns = [
        'googlebot', 'googlebot-video', 'yeti', 'bingbot', 'baidu',
        'facebookexternalhit', 'twitterbot', 'ia_archiver', 'crawler',
        'spider', 'slurp', 'sogou', 'exabot'
      ];
      const matched = botPatterns.some(pattern => ua.includes(pattern));
      setIsBot(matched);
    }

    // 2. 홍보 영상 선정
    if (FORCED_CLIP_ID) {
      const forced = PROMO_CLIPS.find(clip => clip.id === FORCED_CLIP_ID);
      if (forced) setActiveClip(forced);
    } else {
      // 랜덤 로테이션
      const randomIndex = Math.floor(Math.random() * PROMO_CLIPS.length);
      setActiveClip(PROMO_CLIPS[randomIndex]);
    }

    // 3. 개발자 도구 콘솔용 클릭률 확인 헬퍼 함수 등록
    (window as any).showPromoStats = () => {
      try {
        const stats = JSON.parse(localStorage.getItem('promo_stats') || '{}');
        const formatted = Object.entries(stats).map(([id, data]: any) => {
          const ctr = data.views > 0 ? ((data.clicks / data.views) * 100).toFixed(2) + '%' : '0%';
          return { '영상 ID': id, '노출수': data.views, '클릭수': data.clicks, '클릭률(CTR)': ctr };
        });
        console.table(formatted);
      } catch (e) {
        console.error('통계 데이터를 불러오지 못했습니다.', e);
      }
    };
  }, []);

  // 뷰포트 진입 감지 (노출 통계 수집 및 지연 로딩 트리거)
  useEffect(() => {
    if (!activeClip || isBot) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadClip(true);
          
          // 노출(View) 통계 로컬 저장
          try {
            const stats = JSON.parse(localStorage.getItem('promo_stats') || '{}');
            if (!stats[activeClip.id]) stats[activeClip.id] = { views: 0, clicks: 0 };
            stats[activeClip.id].views += 1;
            localStorage.setItem('promo_stats', JSON.stringify(stats));
          } catch (e) {}

          // Plausible Analytics 노출 이벤트 전송
          sendPlausible('Promo View', { promo_id: activeClip.id, page: '/newtoki' });

          observer.disconnect();
        }
      },
      { rootMargin: '150px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [activeClip, isBot]);

  // 클릭 핸들러 (클릭 통계 수집 및 Plausible 이벤트)
  const handlePromoClick = () => {
    if (!activeClip) return;
    try {
      const stats = JSON.parse(localStorage.getItem('promo_stats') || '{}');
      if (!stats[activeClip.id]) stats[activeClip.id] = { views: 0, clicks: 0 };
      stats[activeClip.id].clicks += 1;
      localStorage.setItem('promo_stats', JSON.stringify(stats));
    } catch (e) {}

    sendPlausible('Promo Click', { promo_id: activeClip.id, page: '/newtoki' });
  };

  // 구글 봇이거나 SSR/하이드레이션 이전 상태인 경우 비디오 요소 노출 완전 거부
  const showVideoAd = mounted && !isBot;

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

      {/* 영상 광고 배너 구역 - 크롤러 봇에 대해 정적 대체 이미지 제공 및 LCP/CLS 방지 */}
      <div 
        ref={containerRef} 
        className="ntk-cta__promo-container"
        style={{ aspectRatio: '16/9' }}
      >
        {showVideoAd ? (
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="ntk-cta__promo-btn-trigger"
            aria-label="AI 동영상 광고 재생"
          >
            <img 
              src="/images/cu2day_banner.webp" 
              alt="cu2day AI Video Feed" 
              className="ntk-cta__promo-img"
            />
            <span className="ntk-cta__promo-play-overlay">
              <span className="ntk-cta__promo-play-icon">▶</span>
              <span className="ntk-cta__promo-play-text">AI 비디오 재생</span>
            </span>
            <span className="ntk-cta__promo-badge">SPONSOR</span>
          </button>
        ) : (
          // 구글 봇 또는 SSR 상태에서는 비디오 유도 없이 깨끗한 대체 이미지 카드만 렌더링
          <div className="ntk-cta__promo-static">
            <img 
              src="/images/cu2day_banner.webp" 
              alt="cu2day AI Video Feed" 
              className="ntk-cta__promo-img"
            />
            <span className="ntk-cta__promo-badge">SPONSOR</span>
          </div>
        )}
      </div>

      {/* cu2day 홍보 링크 */}
      <p className="ntk-cta__sub">
        <a href="https://cu2day.com/?utm_source=jtokki&utm_medium=referral" target="_blank" rel="sponsored noopener noreferrer">
          매일 업데이트되는 세상 모든 AI 영상 cu2day.com
        </a>
      </p>

      {/* 비디오 모달 (구글 봇 및 SSR 렌더링에서 완벽 차단) */}
      {showVideoAd && isModalOpen && activeClip && (
        <div className="ntk-cta__modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="ntk-cta__modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="ntk-cta__modal-close" 
              onClick={() => setIsModalOpen(false)}
              aria-label="닫기"
            >
              ✕
            </button>
            <a 
              href={PROMO_TARGET_URL} 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              onClick={handlePromoClick}
              className="ntk-cta__modal-video-link"
            >
              <video
                className="ntk-cta__modal-video"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              >
                <source src={activeClip.webm} type="video/webm" />
                <source src={activeClip.mp4} type="video/mp4" />
              </video>
              <span className="ntk-cta__modal-badge">
                SPONSOR - AI 영상 바로가기 (cu2day)
              </span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
