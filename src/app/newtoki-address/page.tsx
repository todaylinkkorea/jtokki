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
  title: `뉴토끼 최신 주소 — 지금 접속 가능한 주소 확인 (${DATE_LABEL})`,
  description:
    `뉴토끼 최신 주소를 찾고 계신가요? ${DATE_LABEL} 현재 접속 가능한 뉴토끼 최신 도메인을 짭토끼가 실시간으로 검증합니다. 뉴토끼 최신 주소, 뉴토끼 새주소, 뉴토끼 바로가기.`,
  alternates: { canonical: `${SITE_URL}/newtoki-address` },
  keywords: [
    '뉴토끼 최신 주소', '뉴토끼 최신주소', '뉴토끼 새주소', '뉴토끼 주소',
    '뉴토끼 바로가기', '뉴토끼 접속', '뉴토끼 도메인', '짭토끼',
  ],
  openGraph: {
    title: '뉴토끼 최신 주소 — 지금 접속 가능한 주소 확인',
    description: '뉴토끼 최신 주소가 변경되었나요? 짭토끼에서 실시간 검증된 최신 주소를 안내합니다.',
    type: 'article',
    locale: 'ko_KR',
    url: `${SITE_URL}/newtoki-address`,
    images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: '짭토끼 로고' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: `뉴토끼 최신 주소 — 지금 접속 가능한 주소 확인 (${DATE_LABEL})`,
  description: '뉴토끼 최신 접속 주소를 짭토끼에서 실시간으로 검증하여 안내합니다.',
  image: `${SITE_URL}/logo.png`,
  author: { '@type': 'Organization', name: '짭토끼', url: SITE_URL, sameAs: [FACEBOOK_URL, GITHUB_URL] },
  publisher: { '@type': 'Organization', name: '짭토끼', url: SITE_URL },
  datePublished: '2026-05-13', dateModified: TODAY_ISO,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/newtoki-address` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: '뉴토끼 최신 주소', item: `${SITE_URL}/newtoki-address` },
  ],
};

export default function NewtokiAddressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="hero" style={{ padding: '32px 20px 24px' }}>
        <div className="container">
          <div className="hero__top">
            <Link href="/" className="hero__logo">
              <BunnyLogo size={42} />
              <span className="hero__logo-text">짭토끼</span>
            </Link>
            <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>← 홈으로</Link>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <aside className="article-toc">
          <p className="article-toc__title">목차</p>
          <ul className="article-toc__list">
            <li><a href="#intro">뉴토끼 최신 주소</a></li>
            <li><a href="#why">주소가 바뀌는 이유</a></li>
            <li><a href="#how">최신 주소 확인법</a></li>
            <li><a href="#danger">피싱 사이트 주의</a></li>
            <li><a href="#history">주소 변경 이력</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 뉴토끼 최신 주소
          </nav>

          <h1 id="intro">뉴토끼 최신 주소 — 지금 접속 가능한 주소 확인 ({DATE_LABEL})</h1>

          <p>
            <strong>뉴토끼 최신 주소</strong>를 찾고 계신가요? 뉴토끼는 도메인 차단으로 인해 주소가 수시로 변경됩니다.
          </p>
          <p>
            <strong>짭토끼</strong>는 뉴토끼의 접속 상태를 <strong>5분 간격으로 자동 검증</strong>하여,
            현재 접속 가능한 뉴토끼 최신 주소를 실시간으로 안내합니다.
          </p>

          <div className="callout">
            <p className="callout__title">🔗 뉴토끼 최신 주소 확인</p>
            <p className="callout__body">
              뉴토끼 최신 주소는 수시로 변경됩니다. <Link href="/">짭토끼 메인 페이지</Link>의 웹툰 카테고리에서{' '}
              <strong>현재 접속 가능한 최신 주소</strong>를 실시간으로 확인하세요.
            </p>
            <NewtokiInlineButton />
          </div>

          <h2 id="why">뉴토끼 최신 주소가 계속 바뀌는 이유</h2>
          <p>뉴토끼는 국내에서 가장 많은 사용자를 보유한 웹툰 사이트입니다. 하지만 저작권 관련 법적 조치로 인해 <strong>도메인이 예고 없이 차단</strong>되는 일이 빈번합니다.</p>
          <ul>
            <li><strong>ISP DNS 차단</strong> — 국내 통신사가 DNS 레벨에서 뉴토끼 도메인을 차단</li>
            <li><strong>도메인 등록 취소</strong> — 저작권 신고로 인해 도메인 레지스트라가 등록을 정지</li>
            <li><strong>호스팅 서비스 중단</strong> — DMCA 등 법적 통지로 서버 호스팅이 해지됨</li>
          </ul>
          <p>이러한 이유로 뉴토끼의 주소는 수주~수개월 단위로 변경되며, 검색 엔진의 인덱싱보다 변경이 더 빠르기 때문에 <strong>짭토끼의 실시간 모니터링</strong>이 가장 정확한 확인 방법입니다.</p>

          <h2 id="how">뉴토끼 최신 주소 확인하는 가장 정확한 방법</h2>
          <ol>
            <li>이 페이지 상단의 <strong>뉴토끼 바로가기 버튼</strong>을 클릭합니다</li>
            <li>또는 <Link href="/">짭토끼 메인 페이지</Link>에 접속합니다</li>
            <li><strong>웹툰</strong> 카테고리에서 뉴토끼를 찾습니다</li>
            <li>🟢 <strong>LIVE</strong> 상태인지 확인 후 최신 주소를 클릭합니다</li>
          </ol>

          <h2 id="danger">&quot;뉴토끼 최신 주소&quot; 검색 시 피싱 주의</h2>
          <p>&quot;뉴토끼 최신 주소&quot;, &quot;뉴토끼 새주소&quot;를 검색하면 수많은 결과가 나오지만, 이 중 상당수는 <strong>피싱 사이트</strong>이거나 <strong>악성코드를 유포</strong>하는 위험한 링크입니다.</p>
          <ul>
            <li><strong>🚨 사칭 사이트</strong> — 뉴토끼와 동일한 디자인으로 위장하여 로그인 정보를 탈취</li>
            <li><strong>🦠 악성코드</strong> — &quot;뉴토끼 최신주소&quot;를 미끼로 악성 스크립트를 심은 페이지</li>
            <li><strong>💸 광고 리다이렉트</strong> — 실제 뉴토끼가 아닌 광고 페이지로 무한 리다이렉트</li>
          </ul>
          <div className="callout">
            <p className="callout__title">✅ 안전한 접속 원칙</p>
            <p className="callout__body">
              검색에서 뉴토끼 최신 주소를 직접 찾아 접속하지 마세요. <strong>짭토끼</strong>에서 검증된 주소를 통해 접속하는 것이 <strong>가장 안전한 방법</strong>입니다.
            </p>
          </div>

          <h2 id="history">뉴토끼 최신 주소 변경 이력</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead><tr><th>변경일</th><th>이전 주소</th><th>새 주소</th></tr></thead>
              <tbody>
                <tr><td>2026-05-18</td><td>sbxh1.com</td><td><strong>sbxh2.com</strong></td></tr>
                <tr><td>2026-05-12</td><td>ntk01.com</td><td>sbxh1.com</td></tr>
                <tr><td>2026-05-11</td><td>newtoki322.com</td><td>ntk01.com</td></tr>
                <tr><td>2026-04-28</td><td>newtoki315.com</td><td>newtoki322.com</td></tr>
                <tr><td>2026-04-14</td><td>newtoki308.com</td><td>newtoki315.com</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="뉴토끼 최신 주소는 어디인가요?" defaultOpen>
              뉴토끼 최신 주소는 도메인 차단으로 수시로 변경됩니다. 짭토끼 메인 페이지의 웹툰 카테고리에서 현재 접속 가능한 최신 주소를 실시간으로 확인할 수 있습니다.
            </FAQItem>
            <FAQItem question="뉴토끼 주소가 자주 바뀌는 이유는?">
              저작권 관련 법적 조치로 도메인이 차단되면 운영자가 새 도메인으로 이전합니다. 짭토끼는 이러한 변경을 자동으로 감지합니다.
            </FAQItem>
            <FAQItem question="뉴토끼 최신 주소를 안전하게 확인하는 방법은?">
              검색에서 직접 찾은 주소는 피싱 사이트일 수 있습니다. 짭토끼에서 검증된 주소를 통해 접속하는 것이 가장 안전합니다.
            </FAQItem>
            <FAQItem question="뉴토끼 주소 변경 알림을 받을 수 있나요?">
              짭토끼의 텔레그램 알림을 구독하면 뉴토끼 도메인이 변경될 때 실시간으로 새 주소를 알림받을 수 있습니다.
            </FAQItem>
          </div>

          <div className="article-cta">
            <p className="article-cta__text">짭토끼에서 뉴토끼 최신 주소를 지금 바로 확인하세요</p>
            <Link href="/" className="article-cta__link">짭토끼 바로가기 →</Link>
          </div>
        </article>
      </div>
    </>
  );
}
