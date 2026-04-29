import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { BunnyLogo } from '@/components/BunnyLogo';
import { TypingEffect } from '@/components/TypingEffect';
import { CategorySection } from '@/components/CategorySection';
import { FAQItem } from '@/components/FAQItem';

export const metadata: Metadata = {
  title: '짭토끼 - 실시간 검증된 사이트 모음 | 짭토끼 주소 바로가기',
  description:
    '짭토끼가 실시간으로 검증한 살아있는 사이트만 모았습니다. 웹툰, 드라마, 커뮤니티 등 카테고리별 Top 3 추천과 실시간 접속 상태를 확인하세요.',
  alternates: { canonical: SITE_URL },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '짭토끼에서 검증된 사이트는 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 HTTP 상태, SSL 인증서, 응답 속도를 자동으로 검증합니다. 단, 짭토끼는 외부 사이트의 콘텐츠 자체를 보증하지는 않으며, 접속 가능 여부와 기술적 안전성만을 확인합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 접속 상태는 어떻게 확인하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '각 사이트 옆에 표시된 상태 뱃지로 확인할 수 있습니다. LIVE는 현재 접속 가능, CHANGED는 주소 변경, DOWN은 접속 불가 상태를 의미합니다. 응답 속도(ms)도 함께 표시됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 주소가 변경되면 어떻게 알 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼의 모니터링 시스템이 도메인 변경을 자동으로 감지하여 즉시 업데이트합니다. 텔레그램 알림 서비스를 구독하면 즐겨찾기한 사이트의 주소 변경 시 실시간으로 새 주소를 안내받을 수 있습니다.',
      },
    },
  ],
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '짭토끼',
  url: SITE_URL,
  description: '실시간 검증된 사이트 모음 서비스',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />

      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="container">
          <div className="hero__top">
            <div className="hero__logo">
              <BunnyLogo size={42} />
              <span className="hero__logo-text">짭토끼</span>
            </div>
            <div className="hero__live-badge">
              <span className="pulse-dot" />
              실시간 모니터링 중
            </div>
          </div>

          <h1 className="hero__tagline">
            진짜 <strong>살아있는 사이트만,</strong>
          </h1>
          <p className="hero__tagline-sub">
            <TypingEffect text="짭토끼가 검증합니다" highlightWord="검증" />
          </p>
        </div>
      </header>

      {/* ===== CATEGORIES (search + grid) ===== */}
      <main className="categories-section">
        <div className="container">
          <CategorySection />
        </div>
      </main>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section">
        <div className="cta-banner">
          <span className="cta-banner__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13"
                stroke="#34d399"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="#34d399"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="cta-banner__text">
            <p className="cta-banner__title">
              텔레그램 채널에서 새로운 알림을 가장 먼저 받아보세요!
            </p>
          </div>
          <button className="cta-banner__btn">알림 받기</button>
        </div>
      </section>

      {/* ===== SEO ARTICLE SECTION (light background) ===== */}
      <section className="seo-article-section">
        <div className="seo-article-layout">
          {/* Sidebar TOC */}
          <aside className="article-toc">
            <p className="article-toc__title">목차</p>
            <ul className="article-toc__list">
              <li><a href="#trust">검증 기준</a></li>
              <li><a href="#monitoring">실시간 모니터링</a></li>
              <li><a href="#protection">사용자 보호</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </aside>

          {/* Article Body */}
          <div className="article-content">
            <h2 id="trust">왜 짭토끼를 신뢰해야 할까요?</h2>

            <h3>엄격한 검증 절차</h3>
            <p>
              짭토끼는 등록된 모든 사이트에 대해 자동화된 헬스체크를 수행합니다.
              단순히 접속 가능 여부만 확인하는 것이 아니라,
              HTTP 상태 코드, SSL 인증서 유효성, 응답 속도까지 종합적으로 분석하여
              실제로 정상 운영 중인 사이트만을 선별합니다.
            </p>
            <ul>
              <li>✅ <strong>HTTP 상태 검증</strong> — 200, 301, 302 등 상태 코드를 분석하여 사이트의 실제 운영 상태를 판별합니다.</li>
              <li>🔒 <strong>SSL 인증서 확인</strong> — HTTPS 적용 여부와 인증서 유효성을 검증하여 보안 수준을 확인합니다.</li>
              <li>⚡ <strong>응답 속도 측정</strong> — 서버 응답 시간(ms)을 실시간으로 측정하여 사이트 품질을 평가합니다.</li>
            </ul>

            <h3 id="monitoring">실시간 모니터링 시스템</h3>
            <p>
              짭토끼의 자동화된 모니터링 시스템은 등록된 사이트를 주기적으로 점검합니다.
              도메인이 변경(301/302 리다이렉트)되면 자동으로 감지하여
              사용자가 항상 최신 접속 주소를 확인할 수 있도록 합니다.
              사이트가 다운되면 즉시 상태가 업데이트되어 죽은 링크를 클릭하는 불편을 방지합니다.
            </p>

            <h3 id="protection">사용자 보호</h3>
            <p>
              인터넷에서 검색으로 찾은 사이트 주소는 피싱이나 악성코드 유포 사이트로
              연결될 위험이 있습니다. 짭토끼는 검증된 주소만을 제공하여
              사용자가 안전하게 원하는 사이트에 접속할 수 있도록 돕습니다.
              또한 각 카테고리별 Top 3만을 엄선하여 추천하므로,
              수십 개의 링크 중에서 직접 골라야 하는 번거로움이 없습니다.
            </p>

            <h3 id="faq">자주 묻는 질문</h3>
            <div className="faq-list">
              <FAQItem question="짭토끼에서 검증된 사이트는 안전한가요?" defaultOpen>
                짭토끼는 HTTP 상태, SSL 인증서, 응답 속도를 자동으로 검증합니다.
                단, 짭토끼는 외부 사이트의 콘텐츠 자체를 보증하지는 않으며,
                접속 가능 여부와 기술적 안전성만을 확인합니다.
              </FAQItem>
              <FAQItem question="사이트 접속 상태는 어떻게 확인하나요?">
                각 사이트 옆에 표시된 상태 뱃지로 확인할 수 있습니다.
                🟢 LIVE는 현재 접속 가능, 🟡 CHANGED는 주소 변경,
                🔴 DOWN은 접속 불가 상태를 의미합니다.
                응답 속도(ms)도 함께 표시되어 사이트의 현재 상태를 한눈에 파악할 수 있습니다.
              </FAQItem>
              <FAQItem question="사이트 주소가 변경되면 어떻게 알 수 있나요?">
                짭토끼의 모니터링 시스템이 도메인 변경을 자동으로 감지하여 즉시 업데이트합니다.
                텔레그램 알림 서비스를 구독하면 즐겨찾기한 사이트의 주소 변경 시
                실시간으로 새 주소를 안내받을 수 있습니다.
              </FAQItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
