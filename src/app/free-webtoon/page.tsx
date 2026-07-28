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
  title: `무료 웹툰 사이트 TOP 3 — 지금 접속 가능한 최신 주소 (${DATE_LABEL})`,
  description:
    '무료 웹툰 사이트 최신 주소를 찾고 계신가요? 짭토끼가 실시간으로 검증한 접속 가능한 무료 웹툰 사이트 TOP 3를 안내합니다. 뉴토끼, 늑대닷컴, 툰코 최신 주소.',
  alternates: { canonical: `${SITE_URL}/free-webtoon` },
  keywords: [
    '무료 웹툰 사이트', '무료 웹툰 사이트 추천', '무료 웹툰 사이트 모음',
    '무료 웹툰 사이트 TOP 3', '무료 웹툰 사이트 주소',
    '뉴토끼', '늑대닷컴', '툰코', '무료 만화 사이트', '짭토끼',
  ],
  openGraph: {
    title: '무료 웹툰 사이트 TOP 3 — 지금 접속 가능한 최신 주소',
    description:
      '짭토끼가 실시간 검증한 무료 웹툰 사이트 TOP 3 최신 주소를 안내합니다.',
    type: 'article',
    locale: 'ko_KR',
    url: `${SITE_URL}/free-webtoon`,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: '짭토끼 로고' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `무료 웹툰 사이트 TOP 3 — 지금 접속 가능한 최신 주소 (${DATE_LABEL})`,
  description:
    '짭토끼가 실시간 검증한 무료 웹툰 사이트 TOP 3의 최신 접속 주소를 안내합니다.',
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
    '@id': `${SITE_URL}/free-webtoon`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '무료 웹툰 사이트', item: `${SITE_URL}/free-webtoon` },
  ],
};


