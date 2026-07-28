import type { Metadata } from 'next';
import { SITE_URL, FACEBOOK_URL, GITHUB_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiInlineButton } from '@/components/NewtokiInlineButton';

/** 서버 렌더링 시점의 "YYYY년 M월" 문자열을 반환 */
function getDateLabel(): string {
  const now = new Date();
  return `${now.getFullYear()}년 ${now.getMonth() + 1}월`;
}

/** 오늘 날짜를 "YYYY-MM-DD" 형식으로 반환 */
function getTodayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function generateMetadata(): Metadata {
  const dateLabel = getDateLabel();
  const titleText = `짭토끼 최신 주소 — 공식 접속 주소 안내 (${dateLabel})`;

  return {
    // 제목이 이미 "짭토끼"로 시작 — 레이아웃 브랜드 접미사 생략
    title: { absolute: titleText },
    description:
      `짭토끼 최신 주소를 찾고 계신가요? 짭토끼 공식 접속 주소와 함께 뉴토끼 최신 도메인을 실시간 검증하여 안내합니다. 안전한 짭토끼 주소 및 짭토끼 바로가기 링크를 확인하고 피싱 위험 없이 사이트를 이용하세요.`,
    alternates: { canonical: `${SITE_URL}/jtokki-address` },
    keywords: [
      '짭토끼 최신 주소', '짭토끼 주소', '짭토끼 바로가기', '짭토끼 사이트',
      '짭토끼 최신주소', '짭토끼 공식', '짭토끼 링크',
      '뉴토끼 짭토끼', '짭토끼 뉴토끼', '짭토끼',
    ],
    openGraph: {
      title: titleText,
      description: '짭토끼 공식 주소와 뉴토끼 최신 주소를 안내합니다.',
      type: 'article',
      locale: 'ko_KR',
      url: `${SITE_URL}/jtokki-address`,
      images: [
        { url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: '짭토끼 로고' },
      ],
    },
  };
}

