import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiCTA } from '@/components/NewtokiCTA';
import { NewtokiInlineButton } from '@/components/NewtokiInlineButton';
import { getDateLabel, getTodayISO } from '@/lib/date';
import { ORG_PUBLISHER } from '@/lib/schema';

const PUBLISHED = '2026-06-13';

export function generateMetadata(): Metadata {
  const dateLabel = getDateLabel();
  const todayISO = getTodayISO();
  const titleText = `짭토끼 — 뉴토끼 최신 주소 실시간 검증 서비스 (${dateLabel})`;

  return {
    // 제목이 이미 "짭토끼"로 시작하므로 레이아웃의 "| 짭토끼" 접미사를 붙이지 않는다
    // (한국어 SERP는 약 30자에서 잘리므로 중복 브랜드는 노출 예산 낭비)
    title: { absolute: titleText },
    description:
      `짭토끼는 뉴토끼·늑대닷컴·툰코 등 주요 웹툰 사이트의 최신 접속 주소를 실시간으로 검증하는 서비스입니다. 짭토끼에서 ${dateLabel} 기준 뉴토끼 접속 가능한 최신 주소를 지금 바로 확인하세요.`,
    alternates: { canonical: `${SITE_URL}/jtokki` },
    keywords: [
      '짭토끼',
      '짭토끼 주소',
      '짭토끼 사이트',
      '짭토끼 뉴토끼',
      '짭토끼 바로가기',
      '짭토끼 접속',
      '짭토끼 최신주소',
      '짭토끼란',
      '뉴토끼 짭토끼',
      '웹툰 주소 검증',
      '웹툰 최신 주소',
      '뉴토끼 주소',
    ],
    openGraph: {
      title: titleText,
      description:
        '짭토끼에서 뉴토끼를 비롯한 웹툰 사이트의 실시간 접속 주소를 확인하세요. 5분 간격 자동 검증, 도메인 변경 자동 감지.',
      type: 'article',
      locale: 'ko_KR',
      url: `${SITE_URL}/jtokki`,
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: '짭토끼 — 웹툰 주소 실시간 검증',
        },
      ],
    },
    other: {
      'article:published_time': PUBLISHED,
      'article:modified_time': todayISO,
    },
  };
}

