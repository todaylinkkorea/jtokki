import type { Metadata } from 'next';
import { SITE_URL, FACEBOOK_URL, X_URL, GITHUB_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiModal } from '@/components/NewtokiModal';

export const metadata: Metadata = {
  title: '짭토끼 — 뉴토끼 최신 주소를 찾는 가장 안전한 방법 (2026)',
  description:
    '짭토끼에서 뉴토끼 최신 주소를 실시간으로 확인하세요. 뉴토끼 서비스 종료 후 안전한 접속 주소를 짭토끼가 검증하여 제공합니다. 짭토끼 주소, 짭토끼 바로가기.',
  alternates: { canonical: `${SITE_URL}/about` },
  keywords: [
    '짭토끼', '짭토끼 주소', '짭토끼 바로가기', '짭토끼 사이트',
    '짭토끼 뉴토끼', '짭토끼 링크', '뉴토끼 짭토끼',
    '뉴토끼 최신주소', '뉴토끼 새주소', '뉴토끼 대체',
  ],
  openGraph: {
    title: '짭토끼 — 뉴토끼 최신 주소를 찾는 가장 안전한 방법',
    description:
      '뉴토끼가 닫혔다면? 짭토끼에서 검증된 최신 주소를 확인하세요.',
    type: 'article',
    locale: 'ko_KR',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '짭토끼 — 뉴토끼 최신 주소를 찾는 가장 안전한 방법 (2026)',
  description:
    '뉴토끼 서비스 종료 후 짭토끼에서 실시간 검증된 최신 접속 주소를 확인하는 방법을 안내합니다.',
  author: {
    '@type': 'Organization',
    name: '짭토끼',
    url: SITE_URL,
    sameAs: [FACEBOOK_URL, X_URL, GITHUB_URL],
  },
  publisher: {
    '@type': 'Organization',
    name: '짭토끼',
    url: SITE_URL,
  },
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
    { '@type': 'ListItem', position: 2, name: '짭토끼 소개', item: `${SITE_URL}/about` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '짭토끼가 뭔가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼는 뉴토끼를 비롯한 주요 웹툰·드라마·커뮤니티 사이트의 최신 접속 주소를 실시간으로 검증하여 안내하는 서비스입니다. 뉴토끼 서비스가 종료되거나 도메인이 변경될 때, 짭토끼에서 안전한 최신 주소를 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼에서 뉴토끼 주소를 어떻게 확인하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '짭토끼 메인 페이지의 웹툰 카테고리에서 뉴토끼의 실시간 접속 상태(LIVE/CHANGED/DOWN)와 최신 주소를 확인할 수 있습니다. 도메인이 변경되면 자동으로 감지하여 즉시 업데이트됩니다.',
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
        text: '짭토끼는 HTTP 상태 코드, SSL 인증서, 응답 속도를 자동으로 검증합니다. 검색 엔진에서 직접 찾은 주소보다 짭토끼를 통해 접속하는 것이 피싱 위험을 줄이는 가장 안전한 방법입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '뉴토끼가 완전히 없어진 건가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '뉴토끼는 도메인 차단이나 법적 이슈로 기존 주소가 막히는 경우가 많지만, 새로운 도메인으로 이전하여 운영을 재개하는 경우가 대부분입니다. 짭토끼는 이러한 도메인 변경을 실시간으로 추적합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '짭토끼 말고 뉴토끼 주소를 찾는 다른 방법은?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '검색 엔진, SNS, 커뮤니티 등에서도 찾을 수 있지만, 피싱 사이트나 악성코드 유포 링크가 섞여 있어 위험합니다. 짭토끼는 자동화된 헬스체크로 검증된 주소만 제공하므로 가장 안전합니다.',
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
            <li><a href="#intro">짭토끼란?</a></li>
            <li><a href="#why">왜 짭토끼인가</a></li>
            <li><a href="#address">짭토끼 공식 주소</a></li>
            <li><a href="#how-to">사용법</a></li>
            <li><a href="#danger">피싱 주의</a></li>
            <li><a href="#comparison">vs 다른 방법</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </aside>

        {/* Article */}
        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼 소개
          </nav>

          <h1 id="intro">짭토끼 — 뉴토끼 최신 주소를 찾는 가장 안전한 방법</h1>

          <p>
            <strong>뉴토끼</strong>가 갑자기 접속이 안 된다면, 당신만 그런 것이
            아닙니다. 뉴토끼는 도메인 차단과 법적 이슈로 인해 기존 주소가 수시로
            막히고, 새 도메인으로 이전하는 일이 반복됩니다.
          </p>

          <p>
            이때 많은 사용자들이 검색하는 키워드가 바로{' '}
            <strong>&quot;짭토끼&quot;</strong>입니다.{' '}
            <strong>짭토끼</strong>는 뉴토끼를 포함한 주요 사이트의{' '}
            <strong>최신 접속 주소를 실시간으로 검증</strong>하여 안전하게 안내하는
            서비스입니다.
          </p>

          <div className="callout">
            <p className="callout__title">🐰 짭토끼를 검색하셨나요?</p>
            <p className="callout__body">
              짭토끼는 뉴토끼의 최신 주소를 가장 빠르고 안전하게 확인할 수 있는
              곳입니다. 검색 엔진에서 직접 찾은 주소는 피싱 사이트일 수 있으니,{' '}
              <Link href="/">짭토끼 메인 페이지</Link>에서 검증된 주소를
              확인하세요.
            </p>
          </div>

          <figure className="article-figure">
            <Image
              src="/images/about/jtokki-main-page.webp"
              alt="짭토끼 메인 페이지 - 뉴토끼 최신 주소를 실시간으로 확인할 수 있는 대시보드"
              width={960}
              height={540}
              className="article-figure__img"
              priority
            />
            <figcaption className="article-figure__caption">
              짭토끼 메인 페이지 — 뉴토끼를 포함한 모든 사이트의 실시간 상태 확인
            </figcaption>
          </figure>

          {/* ===== 왜 짭토끼인가 ===== */}
          <h2 id="why">뉴토끼가 닫혔을 때, 왜 짭토끼를 찾게 되나요?</h2>

          <p>
            뉴토끼는 국내에서 가장 많은 사용자를 보유한 웹툰 사이트입니다. 하지만
            저작권 관련 법적 조치로 인해{' '}
            <strong>도메인이 예고 없이 차단</strong>되는 일이 빈번합니다. 차단이
            발생하면 운영자는 새 도메인을 등록하고 서비스를 이전하는데, 이 과정에서
            사용자들은 새 주소를 알 방법이 없습니다.
          </p>

          <p>
            이런 상황에서 사용자들이 검색하게 되는 것이{' '}
            <strong>&quot;짭토끼&quot;</strong>, <strong>&quot;짭토끼 주소&quot;</strong>,{' '}
            <strong>&quot;짭토끼 바로가기&quot;</strong> 같은 키워드입니다.{' '}
            <strong>짭토끼</strong>는 바로 이 필요를 위해 존재합니다 — 뉴토끼의 최신
            접속 주소를 실시간으로 모니터링하고, 검증된 안전한 주소만을 안내합니다.
          </p>

          <ul>
            <li>
              <strong>ISP 레벨 차단</strong> — 국내 통신사가 DNS 단에서 도메인 차단
            </li>
            <li>
              <strong>도메인 레지스트라 정지</strong> — 저작권 신고로 도메인 등록 취소
            </li>
            <li>
              <strong>서버 호스팅 중단</strong> — DMCA 통지에 의한 호스팅 해지
            </li>
          </ul>

          <p>
            이런 이유로 뉴토끼의 주소는 수주~수개월 단위로 변경되며, 검색 엔진의
            인덱싱보다 변경이 더 빠르기 때문에{' '}
            <strong>짭토끼의 실시간 모니터링</strong>이 가장 정확한 확인 방법입니다.
          </p>

          {/* ===== 공식 주소 ===== */}
          <h2 id="address">짭토끼 공식 주소 및 바로가기</h2>

          <p>
            <strong>짭토끼</strong>의 공식 접속 주소는 아래와 같습니다. 짭토끼를
            사칭하는 사이트도 존재하므로, 반드시 아래 공식 주소를 확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">🔗 짭토끼 공식 주소</p>
            <p className="callout__body">
              <strong>짭토끼.com</strong> (
              <Link href="/">xn--h10bl69b7nf.com</Link>)<br /><br />
              이 외의 &quot;짭토끼&quot; 주소는 사칭 사이트일 수 있습니다.
              주소창의 자물쇠(🔒) 아이콘을 반드시 확인하세요.
            </p>
          </div>

          {/* ===== 사용법 ===== */}
          <h2 id="how-to">짭토끼에서 뉴토끼 최신 주소 확인하는 방법</h2>

          <p>
            짭토끼에서 뉴토끼의 최신 접속 주소를 확인하는 방법은 매우 간단합니다.
          </p>

          <ol>
            <li><Link href="/">짭토끼 메인 페이지</Link>에 접속합니다</li>
            <li><strong>웹툰</strong> 카테고리 카드를 찾습니다</li>
            <li>🟢 <strong>LIVE</strong> 표시된 뉴토끼 링크를 클릭합니다</li>
            <li>응답 속도(ms)로 현재 서버 상태를 확인합니다</li>
          </ol>

          <p>
            짭토끼는 각 사이트의 상태를 <strong>3가지 뱃지</strong>로 표시합니다:
          </p>
          <ul>
            <li>🟢 <strong>LIVE</strong> — 현재 정상 접속 가능</li>
            <li>🟡 <strong>CHANGED</strong> — 주소가 변경됨 (새 주소 자동 반영)</li>
            <li>🔴 <strong>DOWN</strong> — 현재 접속 불가</li>
          </ul>

          <figure className="article-figure">
            <Image
              src="/images/about/jtokki-status-badges.webp"
              alt="짭토끼 실시간 상태 모니터링 - LIVE, CHANGED, DOWN 상태 뱃지"
              width={960}
              height={720}
              className="article-figure__img"
              loading="lazy"
            />
            <figcaption className="article-figure__caption">
              LIVE · CHANGED · DOWN — 한눈에 보는 사이트 접속 상태
            </figcaption>
          </figure>

          <p>
            도메인이 변경(301/302 리다이렉트)되면 짭토끼가{' '}
            <strong>자동으로 감지</strong>하여 새 주소로 업데이트합니다. 텔레그램
            알림을 구독하면 즐겨찾기한 사이트의 주소 변경 시 실시간으로 알림을
            받을 수도 있습니다.
          </p>

          {/* ===== 피싱 위험 ===== */}
          <h2 id="danger">검색으로 뉴토끼 주소를 찾으면 위험한 이유</h2>

          <p>
            &quot;뉴토끼 주소&quot;, &quot;뉴토끼 새주소&quot;를 검색하면 수많은
            결과가 나오지만, 이 중 상당수는{' '}
            <strong>피싱 사이트</strong>이거나{' '}
            <strong>악성코드를 유포</strong>하는 위험한 링크입니다.
          </p>

          <ul>
            <li>
              <strong>🚨 피싱 사이트</strong> — 뉴토끼와 동일한 디자인으로
              위장하여 로그인 정보를 탈취
            </li>
            <li>
              <strong>🦠 악성코드 유포</strong> — 접속만으로 악성 스크립트가
              실행되어 기기 감염
            </li>
            <li>
              <strong>💸 광고 리다이렉트</strong> — 실제 사이트가 아닌 광고
              페이지로 무한 리다이렉트
            </li>
            <li>
              <strong>📱 개인정보 수집</strong> — 가짜 &quot;본인인증&quot; 페이지로
              개인정보 유출 유도
            </li>
          </ul>

          <p>
            <strong>짭토끼</strong>는 HTTP 상태 코드, SSL 인증서, 응답 속도를
            자동으로 검증하여 이러한 위험 사이트를 걸러냅니다. 검색 엔진에서 직접
            주소를 찾는 것보다{' '}
            <strong>짭토끼를 통해 접속하는 것이 가장 안전</strong>합니다.
          </p>

          {/* ===== 비교 ===== */}
          <h2 id="comparison">
            뉴토끼 주소를 찾는 방법 비교 — 왜 짭토끼가 가장 안전한가
          </h2>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>방법</th>
                  <th>위험도</th>
                  <th>정확도</th>
                  <th>속도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>검색 엔진</td>
                  <td>⚠️ 높음 (피싱 혼재)</td>
                  <td>❌ 낮음 (인덱싱 지연)</td>
                  <td>보통</td>
                </tr>
                <tr>
                  <td>SNS / 커뮤니티</td>
                  <td>⚠️ 높음 (검증 불가)</td>
                  <td>⚠️ 불확실</td>
                  <td>느림</td>
                </tr>
                <tr>
                  <td>기존 링크 모음</td>
                  <td>⚠️ 중간 (죽은 링크)</td>
                  <td>❌ 낮음 (수동 업데이트)</td>
                  <td>느림</td>
                </tr>
                <tr>
                  <td><strong>짭토끼</strong></td>
                  <td>✅ <strong>안전</strong> (자동 검증)</td>
                  <td>✅ <strong>높음</strong> (실시간)</td>
                  <td>✅ <strong>즉시</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="article-figure">
            <Image
              src="/images/about/jtokki-vs-link-sites.webp"
              alt="짭토끼와 기존 방법 비교 - 실시간 헬스체크, 자동 도메인 감지"
              width={960}
              height={540}
              className="article-figure__img"
              loading="lazy"
            />
            <figcaption className="article-figure__caption">
              짭토끼 vs 기존 방법 — 검증된 주소 vs 위험한 검색 결과
            </figcaption>
          </figure>

          <p>
            짭토끼는 <strong>5분 간격의 자동 헬스체크</strong>로 뉴토끼를 포함한
            27개 이상의 사이트를 실시간 모니터링합니다. 도메인이 변경되면 자동으로
            감지하여 업데이트하므로, 항상 최신이고 안전한 주소를 제공합니다.
          </p>

          {/* ===== FAQ ===== */}
          <h2 id="faq">짭토끼 자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼가 뭔가요?" defaultOpen>
              짭토끼는 뉴토끼를 비롯한 주요 웹툰·드라마·커뮤니티 사이트의 최신
              접속 주소를 실시간으로 검증하여 안내하는 서비스입니다. 뉴토끼
              서비스가 종료되거나 도메인이 변경될 때, 짭토끼에서 안전한 최신 주소를
              확인할 수 있습니다.
            </FAQItem>
            <FAQItem question="짭토끼에서 뉴토끼 주소를 어떻게 확인하나요?">
              짭토끼 메인 페이지의 웹툰 카테고리에서 뉴토끼의 실시간 접속
              상태(LIVE/CHANGED/DOWN)와 최신 주소를 확인할 수 있습니다. 도메인이
              변경되면 자동으로 감지하여 즉시 업데이트됩니다.
            </FAQItem>
            <FAQItem question="짭토끼 공식 주소는 어디인가요?">
              짭토끼 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com)입니다. 이 외의
              주소는 사칭 사이트일 수 있으니 반드시 공식 주소를 통해 접속하세요.
            </FAQItem>
            <FAQItem question="짭토끼는 안전한가요?">
              짭토끼는 HTTP 상태 코드, SSL 인증서, 응답 속도를 자동으로
              검증합니다. 검색 엔진에서 직접 찾은 주소보다 짭토끼를 통해 접속하는
              것이 피싱 위험을 줄이는 가장 안전한 방법입니다.
            </FAQItem>
            <FAQItem question="뉴토끼가 완전히 없어진 건가요?">
              뉴토끼는 도메인 차단이나 법적 이슈로 기존 주소가 막히는 경우가
              많지만, 새로운 도메인으로 이전하여 운영을 재개하는 경우가
              대부분입니다. 짭토끼는 이러한 도메인 변경을 실시간으로 추적합니다.
            </FAQItem>
            <FAQItem question="짭토끼 말고 뉴토끼 주소를 찾는 다른 방법은?">
              검색 엔진, SNS, 커뮤니티 등에서도 찾을 수 있지만, 피싱 사이트나
              악성코드 유포 링크가 섞여 있어 위험합니다. 짭토끼는 자동화된
              헬스체크로 검증된 주소만 제공하므로 가장 안전합니다.
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
                <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
              짭토끼에서 뉴토끼 최신 주소를 지금 바로 확인하세요
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
