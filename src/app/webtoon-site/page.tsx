import type { Metadata } from 'next';
import { SITE_URL, FACEBOOK_URL, GITHUB_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiInlineButton } from '@/components/NewtokiInlineButton';

export const metadata: Metadata = {
  title: '웹툰 사이트 추천 TOP 3 — 지금 접속 가능한 최신 주소 (2026년 5월)',
  description:
    '지금 바로 접속 가능한 웹툰 사이트 TOP 3 최신 주소 안내. 뉴토끼, 늑대닷컴, 툰코의 실시간 접속 상태와 최신 도메인을 짭토끼가 5분 간격으로 검증합니다. 웹툰 사이트 추천.',
  alternates: { canonical: `${SITE_URL}/webtoon-site` },
  keywords: [
    '웹툰 사이트', '웹툰 사이트 추천', '웹툰 사이트 순위', '웹툰 사이트 TOP 3',
    '뉴토끼', '늑대닷컴', '툰코', '웹툰 최신 주소',
    '웹툰 사이트 주소', '웹툰 보는 곳', '짭토끼',
  ],
  openGraph: {
    title: '웹툰 사이트 추천 TOP 3 — 지금 접속 가능한 최신 주소',
    description:
      '뉴토끼, 늑대닷컴, 툰코 — 접속 가능한 웹툰 사이트 최신 주소를 짭토끼가 실시간 검증합니다.',
    type: 'article',
    locale: 'ko_KR',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '웹툰 사이트 추천 TOP 3 — 지금 접속 가능한 최신 주소 (2026년 5월)',
  description:
    '뉴토끼, 늑대닷컴, 툰코 등 접속 가능한 웹툰 사이트의 최신 주소를 실시간으로 안내합니다.',
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
  dateModified: '2026-05-11',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/webtoon-site`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '웹툰 사이트 추천', item: `${SITE_URL}/webtoon-site` },
  ],
};


export default function WebtoonSitePage() {
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
            <li><a href="#intro">웹툰 사이트 TOP 3</a></li>
            <li><a href="#ranking">순위 비교</a></li>
            <li><a href="#newtoki">1위: 뉴토끼</a></li>
            <li><a href="#nukdae">2위: 늑대닷컴</a></li>
            <li><a href="#toonkor">3위: 툰코</a></li>
            <li><a href="#how-to">최신 주소 확인법</a></li>
            <li><a href="#danger">피싱 주의</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Article */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 웹툰 사이트 추천
          </nav>

          <h1 id="intro">
            웹툰 사이트 추천 TOP 3 — 지금 접속 가능한 최신 주소 (2026년 5월)
          </h1>

          <p>
            <strong>웹툰 사이트</strong>를 찾고 계신가요? 지금 이 순간 접속
            가능한 웹툰 사이트의 <strong>최신 주소</strong>를 안내합니다.
            웹툰 사이트는 도메인이 자주 변경되기 때문에, 검색 결과에서 찾은
            주소가 이미 막혀 있는 경우가 많습니다.
          </p>

          <p>
            <strong>짭토끼</strong>는 주요 웹툰 사이트를 <strong>5분
            간격으로 자동 검증</strong>하여, 현재 접속 가능한 최신 주소만을
            제공합니다. 아래에서 2026년 5월 기준 웹툰 사이트 TOP 3를
            확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">📖 웹툰 사이트 TOP 3 — 2026년 5월 기준</p>
            <p className="callout__body">
              <strong>1위. 뉴토끼</strong> — 국내 최대, 최신 연재작 가장 빠른 업데이트<br />
              <strong>2위. 늑대닷컴</strong> — 다양한 장르, 안정적인 서버<br />
              <strong>3위. 툰코</strong> — 깔끔한 UI, 모바일 최적화 우수<br /><br />
              👉 <Link href="/">짭토끼에서 최신 주소 바로 확인하기</Link>
            </p>
            <NewtokiInlineButton />
          </div>

          {/* ===== 순위 비교 ===== */}
          <h2 id="ranking">웹툰 사이트 순위 비교 (2026년 5월)</h2>

          <p>
            짭토끼는 서버 응답 속도, 최근 30일 업타임, 사용자 추천수를
            종합적으로 분석하여 <strong>객관적인 데이터 기반</strong>으로 웹툰
            사이트 순위를 선정합니다. 광고비와 무관합니다.
          </p>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>순위</th>
                  <th>사이트</th>
                  <th>특징</th>
                  <th>접속 상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1위</td>
                  <td><strong>뉴토끼</strong></td>
                  <td>최대 작품 수, 빠른 업데이트</td>
                  <td>🟢 LIVE</td>
                </tr>
                <tr>
                  <td>2위</td>
                  <td><strong>늑대닷컴</strong></td>
                  <td>다양한 장르, 안정적 서버</td>
                  <td>🟢 LIVE</td>
                </tr>
                <tr>
                  <td>3위</td>
                  <td><strong>툰코</strong></td>
                  <td>깔끔한 UI, 모바일 최적화</td>
                  <td>🟢 LIVE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            각 사이트의 <strong>정확한 최신 주소와 응답 속도(ms)</strong>는{' '}
            <Link href="/">짭토끼 메인 페이지</Link>에서 실시간으로 확인할 수
            있습니다.
          </p>

          {/* ===== 1위: 뉴토끼 ===== */}
          <h2 id="newtoki">1위: 뉴토끼 — 국내 최대 웹툰 사이트</h2>

          <p>
            <strong>뉴토끼</strong>는 국내에서 가장 많은 사용자를 보유한
            웹툰 사이트입니다. 최신 연재 웹툰부터 완결 작품까지 방대한
            라이브러리를 갖추고 있으며, 신작 업데이트 속도가 가장 빠릅니다.
          </p>

          <p>
            다만 도메인 차단이 빈번하여 주소가 자주 변경됩니다. 현재 뉴토끼
            최신 주소는 <Link href="/">짭토끼 메인 페이지</Link>의 웹툰
            카테고리에서 실시간으로 확인할 수 있습니다.
          </p>

          {/* ===== 2위: 늑대닷컴 ===== */}
          <h2 id="nukdae">2위: 늑대닷컴 — 다양한 장르의 웹툰 사이트</h2>

          <p>
            <strong>늑대닷컴</strong>은 로맨스, 액션, 판타지 등 다양한 장르를
            고루 보유한 웹툰 사이트입니다. 서버 안정성이 뛰어나 접속이
            끊기는 일이 드물며, 뉴토끼의 대체 사이트로 많은 사용자들이
            이용하고 있습니다.
          </p>

          {/* ===== 3위: 툰코 ===== */}
          <h2 id="toonkor">3위: 툰코 — 모바일에 최적화된 웹툰 사이트</h2>

          <p>
            <strong>툰코</strong>는 깔끔한 인터페이스와 빠른 페이지 로딩이
            특징인 웹툰 사이트입니다. 특히 모바일 환경에서의 사용성이
            뛰어나, 스마트폰으로 웹툰을 보는 사용자들에게 인기가 많습니다.
          </p>

          {/* ===== 최신 주소 확인법 ===== */}
          <h2 id="how-to">웹툰 사이트 최신 주소 확인하는 방법</h2>

          <p>
            웹툰 사이트의 주소는 도메인 차단으로 인해{' '}
            <strong>예고 없이 변경</strong>됩니다. 검색 엔진에서 찾은 주소가
            이미 만료되었거나, 피싱 사이트일 수 있으므로 주의가 필요합니다.
          </p>

          <p>
            <strong>가장 안전하고 빠른 방법</strong>은 짭토끼를 이용하는
            것입니다:
          </p>

          <ol>
            <li><Link href="/">짭토끼 메인 페이지</Link>에 접속합니다</li>
            <li><strong>웹툰</strong> 카테고리 카드를 찾습니다</li>
            <li>🟢 <strong>LIVE</strong> 표시된 사이트의 최신 주소를 클릭합니다</li>
            <li>응답 속도(ms)로 현재 서버 상태를 확인합니다</li>
          </ol>

          <p>
            짭토끼는 <strong>5분 간격</strong>으로 모든 웹툰 사이트를 자동
            검증합니다. 도메인이 변경되면 자동으로 감지하여 즉시
            업데이트하므로, 항상 접속 가능한 최신 주소를 확인할 수 있습니다.
          </p>

          {/* ===== 피싱 주의 ===== */}
          <h2 id="danger">웹툰 사이트 검색 시 주의사항</h2>

          <p>
            &quot;웹툰 사이트&quot;를 검색하면 수많은 결과가 나오지만, 이 중
            상당수는 <strong>위험한 사이트</strong>입니다.
          </p>

          <ul>
            <li>
              <strong>🚨 피싱 사이트</strong> — 유명 웹툰 사이트와 동일한
              디자인으로 위장하여 로그인 정보 탈취
            </li>
            <li>
              <strong>🦠 악성코드 유포</strong> — 접속만으로 악성 스크립트가
              실행되어 기기 감염
            </li>
            <li>
              <strong>💸 광고 리다이렉트</strong> — 실제 웹툰 사이트가 아닌
              광고 페이지로 무한 리다이렉트
            </li>
          </ul>

          <p>
            <strong>짭토끼</strong>는 HTTP 상태 코드, SSL 인증서, 응답 속도를
            자동으로 검증하여 위험한 사이트를 걸러냅니다. 검색에서 직접
            찾는 것보다{' '}
            <strong>짭토끼를 통해 접속하는 것이 가장 안전</strong>합니다.
          </p>

          {/* ===== FAQ ===== */}
          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="지금 접속 가능한 웹툰 사이트는 어디인가요?" defaultOpen>
              2026년 5월 현재, 짭토끼가 실시간 검증한 접속 가능한 웹툰
              사이트 TOP 3는 뉴토끼, 늑대닷컴, 툰코입니다. 짭토끼 메인
              페이지에서 각 사이트의 최신 주소와 접속 상태를 실시간으로
              확인할 수 있습니다.
            </FAQItem>
            <FAQItem question="웹툰 사이트 주소가 자주 바뀌는 이유는?">
              저작권 관련 법적 조치로 도메인이 차단되면 새 도메인으로
              이전합니다. 짭토끼는 5분 간격으로 자동 헬스체크를 수행하여
              도메인 변경을 실시간으로 감지하고, 항상 최신 접속 주소를
              제공합니다.
            </FAQItem>
            <FAQItem question="웹툰 사이트 순위는 어떻게 정해지나요?">
              서버 응답 속도, 최근 30일 업타임, 사용자 추천수를 종합적으로
              반영합니다. 광고비와 무관하게 객관적인 데이터만으로 순위가
              결정됩니다.
            </FAQItem>
            <FAQItem question="검색에서 찾은 웹툰 사이트 주소가 안전한가요?">
              검색 결과에는 피싱 사이트나 악성코드 유포 링크가 섞여 있어
              위험합니다. 짭토끼는 HTTP 상태, SSL 인증서, 응답 속도를
              자동으로 검증하여 안전한 주소만 제공합니다.
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
              짭토끼에서 웹툰 사이트 최신 주소를 지금 바로 확인하세요
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
