import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';

export const metadata: Metadata = {
  title: '짭토끼 가이드 - 실시간 검증 사이트 모음 이용 방법',
  description:
    '짭토끼의 실시간 검증 시스템, Top 3 선정 기준, 도메인 변경 알림 서비스에 대해 자세히 알아보세요. 짭토끼 주소 바로가기 및 이용 가이드.',
  alternates: { canonical: `${SITE_URL}/guide` },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '짭토끼 — 실시간 검증 사이트 모음의 새로운 기준',
  description: '짭토끼의 실시간 모니터링 시스템과 검증 기준에 대해 알아보세요.',
  author: { '@type': 'Organization', name: '짭토끼' },
  publisher: { '@type': 'Organization', name: '짭토끼' },
  datePublished: '2026-04-28',
  dateModified: '2026-04-28',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '짭토끼 가이드', item: `${SITE_URL}/guide` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '짭토끼는 어떤 서비스인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 다양한 카테고리의 인기 사이트들을 실시간으로 모니터링하고, 현재 정상적으로 접속 가능한 사이트만을 선별하여 제공하는 검증된 링크 디렉토리 서비스입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 주소가 변경되면 어떻게 알 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼의 텔레그램 알림 서비스를 구독하시면, 즐겨찾기한 사이트의 주소가 변경될 때 실시간으로 알림을 받으실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: 'Top 3 선정 기준은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '서버 응답 속도, 최근 30일 업타임, 사용자 추천수를 종합적으로 반영하여 각 카테고리별 상위 3개 사이트를 선정합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '실시간 모니터링은 어떻게 작동하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 자동화된 헬스체크 시스템을 통해 등록된 모든 사이트의 접속 상태, 응답 속도, 도메인 변경 여부를 평균 5분 간격으로 확인합니다.',
      },
    },
  ],
};

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header nav */}
      <header className="hero" style={{ padding: '32px 20px 24px' }}>
        <div className="container">
          <div className="hero__top">
            <Link href="/" className="hero__logo">
              <BunnyLogo size={42} />
              <span className="hero__logo-text">짭토끼</span>
            </Link>
            <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              ← 홈으로
            </Link>
          </div>
        </div>
      </header>

      <div className="article-layout">
        {/* Sidebar TOC */}
        <aside className="article-toc">
          <p className="article-toc__title">목차</p>
          <ul className="article-toc__list">
            <li><a href="#intro">짭토끼란?</a></li>
            <li><a href="#problems">기존 서비스의 한계</a></li>
            <li><a href="#difference">짭토끼가 다른 이유</a></li>
            <li><a href="#categories">카테고리별 현황</a></li>
            <li><a href="#how-to">이용 방법</a></li>
            <li><a href="#faq">자주 묻는 질문</a></li>
          </ul>
        </aside>

        {/* Article Content */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼 가이드
          </nav>

          <h1 id="intro">짭토끼 — 실시간 검증 사이트 모음의 새로운 기준</h1>

          <p>
            인터넷에서 원하는 사이트를 찾는 일이 점점 어려워지고 있습니다. 수많은 링크 모음 사이트들이 존재하지만,
            대부분 오래된 정보를 그대로 유지하고 있어 클릭해보면 접속이 되지 않는 경우가 빈번합니다.
            <strong>짭토끼</strong>는 이러한 문제를 근본적으로 해결하기 위해 탄생했습니다.
          </p>

          <div className="callout">
            <p className="callout__title">💡 짭토끼의 핵심 가치</p>
            <p className="callout__body">
              &quot;죽은 링크 없는, 진짜 살아있는 사이트만&quot; — 짭토끼는 자동화된 실시간 모니터링 시스템을 통해
              등록된 모든 사이트의 접속 상태를 지속적으로 확인하고, 검증된 사이트만을 사용자에게 제공합니다.
            </p>
          </div>

          <h2 id="problems">기존 링크 모음 사이트의 한계</h2>

          <p>
            기존 사이트 모음 서비스들의 가장 큰 문제점은 <strong>정보의 신선도</strong>입니다.
            한번 등록된 링크가 수개월, 심지어 수년간 업데이트 없이 방치되는 경우가 대부분입니다.
            특히 도메인 변경이 잦은 사이트들의 경우, 사용자가 방문할 때마다
            &quot;사이트에 연결할 수 없음&quot; 메시지를 마주하게 됩니다.
          </p>

          <ul>
            <li><strong>죽은 링크 문제</strong> — 등록된 링크의 상당수가 이미 접속 불가 상태</li>
            <li><strong>과도한 목록</strong> — 10개, 20개씩 나열하지만 실제 쓸만한 사이트는 소수</li>
            <li><strong>순위 신뢰성</strong> — 광고비에 따라 순위가 결정되는 불투명한 구조</li>
            <li><strong>업데이트 부재</strong> — 도메인 변경 시 사용자가 직접 새 주소를 찾아야 함</li>
          </ul>

          <h2 id="difference">짭토끼가 다른 이유</h2>

          <h3>실시간 헬스체크 시스템</h3>
          <p>
            짭토끼는 등록된 모든 사이트에 대해 주기적으로 자동 헬스체크를 수행합니다.
            각 사이트의 응답 속도, HTTP 상태 코드, SSL 인증서 유효성까지 확인하여
            현재 시점에서 정상적으로 접속 가능한 사이트만을 표시합니다.
          </p>

          <h3>Top 3 큐레이션</h3>
          <p>
            10개, 20개의 긴 목록 대신 각 카테고리별로 <strong>엄선된 3개 사이트</strong>만을 추천합니다.
            선정 기준은 서버 응답 속도, 최근 30일 업타임(가동률), 사용자 추천수를 종합적으로 반영하며,
            이 기준은 투명하게 공개됩니다.
          </p>

          <h3>도메인 변경 실시간 알림</h3>
          <p>
            자주 이용하는 사이트의 도메인이 변경되었을 때, 텔레그램을 통해 실시간으로 새 주소를 안내받을 수 있습니다.
            더 이상 검색 엔진에서 새 주소를 찾아 헤매지 않아도 됩니다.
          </p>

          <div className="callout">
            <p className="callout__title">📊 짭토끼 운영 현황</p>
            <p className="callout__body">
              현재 9개 카테고리, 27개 이상의 사이트를 실시간으로 모니터링하고 있으며,
              평균 헬스체크 주기는 5분입니다. 도메인 변경 감지 시 즉각적으로 정보가 업데이트됩니다.
            </p>
          </div>

          <h2 id="categories">카테고리별 사이트 현황</h2>
          <p>
            짭토끼는 웹툰, 드라마, 커뮤니티, 스포츠, 토렌트, 검증, 카지노, 토토, 스트리밍 등
            다양한 카테고리에 걸쳐 사용자들이 자주 찾는 인기 사이트를 모니터링합니다.
            <Link href="/"> 짭토끼 바로가기</Link>에서 실시간 현황을 확인해보세요.
          </p>

          <h2 id="how-to">짭토끼 이용 방법</h2>
          <ol>
            <li><strong>카테고리 확인</strong> — 원하는 카테고리의 카드를 확인합니다</li>
            <li><strong>상태 확인</strong> — 🟢 초록불이 켜진 사이트는 현재 접속 가능합니다</li>
            <li><strong>즐겨찾기 등록</strong> — ☆ 버튼을 눌러 자주 방문하는 사이트를 저장하세요</li>
            <li><strong>알림 구독</strong> — 텔레그램 알림을 통해 도메인 변경 소식을 받아보세요</li>
          </ol>

          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼는 어떤 서비스인가요?">
              짭토끼는 다양한 카테고리의 인기 사이트들을 실시간으로 모니터링하고,
              현재 정상적으로 접속 가능한 사이트만을 선별하여 제공하는 검증된 링크 디렉토리 서비스입니다.
              죽은 링크 없이 항상 살아있는 사이트만을 제공하는 것이 핵심 가치입니다.
            </FAQItem>
            <FAQItem question="사이트 주소가 변경되면 어떻게 알 수 있나요?">
              텔레그램 알림 서비스를 구독하시면, 즐겨찾기한 사이트의 주소가 변경될 때
              실시간으로 알림을 받으실 수 있습니다. 알림에는 변경된 새 주소가 포함됩니다.
            </FAQItem>
            <FAQItem question="Top 3 선정 기준은 무엇인가요?">
              서버 응답 속도, 최근 30일 업타임(가동률), 사용자 추천수를 종합적으로 반영하여
              각 카테고리별 상위 3개 사이트를 선정합니다. 광고비와 무관하게 객관적인 데이터만으로 순위가 결정됩니다.
            </FAQItem>
            <FAQItem question="실시간 모니터링은 어떻게 작동하나요?">
              짭토끼는 자동화된 헬스체크 시스템을 통해 등록된 모든 사이트의 접속 상태,
              응답 속도, 도메인 변경 여부를 주기적으로 확인합니다.
              평균 5분 간격으로 체크하며, 이 데이터를 기반으로 사이트의 생존 상태를 실시간으로 업데이트합니다.
            </FAQItem>
          </div>

          {/* Internal link CTA back to landing */}
          <div className="article-cta">
            <p className="article-cta__text">짭토끼에서 실시간 검증된 사이트를 확인해보세요</p>
            <Link href="/" className="article-cta__link">
              짭토끼 바로가기 →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