export default function JtokkiPage() {
  const dateLabel = getDateLabel();
  const todayISO = getTodayISO();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `짭토끼 — 뉴토끼 최신 주소 실시간 검증 서비스 (${dateLabel})`,
    description:
      '짭토끼는 뉴토끼·늑대닷컴·툰코 등 주요 웹툰 사이트 접속 주소를 5분 간격으로 자동 검증하는 실시간 모니터링 서비스입니다.',
    image: `${SITE_URL}/logo.png`,
    author: { '@type': 'Organization', name: '짭토끼', url: SITE_URL },
    publisher: ORG_PUBLISHER,
    datePublished: PUBLISHED,
    dateModified: todayISO,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/jtokki` },
    about: [
      { '@type': 'Thing', name: '짭토끼' },
      { '@type': 'Thing', name: '뉴토끼' },
      { '@type': 'Thing', name: '웹툰 주소' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: '짭토끼',
        item: `${SITE_URL}/jtokki`,
      },
    ],
  };

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

      {/* Header */}
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
            <li>
              <a href="#intro">짭토끼란?</a>
            </li>
            <li>
              <a href="#newtoki">뉴토끼 최신 주소 확인</a>
            </li>
            <li>
              <a href="#how-it-works">실시간 검증 방식</a>
            </li>
            <li>
              <a href="#sites">검증 웹툰 사이트 목록</a>
            </li>
            <li>
              <a href="#why-jtokki">짭토끼를 사용하는 이유</a>
            </li>
            <li>
              <a href="#safe">안전한 접속 방법</a>
            </li>
            <li>
              <a href="#faq">자주 묻는 질문</a>
            </li>
            <li>
              <a href="#related">관련 콘텐츠</a>
            </li>
          </ul>
        </aside>

        {/* Article */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼
          </nav>

          {/* E-E-A-T 신호 — 날짜 표시 */}
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 8,
            }}
          >
            최종 업데이트: <time dateTime={todayISO}>{todayISO}</time>
          </p>

          <h1 id="intro">
            짭토끼 — 뉴토끼 최신 주소 실시간 검증 ({dateLabel})
          </h1>

          <p>
            <strong>짭토끼</strong>는 <strong>뉴토끼</strong>를 비롯한 주요
            웹툰 사이트의 최신 접속 주소를 실시간으로 검증하고 안내하는
            서비스입니다. 도메인 차단·서버 이전·주소 변경이 잦은 웹툰
            사이트의 특성상, 짭토끼는 5분 간격 자동 검증으로 항상 최신 주소를
            제공합니다.
          </p>

          {/* ✅ H1 직후 첫 번째 CTA — 뉴토끼 버튼 + cu2day 광고 풀 노출 */}
          <NewtokiCTA />

          <h2 id="newtoki">짭토끼에서 뉴토끼 최신 주소 확인하기</h2>

          <p>
            <strong>뉴토끼</strong>는 저작권 관련 법적 조치로 인해 도메인이{' '}
            <strong>예고 없이 차단·변경</strong>되는 경우가 빈번합니다.
            검색 엔진에서 찾은 주소가 이미 만료되었거나, 피싱 사이트로
            연결되는 경우도 있어 주의가 필요합니다.
          </p>

          <ol>
            <li>
              <Link href="/">짭토끼 메인 페이지</Link>에 접속합니다
            </li>
            <li>
              <strong>웹툰</strong> 카테고리 카드를 확인합니다
            </li>
            <li>
              뉴토끼 항목의 🟢 <strong>LIVE</strong> 버튼을 클릭합니다
            </li>
            <li>
              응답 속도(ms)와 업타임을 확인하여 서버 상태를 판단합니다
            </li>
          </ol>

          {/* ✅ 두 번째 CTA — callout 안에 인라인 버튼 */}
          <div className="callout">
            <p className="callout__title">📌 뉴토끼 최신 주소 바로가기</p>
            <p className="callout__body">
              뉴토끼의 현재 접속 가능 여부와 최신 도메인은 짭토끼가 실시간으로
              검증합니다. 검색 엔진의 오래된 주소가 아닌, 짭토끼에서 직접
              검증된 주소를 사용하세요.
            </p>
            <NewtokiInlineButton />
          </div>

          <h2 id="how-it-works">짭토끼 실시간 검증 방식</h2>

          <p>
            짭토끼는 자체 개발한 자동화 헬스체크 시스템으로 등록된 모든 사이트를{' '}
            <strong>5분 간격</strong>으로 지속 모니터링합니다. 단순히 사이트가
            열리는지 여부만 확인하는 것이 아니라, 다음 항목을 종합적으로
            검증합니다:
          </p>

          <ul>
            <li>
              <strong>HTTP 상태 코드</strong> — 200 OK 여부 및 리다이렉트 감지
            </li>
            <li>
              <strong>SSL 인증서</strong> — HTTPS 유효성 및 만료 여부 확인
            </li>
            <li>
              <strong>응답 속도(ms)</strong> — 서버 응답 시간 측정 및 표시
            </li>
            <li>
              <strong>도메인 변경 감지</strong> — 301/302 리다이렉트로 새 주소
              자동 추적
            </li>
            <li>
              <strong>업타임 기록</strong> — 과거 7일 접속 성공률 추적
            </li>
          </ul>

          <p>
            검증 결과는{' '}
            <Link href="/">짭토끼 메인 페이지</Link>에 실시간으로 반영됩니다.
            🟢 <strong>LIVE</strong> 표시가 된 주소만 현재 접속 가능한 상태이며,
            🔴 <strong>DOWN</strong> 표시는 현재 접속이 불가능한 상태를
            의미합니다.
          </p>

          <h2 id="sites">짭토끼가 검증하는 웹툰 사이트 목록</h2>

          <p>
            짭토끼는 현재 다음 웹툰 사이트를 실시간으로 검증하고 있습니다.
            각 사이트의 정확한 최신 주소와 현재 접속 상태는{' '}
            <Link href="/">짭토끼 메인 페이지</Link>에서 확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">📖 웹툰 카테고리 검증 사이트</p>
            <p className="callout__body">
              <strong>뉴토끼</strong> — 국내 최대 웹툰 사이트, 최신 연재 웹툰
              빠른 업데이트
              <br />
              <strong>늑대닷컴</strong> — 다양한 장르의 일반·성인 웹툰 제공
              <br />
              <strong>툰코</strong> — 깔끔한 UI, 모바일 최적화 우수
              <br />
              <br />
              👉{' '}
              <Link href="/webtoon-site">
                웹툰 사이트 전체 목록 보기
              </Link>
            </p>
          </div>

          <h2 id="why-jtokki">짭토끼를 사용해야 하는 이유</h2>

          <ul>
            <li>
              <strong>🕐 실시간성</strong> — 검색 엔진은 새 주소를 반영하는 데
              수일이 걸립니다. 짭토끼는 5분 이내에 새 주소를 감지합니다.
            </li>
            <li>
              <strong>🛡️ 피싱 방지</strong> — 검색 결과에는 가짜 사이트가
              섞일 수 있습니다. 짭토끼는 실제 원본 사이트만 검증합니다.
            </li>
            <li>
              <strong>📊 투명한 상태</strong> — 응답 속도, 업타임, SSL 상태를
              투명하게 공개합니다.
            </li>
            <li>
              <strong>🔔 알림 서비스</strong> — 도메인이 변경되면 텔레그램
              알림으로 즉시 통보받을 수 있습니다.
            </li>
            <li>
              <strong>🆓 무료, 무가입</strong> — 로그인이나 개인정보 제공 없이
              완전 무료로 이용 가능합니다.
            </li>
          </ul>

          <h2 id="safe">안전한 웹툰 접속을 위한 체크리스트</h2>

          <ul>
            <li>
              <strong>🔒 HTTPS 확인</strong> — 주소창에 자물쇠(🔒) 아이콘이
              있는지 반드시 확인합니다.
            </li>
            <li>
              <strong>🚫 과도한 팝업 주의</strong> — 팝업이 과도하게 발생하거나
              악성 리다이렉트가 발생하면 즉시 페이지를 닫습니다.
            </li>
            <li>
              <strong>🛡️ 광고 차단기 사용</strong> — uBlock Origin 등의 브라우저
              확장 프로그램으로 악성 광고를 차단합니다.
            </li>
            <li>
              <strong>📱 VPN 사용 고려</strong> — ISP 차단이 발생한 경우 안전한
              VPN을 통해 접속할 수 있습니다.
            </li>
          </ul>

          <h2 id="faq">짭토끼 자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼가 뭔가요?" defaultOpen>
              짭토끼는 뉴토끼를 비롯한 주요 웹툰 사이트의 접속 주소를 5분
              간격으로 자동 검증하는 실시간 모니터링 서비스입니다. 직접 웹툰을
              제공하지 않으며, 오직 접속 가능한 최신 주소만 안내합니다.
            </FAQItem>
            <FAQItem question="짭토끼에서 뉴토끼 주소를 어떻게 찾나요?">
              짭토끼 메인 페이지에서 웹툰 카테고리의 뉴토끼 항목을 찾아
              🟢 LIVE 버튼을 클릭하면 현재 접속 가능한 최신 주소로 이동합니다.
              도메인이 변경된 경우에도 자동으로 감지하여 새 주소로 안내합니다.
            </FAQItem>
            <FAQItem question="짭토끼는 무료인가요?">
              네, 짭토끼는 완전 무료 서비스입니다. 회원가입이나 개인정보 제공
              없이 이용 가능합니다. 짭토끼는 어떠한 개인정보도 수집하지 않습니다.
            </FAQItem>
            <FAQItem question="뉴토끼 주소가 자주 바뀌는 이유는?">
              뉴토끼와 같은 웹툰 사이트는 저작권 관련 법적 조치(ISP 차단,
              도메인 등록 취소 등)로 인해 도메인이 변경됩니다. 짭토끼는 이러한
              변경을 5분 이내에 자동 감지하여 최신 주소로 업데이트합니다.
            </FAQItem>
            <FAQItem question="짭토끼 말고 뉴토끼 주소를 찾는 다른 방법은?">
              검색 엔진에서 직접 검색할 수 있지만, 오래된 주소나 피싱 사이트로
              연결될 위험이 있습니다. 짭토끼의 실시간 검증 시스템을 통하면
              현재 접속 가능한 안전한 주소를 바로 확인할 수 있습니다.
            </FAQItem>
            <FAQItem question="짭토끼 주소는 어디인가요?">
              짭토끼 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com)입니다.
              이 외의 주소는 사칭 사이트일 수 있으니 주의하세요.
              자세한 내용은 <Link href="/jtokki-address">짭토끼 최신 주소 안내</Link> 페이지를 참고하세요.
            </FAQItem>
          </div>

          {/* 관련 콘텐츠 내부 링크 */}
          <h2 id="related">관련 콘텐츠</h2>
          <ul>
            <li>
              <Link href="/newtoki">뉴토끼 주소 — 짭토끼 실시간 검증</Link>
            </li>
            <li>
              <Link href="/newtoki-address">뉴토끼 최신 주소 변경 이력</Link>
            </li>
            <li>
              <Link href="/ntk01">ntk01 뉴토끼 최신 주소 안내</Link>
            </li>
            <li>
              <Link href="/webtoon-site">웹툰 사이트 전체 목록</Link>
            </li>
            <li>
              <Link href="/jtokki-address">짭토끼 공식 주소 안내</Link>
            </li>
            <li>
              <Link href="/jtokki-bypass">
                짭토끼 접속 안 될 때 — 우회 접속 방법
              </Link>
            </li>
          </ul>

          {/* ✅ 하단 최종 CTA */}
          <div className="article-cta">
            <p className="article-cta__text">
              지금 바로 짭토끼에서 뉴토끼 최신 주소를 확인하세요
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
