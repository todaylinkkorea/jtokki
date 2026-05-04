import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiModal } from '@/components/NewtokiModal';

export const metadata: Metadata = {
  title: '짭토끼 — 실시간 검증된 사이트 주소 모음 (2026년 최신)',
  description:
    '짭토끼는 실시간 헬스체크로 검증된 살아있는 사이트만 모아 제공하는 링크 디렉토리입니다. 짭토끼 주소, 짭토끼 바로가기, 짭토끼 사이트 이용 방법을 안내합니다.',
  alternates: { canonical: `${SITE_URL}/about` },
  keywords: [
    '짭토끼', '짭토끼 주소', '짭토끼 바로가기', '짭토끼 사이트',
    '짭토끼 링크 모음', '짭토끼 안전', '짭토끼 사용법',
    '사이트 모음', '링크 모음', '검증된 사이트',
  ],
  openGraph: {
    title: '짭토끼 — 실시간 검증된 사이트 주소 모음 (2026년 최신)',
    description:
      '죽은 링크 없는, 진짜 살아있는 사이트만. 짭토끼가 실시간으로 검증합니다. 짭토끼 주소 바로가기.',
    type: 'article',
    locale: 'ko_KR',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '짭토끼 — 실시간 검증된 사이트 주소 모음 (2026년 최신)',
  description:
    '짭토끼는 실시간 헬스체크로 검증된 살아있는 사이트만 모아 제공하는 링크 디렉토리입니다.',
  author: { '@type': 'Organization', name: '짭토끼' },
  publisher: { '@type': 'Organization', name: '짭토끼' },
  datePublished: '2026-05-04',
  dateModified: '2026-05-04',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/about`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    {
      '@type': 'ListItem',
      position: 2,
      name: '짭토끼 소개',
      item: `${SITE_URL}/about`,
    },
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
        text: '짭토끼는 웹툰, 드라마, 커뮤니티, 스포츠 등 다양한 카테고리의 인기 사이트를 실시간으로 모니터링하고, 현재 접속 가능한 사이트만 선별하여 제공하는 검증된 링크 디렉토리 서비스입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼 공식 주소는 어디인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com)입니다. 이 외의 주소는 사칭 사이트일 수 있으니 반드시 공식 주소를 통해 접속하세요.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼는 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 등록된 모든 사이트에 대해 HTTP 상태 코드, SSL 인증서, 응답 속도를 자동으로 검증합니다. 짭토끼 자체는 외부 사이트로의 접속 주소만 안내하며, 콘텐츠 자체를 보증하지는 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼와 다른 링크 모음 사이트의 차이점은?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '기존 링크 모음은 수동 업데이트로 죽은 링크가 많고 순위가 불투명합니다. 짭토끼는 자동화된 실시간 모니터링으로 살아있는 사이트만 표시하며, 응답 속도·업타임 기반의 객관적 Top 3를 제공합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사이트 주소가 변경되면 어떻게 알 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 301/302 리다이렉트를 자동 감지하여 새 주소로 즉시 업데이트합니다. 텔레그램 알림을 구독하면 즐겨찾기한 사이트의 주소 변경 시 실시간으로 알림을 받을 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼에서 제공하는 카테고리는 어떤 것이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '현재 웹툰, 드라마, 커뮤니티, 스포츠, 토렌트, 검증, 스트리밍 등 9개 이상의 카테고리를 운영하고 있으며, 각 카테고리별 Top 3 사이트를 실시간으로 선정합니다.',
      },
    },
  ],
};

export default function AboutPage() {
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

      <NewtokiModal />

      {/* Header nav */}
      <header className="hero" style={{ padding: '32px 20px 24px' }}>
        <div className="container">
          <div className="hero__top">
            <Link href="/" className="hero__logo">
              <BunnyLogo size={42} />
              <span className="hero__logo-text">짭토끼</span>
            </Link>
            <Link
              href="/"
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}
            >
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
            <li><a href="#what-is">짭토끼란?</a></li>
            <li><a href="#address">공식 주소</a></li>
            <li><a href="#how-verify">검증 방법</a></li>
            <li><a href="#comparison">vs 링크 모음</a></li>
            <li><a href="#features">주요 기능</a></li>
            <li><a href="#caution">주의사항</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Article Content */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼 소개
          </nav>

          <h1 id="what-is">
            짭토끼 — 검증된 사이트 주소를 한 곳에서 (2026년 최신)
          </h1>

          <p>
            인터넷에서 원하는 사이트를 찾으려 할 때 가장 큰 문제는{' '}
            <strong>신뢰할 수 있는 최신 주소를 확인하기 어렵다</strong>는 것입니다.
            검색 결과에는 이미 접속이 불가능한 주소, 피싱 사이트, 광고성 링크가
            뒤섞여 있어 사용자가 직접 하나하나 확인해야 하는 번거로움이 있습니다.
          </p>

          <p>
            <strong>짭토끼</strong>는 이 문제를 해결하기 위해 만들어진{' '}
            <strong>실시간 검증 사이트 주소 모음</strong> 서비스입니다. 자동화된
            헬스체크 시스템으로 등록된 모든 사이트의 접속 상태를 지속적으로
            확인하고, <strong>현재 살아있는 사이트만</strong>을 사용자에게
            제공합니다.
          </p>

          <div className="callout">
            <p className="callout__title">💡 짭토끼의 핵심 가치</p>
            <p className="callout__body">
              &quot;죽은 링크 없는, 진짜 살아있는 사이트만&quot; — 짭토끼는 단순한
              링크 모음이 아닙니다. 실시간 모니터링, SSL 검증, 응답 속도 측정을
              통해 <strong>기술적으로 검증된 사이트만</strong>을 제공하는 검증
              플랫폼입니다.
            </p>
          </div>

          {/* ===== 공식 주소 ===== */}
          <h2 id="address">짭토끼 공식 주소 및 바로가기</h2>

          <p>
            <strong>짭토끼</strong>의 공식 접속 주소는 아래와 같습니다. 짭토끼를
            사칭하는 사이트가 존재할 수 있으므로, 반드시 공식 주소를 통해
            접속하세요.
          </p>

          <div className="callout">
            <p className="callout__title">🔗 짭토끼 공식 주소</p>
            <p className="callout__body">
              <strong>짭토끼.com</strong> (
              <Link href="/">xn--h10bl69b7nf.com</Link>)<br />
              <br />
              이 주소 외에 &quot;짭토끼&quot;를 사칭하는 사이트가 있다면 피싱
              사이트일 수 있습니다. 항상 주소를 확인하고 접속하세요.
            </p>
          </div>

          <p>
            짭토끼는 한글 도메인(짭토끼.com)과 국제화 도메인(xn--h10bl69b7nf.com)
            모두에서 접속 가능합니다. 브라우저의 주소창에서 자물쇠(🔒) 아이콘이
            표시되는지 반드시 확인하세요.
          </p>

          {/* ===== 검증 방법 ===== */}
          <h2 id="how-verify">짭토끼는 어떻게 사이트를 검증하나요?</h2>

          <p>
            짭토끼는 단순히 링크를 나열하는 것이 아니라, 등록된 모든 사이트에 대해{' '}
            <strong>자동화된 기술 검증</strong>을 수행합니다. 검증은 다음 세 가지
            단계로 이루어집니다.
          </p>

          <h3>자동화된 헬스체크</h3>
          <p>
            짭토끼의 모니터링 시스템은 등록된 사이트에 평균 <strong>5분 간격</strong>
            으로 HTTP 요청을 보내 응답 상태를 확인합니다. 200(정상), 301/302
            (리다이렉트), 5xx(서버 오류) 등 상태 코드를 분석하여 사이트의 실제 운영
            상태를 판별합니다.
          </p>

          <ul>
            <li>
              ✅ <strong>HTTP 상태 코드 분석</strong> — 200, 301, 302, 403, 500 등
              다양한 응답 코드를 실시간으로 추적합니다.
            </li>
            <li>
              ⚡ <strong>응답 속도 측정</strong> — 서버 응답 시간(ms)을 밀리초
              단위로 측정하여 사이트 품질을 객관적으로 평가합니다.
            </li>
          </ul>

          <h3>SSL 인증서 및 보안 검증</h3>
          <p>
            HTTPS 적용 여부와 SSL 인증서의 유효성을 자동으로 검증합니다. SSL이
            만료되었거나 적용되지 않은 사이트는 보안 위험 경고와 함께 표시되어
            사용자가 안전하게 판단할 수 있도록 돕습니다.
          </p>

          <h3>도메인 변경 자동 감지</h3>
          <p>
            사이트가 301/302 리다이렉트를 통해 새 도메인으로 이전한 경우, 짭토끼는
            이를 <strong>자동으로 감지</strong>하여 즉시 새 주소로 업데이트합니다.
            사용자가 직접 새 주소를 검색할 필요 없이, 짭토끼에서 항상 최신 주소를
            확인할 수 있습니다.
          </p>

          {/* ===== 비교 ===== */}
          <h2 id="comparison">기존 링크 모음 사이트와 뭐가 다른가요?</h2>

          <p>
            인터넷에는 수많은 링크 모음 사이트가 존재하지만, 대부분 치명적인
            한계를 가지고 있습니다. 짭토끼가 기존 서비스와 어떻게 다른지
            비교해보겠습니다.
          </p>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>비교 항목</th>
                  <th>기존 링크 모음</th>
                  <th>짭토끼</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>링크 상태 확인</td>
                  <td>❌ 수동 (월 1회 미만)</td>
                  <td>✅ 자동 (5분 간격)</td>
                </tr>
                <tr>
                  <td>죽은 링크</td>
                  <td>❌ 다수 존재</td>
                  <td>✅ 즉시 제거/표시</td>
                </tr>
                <tr>
                  <td>도메인 변경 감지</td>
                  <td>❌ 사용자가 직접 확인</td>
                  <td>✅ 자동 감지 & 업데이트</td>
                </tr>
                <tr>
                  <td>순위 기준</td>
                  <td>⚠️ 광고비 기반</td>
                  <td>✅ 응답속도·업타임 기반</td>
                </tr>
                <tr>
                  <td>목록 크기</td>
                  <td>10~50개 무분별 나열</td>
                  <td>카테고리별 Top 3 엄선</td>
                </tr>
                <tr>
                  <td>보안 검증</td>
                  <td>❌ 없음</td>
                  <td>✅ SSL 인증서 검증</td>
                </tr>
                <tr>
                  <td>주소 변경 알림</td>
                  <td>❌ 없음</td>
                  <td>✅ 텔레그램 실시간 알림</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            짭토끼는 <strong>기술 기반의 객관적 데이터</strong>로 운영됩니다.
            광고비를 받고 순위를 조작하거나, 접속 불가능한 사이트를 방치하는 기존
            서비스와는 근본적으로 다릅니다.
          </p>

          {/* ===== 주요 기능 ===== */}
          <h2 id="features">짭토끼 주요 기능</h2>

          <h3>카테고리별 Top 3 큐레이션</h3>
          <p>
            짭토끼는 10개, 20개의 긴 목록 대신 각 카테고리별로{' '}
            <strong>엄선된 3개 사이트</strong>만을 추천합니다. 선정 기준은 서버
            응답 속도, 최근 30일 업타임(가동률), 사용자 추천수를 종합적으로
            반영하며, 이 기준은 투명하게 공개됩니다.
          </p>

          <h3>실시간 상태 모니터링</h3>
          <p>
            각 사이트 옆에 표시된 상태 뱃지로 현재 접속 상태를 한눈에 파악할 수
            있습니다.
          </p>
          <ul>
            <li>
              🟢 <strong>LIVE</strong> — 현재 정상 접속 가능
            </li>
            <li>
              🟡 <strong>CHANGED</strong> — 주소가 변경됨 (새 주소로 자동 업데이트)
            </li>
            <li>
              🔴 <strong>DOWN</strong> — 현재 접속 불가
            </li>
          </ul>
          <p>
            응답 속도(ms)도 함께 표시되어, 서버의 현재 상태를 실시간으로 확인할 수
            있습니다.
          </p>

          <h3>즐겨찾기 &amp; 텔레그램 알림</h3>
          <p>
            자주 이용하는 사이트를 ☆ 버튼으로 즐겨찾기에 등록하면 편리하게 관리할
            수 있습니다. 또한 텔레그램 알림 서비스를 통해 즐겨찾기한 사이트의
            도메인이 변경될 때{' '}
            <strong>실시간으로 새 주소를 안내</strong>받을 수 있습니다.
          </p>

          <div className="callout">
            <p className="callout__title">📊 짭토끼 운영 현황</p>
            <p className="callout__body">
              현재 <strong>9개 카테고리</strong>, <strong>27개 이상</strong>의
              사이트를 실시간으로 모니터링하고 있으며, 평균 헬스체크 주기는{' '}
              <strong>5분</strong>입니다. 웹툰, 드라마, 커뮤니티, 스포츠, 토렌트,
              검증, 스트리밍 등 다양한 카테고리를 지원합니다.
            </p>
          </div>

          {/* ===== 주의사항 ===== */}
          <h2 id="caution">짭토끼 이용 시 주의사항</h2>

          <p>
            짭토끼를 안전하게 이용하기 위해 다음 사항을 꼭 확인하세요.
          </p>

          <ul>
            <li>
              <strong>🔒 공식 주소 확인</strong> — 짭토끼의 공식 주소는{' '}
              <Link href="/">짭토끼.com</Link>입니다. 유사한 이름의 사칭 사이트에
              주의하세요.
            </li>
            <li>
              <strong>🚫 개인정보 입력 금지</strong> — 짭토끼는 회원가입이나
              로그인을 요구하지 않습니다. 개인정보를 요구하는 사이트는 짭토끼가
              아닙니다.
            </li>
            <li>
              <strong>⚠️ 외부 사이트 주의</strong> — 짭토끼는 외부 사이트의 접속
              주소를 안내하며, 해당 사이트의 콘텐츠 자체를 보증하지는 않습니다.
              외부 사이트 이용 시에도 주소창의 SSL 인증서(🔒)를 확인하세요.
            </li>
            <li>
              <strong>🛡️ 광고 차단기 권장</strong> — 외부 사이트 방문 시 uBlock
              Origin 등의 광고 차단 확장 프로그램 사용을 권장합니다.
            </li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼는 어떤 서비스인가요?" defaultOpen>
              짭토끼는 웹툰, 드라마, 커뮤니티, 스포츠 등 다양한 카테고리의 인기
              사이트를 실시간으로 모니터링하고, 현재 접속 가능한 사이트만 선별하여
              제공하는 검증된 링크 디렉토리 서비스입니다. 죽은 링크 없이 항상
              살아있는 사이트만을 제공하는 것이 핵심 가치입니다.
            </FAQItem>
            <FAQItem question="짭토끼 공식 주소는 어디인가요?">
              짭토끼 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com)입니다. 이 외의
              주소는 사칭 사이트일 수 있으니 반드시 공식 주소를 통해 접속하세요.
              주소창에 자물쇠(🔒) 아이콘이 표시되는지도 함께 확인해주세요.
            </FAQItem>
            <FAQItem question="짭토끼는 안전한가요?">
              짭토끼는 등록된 모든 사이트에 대해 HTTP 상태 코드, SSL 인증서, 응답
              속도를 자동으로 검증합니다. 짭토끼 자체는 외부 사이트로의 접속 주소만
              안내하며, 콘텐츠 자체를 보증하지는 않습니다. 기술적 안전성 확인에
              집중합니다.
            </FAQItem>
            <FAQItem question="짭토끼와 다른 링크 모음 사이트의 차이점은?">
              기존 링크 모음은 수동 업데이트로 죽은 링크가 많고 순위가
              불투명합니다. 짭토끼는 자동화된 실시간 모니터링으로 살아있는 사이트만
              표시하며, 응답 속도·업타임 기반의 객관적 Top 3를 제공합니다. 광고비와
              무관하게 데이터만으로 순위가 결정됩니다.
            </FAQItem>
            <FAQItem question="사이트 주소가 변경되면 어떻게 알 수 있나요?">
              짭토끼는 301/302 리다이렉트를 자동 감지하여 새 주소로 즉시
              업데이트합니다. 텔레그램 알림을 구독하면 즐겨찾기한 사이트의 주소
              변경 시 실시간으로 알림을 받을 수 있습니다.
            </FAQItem>
            <FAQItem question="짭토끼에서 제공하는 카테고리는 어떤 것이 있나요?">
              현재 웹툰, 드라마, 커뮤니티, 스포츠, 토렌트, 검증, 스트리밍 등 9개
              이상의 카테고리를 운영하고 있으며, 각 카테고리별 Top 3 사이트를
              실시간으로 선정합니다.
            </FAQItem>
          </div>

          {/* CTA */}
          <div className="article-cta">
            <p className="article-cta__text">
              짭토끼에서 실시간 검증된 사이트를 확인하세요
            </p>
            <Link href="/" className="article-cta__link">
              짭토끼 바로가기 →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
