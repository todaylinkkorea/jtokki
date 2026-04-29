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
      name: '검증된 사이트는 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 짭토끼의 엄격한 기준을 통과했습니다. 모든 사이트는 실시간 모니터링을 통해 접속 상태와 안전성을 지속적으로 검증합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 상태는 어떻게 확인하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실시간으로 상태와 응답 속도가 업데이트됩니다. LIVE, CHANGED, DOWN 상태를 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 상태는 확인하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실시간 모니터링과 사용자 신고를 통해 24시간 사이트 상태를 확인합니다.',
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
              <li><a href="#trust">엄격한 검증 절차</a></li>
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
              짭토끼에서는 진중한 얼은 검증 절차가 없고 검증된 사이트 안을 동차하여의 역할을 확인해
              보여 사용자 보호를 꾀고자, 뛰한 기준을 거뚱합니다.
            </p>
            <ul>
              <li>🔺 <strong>검증된 사이트</strong>는 독자로 진짜 살아있는 사이트의 안을 검증합니다.</li>
              <li>◎ <strong>실시간 모니터링</strong> : 실시간 배팅는 즉자로 드러워어 상태를 돌겨왔습니다.</li>
              <li>❓ <strong>사용자 사이트</strong>는 관리자의 실내가 5분 사이팩드 받으며, 특도 분기의 막격을 얻어서
              응답 속도가 가능합니다.</li>
            </ul>

            <h3 id="faq">FAQ</h3>
            <div className="faq-list">
              <FAQItem question="Q: 검증된 사이트는 안전한가요?" defaultOpen>
                A: 네, 짭토끼의 엄격한 기준을 통과했습니다.
              </FAQItem>
              <FAQItem question="Q: 사이트 상태는 어떻게 확인하나요?">
                A: 실시간으로 상태와 응답 속도가 업데이트됩니다.
              </FAQItem>
              <FAQItem question="Q: 사이트 상태는 확인하나요?">
                A: 실시간 모니터링과 사용자 신고를 통해 확인합니다.
              </FAQItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
