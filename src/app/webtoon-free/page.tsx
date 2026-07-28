import type { Metadata } from 'next';
import { SITE_URL, FACEBOOK_URL, GITHUB_URL } from '@/lib/constants';
import { getDateLabel, getTodayISO } from '@/lib/date';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiInlineButton } from '@/components/NewtokiInlineButton';

/** 빌드 시점에 평가되므로 워커 재빌드마다 갱신된다 */
const DATE_LABEL = getDateLabel();
const TODAY_ISO = getTodayISO();

export const metadata: Metadata = {
  title: `웹툰 무료로 보는 법 — 접속 가능한 무료 웹툰 사이트 (${DATE_LABEL})`,
  description:
    '무료 웹툰 사이트를 찾고 계신가요? 지금 접속 가능한 무료 웹툰 사이트 최신 주소를 짭토끼가 실시간 검증합니다. 뉴토끼, 늑대닷컴, 툰코 접속 방법 안내.',
  alternates: { canonical: `${SITE_URL}/webtoon-free` },
  keywords: [
    '웹툰 무료', '무료 웹툰', '웹툰 무료 보기', '웹툰 무료 사이트',
    '웹툰 공짜', '웹툰 무료 감상', '뉴토끼', '늑대닷컴', '툰코',
    '무료 만화', '짭토끼',
  ],
  openGraph: {
    title: '웹툰 무료로 보는 법 — 접속 가능한 무료 웹툰 사이트',
    description:
      '무료 웹툰 사이트 최신 주소를 짭토끼가 실시간 검증하여 안내합니다.',
    type: 'article',
    locale: 'ko_KR',
    url: `${SITE_URL}/webtoon-free`,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: '짭토끼 로고' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `웹툰 무료로 보는 법 — 접속 가능한 무료 웹툰 사이트 (${DATE_LABEL})`,
  description:
    '무료 웹툰 사이트의 최신 접속 주소와 안전한 이용 방법을 안내합니다.',
  image: `${SITE_URL}/logo.png`,
  author: {
    '@type': 'Organization',
    name: '짭토끼',
    url: SITE_URL,
    sameAs: [FACEBOOK_URL, GITHUB_URL],
  },
  publisher: {
    '@type': 'Organization',
    name: '짭토끼',
    url: SITE_URL,
  },
  datePublished: '2026-05-11',
  dateModified: TODAY_ISO,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/webtoon-free`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '웹툰 무료', item: `${SITE_URL}/webtoon-free` },
  ],
};


export default function WebtoonFreePage() {
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
            <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              ← 홈으로
            </Link>
          </div>
        </div>
      </header>

      <div className="article-layout">
        {/* TOC */}
        <aside className="article-toc">
          <p className="article-toc__title">목차</p>
          <ul className="article-toc__list">
            <li><a href="#intro">무료 웹툰 보는 법</a></li>
            <li><a href="#sites">무료 웹툰 사이트 목록</a></li>
            <li><a href="#step">접속 방법 가이드</a></li>
            <li><a href="#safety">안전한 이용 수칙</a></li>
            <li><a href="#alert">주소 변경 알림</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Article */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 웹툰 무료
          </nav>

          <h1 id="intro">
            웹툰 무료로 보는 법 — 지금 접속 가능한 사이트 안내 ({DATE_LABEL})
          </h1>

          <p>
            <strong>웹툰을 무료로</strong> 보고 싶은데, 사이트 주소를 찾기
            어려우신가요? 무료 웹툰 사이트는 도메인이 자주 바뀌어서 검색해도
            이미 막힌 주소만 나오는 경우가 많습니다.
          </p>

          <p>
            이 페이지에서는 <strong>{DATE_LABEL} 현재</strong> 접속 가능한 무료
            웹툰 사이트의 최신 주소와, 앞으로 주소가 바뀌더라도 항상 최신
            주소를 찾는 방법을 안내합니다.
          </p>

          <div className="callout">
            <p className="callout__title">💡 핵심 요약</p>
            <p className="callout__body">
              무료 웹툰 사이트 주소는 수시로 변경됩니다.{' '}
              <Link href="/">짭토끼 메인 페이지</Link>에서{' '}
              <strong>실시간 검증된 최신 주소</strong>를 확인하면, 막힌
              주소를 직접 찾아 헤맬 필요가 없습니다.
            </p>
            <NewtokiInlineButton />
          </div>

          {/* ===== 사이트 목록 ===== */}
          <h2 id="sites">무료 웹툰 사이트 — {DATE_LABEL} 접속 가능 목록</h2>

          <p>
            아래는 짭토끼가 <strong>실시간으로 검증</strong>한, 현재 접속
            가능한 무료 웹툰 사이트입니다.
          </p>

          <h3>1. 뉴토끼</h3>
          <p>
            국내 최대 규모의 무료 웹툰 사이트입니다. 최신 연재 웹툰이 가장
            빨리 업데이트되며, 완결 작품 아카이브도 방대합니다. 도메인
            차단이 잦지만 짭토끼에서 최신 주소를 자동 추적합니다.
          </p>

          <h3>2. 늑대닷컴</h3>
          <p>
            로맨스, 액션, BL 등 다양한 장르를 고루 갖춘 무료 웹툰
            사이트입니다. 서버 안정성이 뛰어나 뉴토끼 접속이 불가능할 때
            가장 좋은 대안입니다.
          </p>

          <h3>3. 툰코</h3>
          <p>
            깔끔한 UI와 빠른 로딩 속도가 특징입니다. 특히 모바일에서의
            사용성이 뛰어나 스마트폰으로 웹툰을 보는 사용자에게
            추천합니다.
          </p>

          <div className="callout">
            <p className="callout__title">📖 실시간 접속 상태 확인</p>
            <p className="callout__body">
              위 사이트들의 <strong>정확한 최신 주소와 접속
              상태(LIVE/DOWN)</strong>는 수시로 변경됩니다.{' '}
              <Link href="/">짭토끼 메인 페이지</Link>에서 실시간으로
              확인하세요.
            </p>
          </div>

          {/* ===== 접속 방법 ===== */}
          <h2 id="step">무료 웹툰 사이트 접속하는 방법 (단계별 가이드)</h2>

          <ol>
            <li>
              <strong><Link href="/">짭토끼 메인 페이지</Link></strong>에 접속합니다
            </li>
            <li>
              <strong>웹툰</strong> 카테고리 카드를 찾습니다
            </li>
            <li>
              🟢 <strong>LIVE</strong> 표시된 사이트 = 현재 접속 가능
            </li>
            <li>
              사이트 이름을 클릭하면 <strong>최신 주소로 바로 이동</strong>합니다
            </li>
          </ol>

          <p>
            짭토끼는 <strong>5분 간격</strong>으로 모든 사이트를 자동
            검증합니다. 도메인이 변경되면 자동으로 감지하여 즉시
            업데이트합니다.
          </p>

          {/* ===== 안전한 이용 ===== */}
          <h2 id="safety">무료 웹툰 사이트 안전하게 이용하는 법</h2>

          <p>
            무료 웹툰 사이트를 이용할 때는 다음 사항을 반드시 확인하세요:
          </p>

          <ul>
            <li>
              <strong>🔒 HTTPS 확인</strong> — 주소창에 자물쇠 아이콘이
              있는지 확인하세요. HTTP만 사용하는 사이트는 피싱 위험이
              높습니다.
            </li>
            <li>
              <strong>🚫 과도한 팝업 주의</strong> — 팝업이 너무 많거나
              악성 리다이렉트가 발생하면 즉시 이탈하세요.
            </li>
            <li>
              <strong>🛡️ 광고 차단기 사용</strong> — uBlock Origin 같은
              확장 프로그램으로 악성 광고를 차단하세요.
            </li>
            <li>
              <strong>✅ 짭토끼 검증 주소 사용</strong> — 검색 엔진보다{' '}
              <Link href="/">짭토끼에서 검증된 주소</Link>를 통해 접속하는
              것이 가장 안전합니다.
            </li>
          </ul>

          {/* ===== 알림 ===== */}
          <h2 id="alert">무료 웹툰 사이트 주소 변경 알림 받기</h2>

          <p>
            주소가 바뀔 때마다 직접 검색할 필요 없이,{' '}
            <strong>짭토끼의 텔레그램 알림</strong>을 구독하면 실시간으로 새
            주소를 받아볼 수 있습니다.
          </p>

          <ol>
            <li>짭토끼 메인 페이지에서 원하는 사이트의 <strong>☆ 즐겨찾기</strong> 클릭</li>
            <li>하단의 <strong>&quot;텔레그램 알림 받기&quot;</strong> 배너 클릭</li>
            <li>텔레그램 채널 구독 → 주소 변경 시 즉시 알림</li>
          </ol>

          {/* ===== FAQ ===== */}
          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="웹툰을 무료로 볼 수 있는 사이트가 있나요?" defaultOpen>
              네, 뉴토끼, 늑대닷컴, 툰코 등 무료로 웹툰을 볼 수 있는
              사이트가 있습니다. 다만 도메인이 자주 변경되므로, 짭토끼에서
              현재 접속 가능한 최신 주소를 확인하는 것이 가장 안전합니다.
            </FAQItem>
            <FAQItem question="무료 웹툰 사이트에 접속할 때 주의할 점은?">
              HTTPS가 적용되어 있는지 확인하고, 과도한 팝업이나 개인정보
              입력을 요구하는 사이트는 피하세요. 짭토끼에서 검증된 주소를
              통해 접속하면 피싱 위험을 줄일 수 있습니다.
            </FAQItem>
            <FAQItem question="무료 웹툰 사이트 주소가 왜 자꾸 바뀌나요?">
              저작권 관련 법적 조치로 도메인이 차단되면 새 도메인으로
              이전합니다. 짭토끼는 이러한 변경을 5분 간격으로 자동 감지하여
              항상 최신 주소를 제공합니다.
            </FAQItem>
            <FAQItem question="짭토끼에서 무료 웹툰 사이트 주소를 어떻게 확인하나요?">
              짭토끼 메인 페이지에 접속하여 웹툰 카테고리를 확인하세요.
              LIVE 표시된 사이트를 클릭하면 현재 접속 가능한 최신 주소로
              바로 연결됩니다.
            </FAQItem>
          </div>

          {/* Author box */}
          <div className="author-box">
            <div className="author-box__avatar">
              <BunnyLogo size={48} />
            </div>
            <div className="author-box__info">
              <p className="author-box__name">짭토끼 팀</p>
              <p className="author-box__bio">
                실시간 헬스체크 시스템으로 검증된 사이트 주소만 제공합니다.
                안전한 인터넷 이용 환경을 만들기 위해 노력합니다.
              </p>
              <div className="author-box__social">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="article-cta">
            <p className="article-cta__text">
              짭토끼에서 무료 웹툰 사이트 최신 주소를 지금 바로 확인하세요
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
