'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const DISMISSED_KEY = 'newtoki_modal_dismissed';
const DISMISS_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export function NewtokiModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DISMISSED_KEY);
      if (raw) {
        const ts = parseInt(raw, 10);
        if (Date.now() - ts < DISMISS_DURATION_MS) return;
      }
    } catch {
      // localStorage unavailable — show modal anyway
    }

    // Small delay for page paint
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="ntk-modal-backdrop" onClick={dismiss}>
      <div
        className="ntk-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ntk-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="ntk-modal__close"
          onClick={dismiss}
          aria-label="닫기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        {/* Warning icon */}
        <div className="ntk-modal__icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="12" y1="9" x2="12" y2="13" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="0.5" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="ntk-modal__title" id="ntk-modal-title">
          뉴토끼 주소를 찾으시나요?
        </h2>

        {/* Warning message */}
        <p className="ntk-modal__desc">
          인터넷에는 <strong>피싱 사이트</strong>와 <strong>가짜 뉴토끼</strong>가
          매우 많습니다.<br />
          잘못 접근하면 <span className="ntk-modal__danger">개인정보 유출</span>이나{' '}
          <span className="ntk-modal__danger">악성코드 감염</span> 등
          심각한 위험에 처할 수 있습니다.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="ntk-modal__cta"
          onClick={dismiss}
        >
          <span className="ntk-modal__cta-icon">🐰</span>
          짭토끼가 검증한 안전한 링크 확인하러 가기
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Secondary dismiss */}
        <button className="ntk-modal__dismiss" onClick={dismiss}>
          괜찮아요, 계속 읽을게요
        </button>
      </div>
    </div>
  );
}