export default function JtokkiAddressPage() {
  const dateLabel = getDateLabel();
  const todayISO = getTodayISO();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `짭토끼 최신 주소 — 공식 접속 주소 안내 (${dateLabel})`,
    description: '짭토끼 공식 접속 주소와 뉴토끼 최신 주소를 안내합니다.',
    image: `${SITE_URL}/logo.png`,
    author: {
      '@type': 'Organization',
      name: '짭토끼',
      url: SITE_URL,
      sameAs: [FACEBOOK_URL, GITHUB_URL],
    },
    publisher: { '@type': 'Organization', name: '짭토끼', url: SITE_URL },
    datePublished: '2026-05-13',
    dateModified: todayISO,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/jtokki-address`,
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
        name: '짭토끼 최신 주소',
        item: `${SITE_URL}/jtokki-address`,
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
        <aside className="article-toc">
          <p className="article-toc__title">목차</p>
          <ul className="article-toc__list">
            <li>
              <a href="#intro">짭토끼 최신 주소</a>
            </li>
            <li>
              <a href="#official">공식 주소 안내</a>
            </li>
            <li>
              <a href="#what">짭토끼란?</a>
            </li>
            <li>
              <a href="#how">사용 방법</a>
            </li>
            <li>
              <a href="#fake">사칭 사이트 주의</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#related">관련 콘텐츠</a>
            </li>
          </ul>
        </aside>

        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼 최신 주소
          </nav>

          <h1 id="intro">
            짭토끼 최신 주소 — 공식 접속 주소 안내 ({dateLabel})
          </h1>

          <p>
            <strong>짭토끼 최신 주소</strong>를 검색하셨나요? 짭토끼는 뉴토끼를 포함한 주요 사이트의
            최신 접속 주소를 실시간으로 검증하여 안내하는 서비스입니다.
            이 페이지에서 짭토끼 공식 주소와 이용 방법을 안내합니다.
          </p>

          <h2 id="official">짭토끼 공식 접속 주소</h2>

          <p>
            <strong>짭토끼</strong>의 공식 접속 주소는 아래와 같습니다.
            짭토끼를 사칭하는 사이트도 존재하므로, 반드시 아래 공식 주소를 확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">🔗 짭토끼 공식 주소</p>
            <p className="callout__body">
              <strong>짭토끼.com</strong> (<Link href="/">xn--h10bl69b7nf.com</Link>)<br /><br />
              이 외의 &quot;짭토끼&quot; 주소는 사칭 사이트일 수 있습니다.
              주소창의 자물쇠(🔒) 아이콘을 반드시 확인하세요.
            </p>
            <NewtokiInlineButton />
          </div>

          <h2 id="what">짭토끼란? — 실시간 검증 사이트 모음</h2>

          <p>
            짭토끼는 뉴토끼, 늑대닷컴, 툰코 등 주요 사이트의 접속 상태를{' '}
            <strong>5분 간격으로 자동 검증</strong>하는 실시간 모니터링 서비스입니다.
            도메인이 변경되면 자동으로 감지하여 즉시 업데이트합니다.
          </p>

          <ul>
            <li><strong>✅ 실시간 검증</strong> — HTTP 상태, SSL 인증서, 응답 속도 자동 확인</li>
            <li><strong>🔄 자동 업데이트</strong> — 도메인 변경(301/302) 자동 감지</li>
            <li><strong>🛡️ 안전한 접속</strong> — 검증된 주소만 제공하여 피싱 위험 방지</li>
            <li><strong>📱 텔레그램 알림</strong> — 주소 변경 시 실시간 알림</li>
          </ul>

          <h2 id="how">짭토끼에서 뉴토끼 최신 주소 확인하는 방법</h2>

          <ol>
            <li><Link href="/">짭토끼 메인 페이지</Link>에 접속합니다</li>
            <li><strong>웹툰</strong> 카테고리 카드를 찾습니다</li>
            <li>🟢 <strong>LIVE</strong> 표시된 뉴토끼 링크를 클릭합니다</li>
            <li>응답 속도(ms)로 현재 서버 상태를 확인합니다</li>
          </ol>

          <p>
            또는 이 페이지 상단의 <strong>뉴토끼 바로가기 버튼</strong>을 클릭하면
            크롤러가 검증한 최신 주소로 바로 이동할 수 있습니다.
          </p>

          <h2 id="fake">짭토끼 사칭 사이트 주의</h2>

          <p>
            &quot;짭토끼&quot;를 사칭하는 피싱 사이트가 존재합니다.
            아래 사항을 반드시 확인하세요:
          </p>

          <ul>
            <li><strong>🔒 HTTPS 확인</strong> — 주소창에 자물쇠 아이콘이 있는지 확인</li>
            <li><strong>🌐 도메인 확인</strong> — 짭토끼.com (xn--h10bl69b7nf.com)인지 확인</li>
            <li><strong>🚫 개인정보 입력 금지</strong> — 짭토끼는 로그인이나 개인정보를 요구하지 않습니다</li>
          </ul>

          <div className="callout">
            <p className="callout__title">⚠️ 주의</p>
            <p className="callout__body">
              짭토끼는 어떤 개인정보도 수집하지 않으며, 로그인을 요구하지 않습니다.
              개인정보 입력을 요구하는 사이트는 <strong>사칭 사이트</strong>이므로 즉시 이탈하세요.
            </p>
          </div>

          <h2 id="faq">자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼 최신 주소는 어디인가요?" defaultOpen>
              짭토끼 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com)입니다.
              이 외의 짭토끼 주소는 사칭 사이트일 수 있으니 반드시 공식 주소를 확인하세요.
            </FAQItem>
            <FAQItem question="짭토끼가 뭔가요?">
              짭토끼는 뉴토끼를 비롯한 주요 사이트의 최신 접속 주소를 실시간으로 검증하여
              안내하는 서비스입니다. 5분 간격 자동 헬스체크로 검증된 안전한 주소만 제공합니다.
            </FAQItem>
            <FAQItem question="짭토끼에서 뉴토끼 주소를 어떻게 확인하나요?">
              짭토끼 메인 페이지의 웹툰 카테고리에서 뉴토끼의 실시간 접속 상태와
              최신 주소를 확인할 수 있습니다. 도메인이 변경되면 자동으로 감지하여 업데이트됩니다.
            </FAQItem>
            <FAQItem question="짭토끼를 사칭하는 사이트가 있나요?">
              네, 짭토끼를 사칭하는 피싱 사이트가 존재합니다.
              반드시 짭토끼.com 도메인인지 확인하고, 주소창의 자물쇠 아이콘을 체크하세요.
            </FAQItem>
          </div>

          <h2 id="related">관련 콘텐츠</h2>
          <ul>
            <li>
              <Link href="/jtokki-bypass">짭토끼 접속 안 될 때 — 우회 접속 방법 총정리</Link>
            </li>
            <li>
              <Link href="/jtokki">짭토끼란? — 실시간 검증 서비스 소개</Link>
            </li>
            <li>
              <Link href="/newtoki">뉴토끼 주소 — 짭토끼 실시간 검증</Link>
            </li>
          </ul>

          <div className="article-cta">
            <p className="article-cta__text">짭토끼에서 뉴토끼 최신 주소를 지금 바로 확인하세요</p>
            <Link href="/" className="article-cta__link">짭토끼 바로가기 →</Link>
          </div>
        </article>
      </div>
    </>
  );
}