export default function FreeWebtoonPage() {
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
            <li><a href="#intro">무료 웹툰 사이트</a></li>
            <li><a href="#top3">TOP 3 상세 소개</a></li>
            <li><a href="#comparison">사이트 비교</a></li>
            <li><a href="#address">최신 주소 확인</a></li>
            <li><a href="#danger">피싱 사이트 주의</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Article */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 무료 웹툰 사이트
          </nav>

          <h1 id="intro">
            무료 웹툰 사이트 TOP 3 — 지금 접속 가능한 최신 주소 ({DATE_LABEL})
          </h1>

          <p>
            <strong>무료 웹툰 사이트</strong>를 찾고 계신가요? 이 페이지에서는
            {DATE_LABEL} 현재 <strong>접속 가능한 무료 웹툰 사이트</strong>의
            최신 주소를 안내합니다. 무료 웹툰 사이트는 도메인 차단으로 인해
            주소가 수시로 바뀌기 때문에, 검색에서 찾은 주소가 이미 막힌 경우가
            많습니다.
          </p>

          <p>
            <strong>짭토끼</strong>는 국내 주요 무료 웹툰 사이트를{' '}
            <strong>5분 간격으로 실시간 검증</strong>하여, 현재 접속 가능한
            최신 주소만을 안내합니다. 아래에서 무료 웹툰 사이트 TOP 3를
            확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">📖 무료 웹툰 사이트 TOP 3 ({DATE_LABEL})</p>
            <p className="callout__body">
              <strong>1. 뉴토끼</strong> — 국내 최대, 최신 연재작 가장 빠른 업데이트<br />
              <strong>2. 늑대닷컴</strong> — 다양한 장르, 안정적 서버 운영<br />
              <strong>3. 툰코</strong> — 깔끔한 UI, 모바일 최적화<br /><br />
              👉 <Link href="/">짭토끼에서 최신 주소 바로 확인하기</Link>
            </p>
            <NewtokiInlineButton />
          </div>

          {/* ===== TOP 3 상세 ===== */}
          <h2 id="top3">무료 웹툰 사이트 TOP 3 상세 소개</h2>

          <h3>🥇 뉴토끼 — 국내 최대 무료 웹툰 사이트</h3>
          <p>
            <strong>뉴토끼</strong>는 국내에서 가장 많은 이용자를 보유한
            무료 웹툰 사이트입니다. 네이버 웹툰, 카카오페이지 연재작부터
            일본 만화 번역본까지 폭넓은 라이브러리를 갖추고 있습니다. 신작
            업데이트 속도가 업계 최고 수준이며, 작품 검색과 장르 분류
            기능이 잘 갖춰져 있습니다.
          </p>
          <p>
            현재 뉴토끼 최신 접속 주소는{' '}
            <Link href="/">짭토끼 메인 페이지</Link>에서 실시간으로 확인할
            수 있습니다.
          </p>

          <h3>🥈 늑대닷컴 — 장르 다양성의 무료 웹툰 사이트</h3>
          <p>
            <strong>늑대닷컴</strong>은 로맨스, 액션, 판타지, BL, 성인 등
            다양한 장르를 고루 보유한 무료 웹툰 사이트입니다. 서버 안정성이
            뛰어나 접속이 끊기는 일이 드물고, 뉴토끼가 접속 불가일 때 가장
            많이 찾는 대안 사이트입니다.
          </p>

          <h3>🥉 툰코 — 모바일 최적화된 무료 웹툰 사이트</h3>
          <p>
            <strong>툰코</strong>는 깔끔하고 직관적인 인터페이스가 특징인
            무료 웹툰 사이트입니다. 특히 모바일에서의 로딩 속도와 사용성이
            우수하여, 스마트폰으로 웹툰을 보는 사용자들에게 높은 만족도를
            제공합니다.
          </p>

          {/* ===== 비교표 ===== */}
          <h2 id="comparison">무료 웹툰 사이트 비교표</h2>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>무료 웹툰 사이트</th>
                  <th>작품 수</th>
                  <th>업데이트 속도</th>
                  <th>서버 안정성</th>
                  <th>모바일 최적화</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>뉴토끼</strong></td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>늑대닷컴</strong></td>
                  <td>⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>툰코</strong></td>
                  <td>⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            각 무료 웹툰 사이트의 <strong>실시간 접속 상태와 정확한 최신
            주소</strong>는 <Link href="/">짭토끼 메인 페이지</Link>에서
            확인할 수 있습니다.
          </p>

          {/* ===== 최신 주소 확인 ===== */}
          <h2 id="address">무료 웹툰 사이트 최신 주소 확인 방법</h2>

          <p>
            무료 웹툰 사이트 주소는 도메인 차단으로 <strong>예고 없이
            변경</strong>됩니다. 검색에서 찾은 주소가 이미 막혔거나 피싱
            사이트일 수 있으므로, 항상 <strong>짭토끼</strong>에서 검증된
            최신 주소를 확인하세요.
          </p>

          <ol>
            <li><Link href="/">짭토끼 메인 페이지</Link>에 접속</li>
            <li><strong>웹툰</strong> 카테고리에서 원하는 사이트 확인</li>
            <li>🟢 <strong>LIVE</strong> = 접속 가능 / 🔴 <strong>DOWN</strong> = 접속 불가</li>
            <li>사이트명 클릭 → 최신 주소로 바로 이동</li>
          </ol>

          <p>
            짭토끼는 <strong>5분 간격 자동 헬스체크</strong>로 도메인 변경을
            즉시 감지합니다. 텔레그램 알림을 구독하면 주소 변경 시 실시간
            알림도 받을 수 있습니다.
          </p>

          {/* ===== 피싱 주의 ===== */}
          <h2 id="danger">가짜 무료 웹툰 사이트 주의</h2>

          <p>
            &quot;무료 웹툰 사이트&quot;를 검색하면 수많은 결과가 나오지만,
            상당수가 <strong>피싱 사이트</strong>이거나{' '}
            <strong>악성코드를 유포</strong>하는 위험한 페이지입니다.
          </p>

          <ul>
            <li>
              <strong>🚨 피싱 사이트</strong> — 유명 웹툰 사이트 디자인을
              그대로 복제하여 로그인 정보 탈취
            </li>
            <li>
              <strong>🦠 악성 스크립트</strong> — 접속만으로 기기에 악성
              코드가 설치되는 위험
            </li>
            <li>
              <strong>📱 개인정보 수집</strong> — 가짜 &quot;본인인증&quot;
              페이지로 개인정보 유출 유도
            </li>
          </ul>

          <div className="callout">
            <p className="callout__title">✅ 안전한 접속 원칙</p>
            <p className="callout__body">
              검색에서 무료 웹툰 사이트 주소를 직접 찾아 접속하지 마세요.{' '}
              <strong><Link href="/">짭토끼</Link></strong>에서 HTTP 상태,
              SSL 인증서가 검증된 주소를 통해 접속하는 것이{' '}
              <strong>가장 안전한 방법</strong>입니다.
            </p>
          </div>

          {/* ===== FAQ ===== */}
          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="무료 웹툰 사이트는 어디인가요?" defaultOpen>
              {DATE_LABEL} 기준, 짭토끼가 검증한 무료 웹툰 사이트 TOP 3는
              뉴토끼(국내 최대), 늑대닷컴(다양한 장르), 툰코(모바일
              최적화)입니다. 짭토끼에서 각 사이트의 접속 가능한 최신 주소를
              실시간으로 확인할 수 있습니다.
            </FAQItem>
            <FAQItem question="무료 웹툰 사이트가 왜 접속이 안 되나요?">
              저작권 법적 조치로 도메인이 차단된 경우가 대부분입니다.
              사이트가 없어진 것이 아니라 새 도메인으로 이전한 것이며,
              짭토끼에서 새 주소를 자동 감지하여 안내합니다.
            </FAQItem>
            <FAQItem question="무료 웹툰 사이트의 최신 주소는 어디서 확인하나요?">
              짭토끼 메인 페이지의 웹툰 카테고리에서 각 사이트의 실시간
              접속 상태와 최신 주소를 확인할 수 있습니다. 5분 간격 자동
              검증으로 항상 최신 정보를 제공합니다.
            </FAQItem>
            <FAQItem question="무료 웹툰 사이트 이용 시 안전한가요?">
              검색에서 직접 찾은 주소는 피싱이나 악성코드 위험이 있습니다.
              짭토끼를 통해 검증된 주소로 접속하는 것이 가장 안전합니다.
            </FAQItem>
            <FAQItem question="뉴토끼 말고 다른 무료 웹툰 사이트도 있나요?">
              늑대닷컴과 툰코가 뉴토끼 다음으로 인기 있는 무료 웹툰
              사이트입니다. 뉴토끼가 접속 불가일 때 대안으로 이용할 수
              있으며, 짭토끼에서 모든 사이트의 접속 상태를 한눈에 확인
              가능합니다.
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
