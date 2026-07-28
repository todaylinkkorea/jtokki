import type { Metadata } from 'next';
import { SITE_URL, FACEBOOK_URL, GITHUB_URL } from '@/lib/constants';
import Link from 'next/link';
import { FAQItem } from '@/components/FAQItem';
import { BunnyLogo } from '@/components/BunnyLogo';
import { NewtokiCTA } from '@/components/NewtokiCTA';
import { NewtokiInlineButton } from '@/components/NewtokiInlineButton';

const PUBLISHED = '2026-07-28';

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
  const todayISO = getTodayISO();
  const titleText = `짭토끼 접속 안 될 때 — 우회 접속 방법 총정리 (${dateLabel})`;

  return {
    // 제목이 이미 "짭토끼"로 시작 — 레이아웃 브랜드 접미사 생략
    title: { absolute: titleText },
    description:
      `짭토끼 접속이 안 되나요? ${dateLabel} 기준 짭토끼 접속 오류 원인별 해결 방법과 우회 접속 방법을 단계별로 안내합니다. DNS 변경, 브라우저 캐시 삭제, 짭토끼 새주소 확인까지 5분 안에 해결하세요.`,
    alternates: { canonical: `${SITE_URL}/jtokki-bypass` },
    keywords: [
      '짭토끼 접속',
      '짭토끼 접속 안됨',
      '짭토끼 우회',
      '짭토끼 우회 접속',
      '짭토끼 새주소',
      '짭토끼 안들어가짐',
      '짭토끼 오류',
      '짭토끼 차단',
      '짭토끼 DNS',
      '짭토끼 바로가기',
      '짭토끼',
      '뉴토끼 접속 안됨',
    ],
    openGraph: {
      title: titleText,
      description:
        '짭토끼 접속 오류 원인별 해결 방법과 우회 접속 방법을 단계별로 안내합니다. DNS 변경, 캐시 삭제, 새주소 확인까지.',
      type: 'article',
      locale: 'ko_KR',
      url: `${SITE_URL}/jtokki-bypass`,
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: '짭토끼 — 우회 접속 안내',
        },
      ],
    },
    other: {
      'article:published_time': PUBLISHED,
      'article:modified_time': todayISO,
    },
  };
}

export default function JtokkiBypassPage() {
  const dateLabel = getDateLabel();
  const todayISO = getTodayISO();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `짭토끼 접속 안 될 때 — 우회 접속 방법 총정리 (${dateLabel})`,
    description:
      '짭토끼 접속 오류의 원인을 DNS, 브라우저 캐시, 도메인 변경, ISP 차단으로 나누어 진단하고 각 상황별 해결 방법을 안내합니다.',
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
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    datePublished: PUBLISHED,
    dateModified: todayISO,
    inLanguage: 'ko',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/jtokki-bypass`,
    },
    about: [
      { '@type': 'Thing', name: '짭토끼' },
      { '@type': 'Thing', name: '우회 접속' },
      { '@type': 'Thing', name: 'DNS 설정' },
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
        name: '짭토끼 접속 안 될 때',
        item: `${SITE_URL}/jtokki-bypass`,
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
            <li><a href="#intro">짭토끼 접속 안 될 때</a></li>
            <li><a href="#diagnose">1단계: 원인 진단</a></li>
            <li><a href="#address">2단계: 최신 주소 확인</a></li>
            <li><a href="#cache">3단계: 캐시·쿠키 삭제</a></li>
            <li><a href="#dns">4단계: DNS 변경</a></li>
            <li><a href="#mobile">모바일에서 접속 안 될 때</a></li>
            <li><a href="#warning">우회 시 주의사항</a></li>
            <li><a href="#faq">자주 묻는 질문</a></li>
            <li><a href="#related">관련 콘텐츠</a></li>
          </ul>
        </aside>

        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 짭토끼 접속 안 될 때
          </nav>

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
            짭토끼 접속 안 될 때 — 우회 접속 방법 총정리 ({dateLabel})
          </h1>

          <p>
            <strong>짭토끼</strong>에 접속이 되지 않는 경우, 대부분은 서비스
            장애가 아니라 <strong>DNS 캐시</strong>, <strong>브라우저 캐시</strong>,{' '}
            <strong>통신사(ISP) 차단</strong> 중 하나가 원인입니다. 이 문서에서는{' '}
            {dateLabel} 기준으로 짭토끼 접속 오류를 원인별로 진단하고, 각 상황에
            맞는 해결 방법을 단계별로 안내합니다.
          </p>

          <NewtokiCTA page="/jtokki-bypass" />

          <h2 id="diagnose">1단계: 짭토끼 접속 오류 원인 진단</h2>

          <p>
            먼저 브라우저에 표시되는 오류 메시지를 확인하세요. 메시지에 따라
            원인과 해결 방법이 달라집니다.
          </p>

          <ul>
            <li>
              <strong>DNS_PROBE_FINISHED_NXDOMAIN</strong> — 도메인 주소를 찾지
              못한 상태입니다. DNS 캐시 문제이거나 통신사 DNS가 도메인을
              차단했을 가능성이 높습니다. → <a href="#dns">4단계</a>로 이동하세요.
            </li>
            <li>
              <strong>ERR_CONNECTION_TIMED_OUT</strong> — 서버까지 요청이
              도달하지 못한 상태입니다. 네트워크 경로 차단 또는 일시적 서버
              부하가 원인입니다. → <a href="#dns">4단계</a>를 먼저 시도하세요.
            </li>
            <li>
              <strong>이 사이트에 연결할 수 없음 / 차단 안내 페이지</strong> —
              통신사 차단 페이지가 표시되는 경우입니다. → <a href="#dns">4단계</a>{' '}
              DNS 변경으로 대부분 해결됩니다.
            </li>
            <li>
              <strong>404 또는 빈 페이지</strong> — 짭토끼 도메인 자체는
              살아있으나 주소가 바뀌었을 수 있습니다. →{' '}
              <a href="#address">2단계</a>에서 최신 주소를 확인하세요.
            </li>
            <li>
              <strong>페이지가 예전 화면으로 표시됨</strong> — 브라우저가 오래된
              캐시를 보여주는 상태입니다. → <a href="#cache">3단계</a>로
              이동하세요.
            </li>
          </ul>

          <h2 id="address">2단계: 짭토끼 최신 주소 확인</h2>

          <p>
            짭토끼의 공식 주소는 <strong>짭토끼.com</strong>{' '}
            (xn--h10bl69b7nf.com) 입니다. 검색 결과에 노출되는 유사 주소는 사칭
            사이트일 수 있으므로, 접속 전 반드시 도메인을 확인하세요.
          </p>

          <div className="callout">
            <p className="callout__title">🔗 짭토끼 공식 주소</p>
            <p className="callout__body">
              <strong>짭토끼.com</strong> (
              <Link href="/">xn--h10bl69b7nf.com</Link>)
              <br />
              <br />
              짭토끼는 로그인이나 개인정보 입력을 요구하지 않습니다. 개인정보를
              요구하는 &quot;짭토끼&quot; 사이트는 사칭 사이트이므로 즉시
              이탈하세요. 자세한 내용은{' '}
              <Link href="/jtokki-address">짭토끼 최신 주소 안내</Link> 페이지를
              참고하세요.
            </p>
            <NewtokiInlineButton />
          </div>

          <h2 id="cache">3단계: 브라우저 캐시·쿠키 삭제</h2>

          <p>
            짭토끼 페이지가 예전 화면으로 보이거나 링크 상태가 갱신되지 않는다면
            브라우저 캐시가 원인입니다. 아래 순서로 삭제하세요.
          </p>

          <ol>
            <li>
              <strong>강력 새로고침</strong> — Windows는{' '}
              <code>Ctrl</code> + <code>Shift</code> + <code>R</code>, Mac은{' '}
              <code>Cmd</code> + <code>Shift</code> + <code>R</code>을 누릅니다.
            </li>
            <li>
              해결되지 않으면 브라우저 설정 → <strong>인터넷 사용 기록 삭제</strong>{' '}
              → <strong>캐시된 이미지 및 파일</strong>, <strong>쿠키</strong>를
              선택합니다.
            </li>
            <li>
              기간은 <strong>전체 기간</strong>으로 지정하고 삭제한 뒤 브라우저를
              완전히 종료했다가 다시 실행합니다.
            </li>
            <li>
              그래도 동일하다면 <strong>시크릿 모드</strong>(Ctrl/Cmd + Shift +
              N)로 접속해 캐시 문제인지 확인합니다.
            </li>
          </ol>

          <h2 id="dns">4단계: DNS 서버 변경 (가장 효과적)</h2>

          <p>
            통신사 DNS가 도메인을 차단한 경우, DNS 서버를 공용 DNS로 변경하면
            대부분 해결됩니다. 이는 우회 프로그램 설치 없이 기기 설정만으로
            가능한 가장 안전한 방법입니다.
          </p>

          <div className="callout">
            <p className="callout__title">🌐 대표적인 공용 DNS 주소</p>
            <p className="callout__body">
              <strong>Cloudflare</strong> — 1.1.1.1 / 1.0.0.1
              <br />
              <strong>Google Public DNS</strong> — 8.8.8.8 / 8.8.4.4
              <br />
              <strong>Quad9</strong> — 9.9.9.9 / 149.112.112.112
            </p>
          </div>

          <h3>Windows에서 DNS 변경하기</h3>
          <ol>
            <li>설정 → 네트워크 및 인터넷 → 어댑터 옵션 변경</li>
            <li>사용 중인 네트워크 우클릭 → <strong>속성</strong></li>
            <li>
              <strong>인터넷 프로토콜 버전 4(TCP/IPv4)</strong> 선택 → 속성
            </li>
            <li>
              <strong>다음 DNS 서버 주소 사용</strong>을 선택하고 위 주소를
              입력한 뒤 확인
            </li>
          </ol>

          <h3>macOS에서 DNS 변경하기</h3>
          <ol>
            <li>시스템 설정 → 네트워크 → 사용 중인 네트워크 선택</li>
            <li>
              <strong>세부사항</strong> → <strong>DNS</strong> 탭으로 이동
            </li>
            <li>
              <strong>+</strong> 버튼으로 1.1.1.1 과 1.0.0.1 을 추가한 뒤 확인
            </li>
          </ol>

          <p>
            DNS를 변경한 뒤에는 <strong>DNS 캐시를 초기화</strong>해야 즉시
            반영됩니다. Windows는 명령 프롬프트에서{' '}
            <code>ipconfig /flushdns</code>, macOS는 터미널에서{' '}
            <code>sudo dscacheutil -flushcache</code> 를 실행하세요.
          </p>

          <h2 id="mobile">모바일에서 짭토끼 접속이 안 될 때</h2>

          <ul>
            <li>
              <strong>Wi-Fi ↔ 모바일 데이터 전환</strong> — 두 네트워크는 서로
              다른 DNS를 사용하므로, 전환만으로 접속되는 경우가 많습니다. 어느
              쪽에서 되는지로 차단 주체를 판별할 수 있습니다.
            </li>
            <li>
              <strong>Android 비공개 DNS 설정</strong> — 설정 → 네트워크 및
              인터넷 → 비공개 DNS → 호스트 이름에{' '}
              <strong>one.one.one.one</strong> 입력
            </li>
            <li>
              <strong>iOS</strong> — 설정 → Wi-Fi → 연결된 네트워크의 ⓘ →
              DNS 구성 → 수동으로 변경 후 1.1.1.1 추가
            </li>
            <li>
              <strong>브라우저 데이터 삭제</strong> — Chrome 앱 설정 →
              개인정보 보호 → 인터넷 사용 기록 삭제
            </li>
          </ul>

          <h2 id="warning">우회 접속 시 주의사항</h2>

          <p>
            접속 문제를 해결하는 과정에서 아래 사항을 반드시 확인하세요. 우회
            자체보다 <strong>우회 과정에서 노출되는 위험</strong>이 더 큽니다.
          </p>

          <ul>
            <li>
              <strong>🔒 HTTPS 확인</strong> — 주소창에 자물쇠 아이콘이 없는
              사이트에는 어떤 정보도 입력하지 마세요.
            </li>
            <li>
              <strong>🚫 출처 불명 프로그램 금지</strong> — &quot;우회
              프로그램&quot;, &quot;접속기&quot; 형태로 배포되는 실행 파일에는
              악성코드가 포함된 사례가 많습니다. DNS 설정 변경만으로 충분합니다.
            </li>
            <li>
              <strong>🆓 무료 VPN 주의</strong> — 무료 VPN은 트래픽을 수집·판매하는
              경우가 있습니다. 사용한다면 정책이 공개된 검증된 서비스만
              이용하세요.
            </li>
            <li>
              <strong>🔑 개인정보 입력 금지</strong> — 짭토끼는 로그인·회원가입·결제를
              요구하지 않습니다. 요구하는 사이트는 사칭 사이트입니다.
            </li>
            <li>
              <strong>⚖️ 법적 책임</strong> — 접속하려는 사이트의 콘텐츠 이용에
              대한 책임은 이용자 본인에게 있습니다. 짭토끼는 접속 가능 여부와
              기술적 안전성만 확인합니다.
            </li>
          </ul>

          <h2 id="faq">짭토끼 접속 관련 자주 묻는 질문</h2>
          <div className="faq-list">
            <FAQItem question="짭토끼 접속이 갑자기 안 됩니다. 서비스가 종료된 건가요?" defaultOpen>
              대부분의 경우 서비스 종료가 아니라 DNS 차단이나 브라우저 캐시
              문제입니다. 먼저 시크릿 모드로 접속해 보고, 그래도 안 되면 DNS를
              1.1.1.1로 변경한 뒤 다시 시도하세요. 모바일 데이터로 전환했을 때
              접속된다면 Wi-Fi 네트워크의 DNS 차단이 원인입니다.
            </FAQItem>
            <FAQItem question="짭토끼 우회 프로그램을 설치해야 하나요?">
              필요 없습니다. 별도 프로그램 설치 없이 기기의 DNS 설정만 공용
              DNS(1.1.1.1 등)로 변경하면 대부분 해결됩니다. 출처가 불분명한
              우회 프로그램은 악성코드가 포함될 위험이 있으므로 설치하지 마세요.
            </FAQItem>
            <FAQItem question="DNS를 바꿨는데도 짭토끼 접속이 안 됩니다.">
              DNS 변경 후에는 캐시 초기화가 필요합니다. Windows는 ipconfig
              /flushdns, macOS는 sudo dscacheutil -flushcache 를 실행한 뒤
              브라우저를 완전히 종료했다가 다시 실행하세요. 그래도 안 되면
              기기를 재부팅하면 확실하게 반영됩니다.
            </FAQItem>
            <FAQItem question="짭토끼 새주소가 따로 있나요?">
              짭토끼의 공식 주소는 짭토끼.com (xn--h10bl69b7nf.com) 하나이며,
              별도의 새주소를 운영하지 않습니다. &quot;짭토끼 새주소&quot;를
              내세우는 사이트는 사칭 사이트일 수 있으니 주의하세요. 반면 짭토끼가
              안내하는 뉴토끼 등 외부 사이트의 주소는 실제로 자주 변경되며,
              짭토끼가 이를 실시간으로 추적합니다.
            </FAQItem>
            <FAQItem question="짭토끼는 접속되는데 뉴토끼 링크가 안 열립니다.">
              뉴토끼 등 외부 사이트의 도메인이 변경된 경우입니다. 짭토끼 메인
              페이지에서 해당 사이트의 상태 뱃지를 확인하세요. 🟢 LIVE 표시가
              된 주소는 현재 접속 가능한 상태이며, 🔴 DOWN 이면 해당 사이트
              자체가 다운된 상태입니다.
            </FAQItem>
            <FAQItem question="VPN을 꼭 써야 하나요?">
              대부분의 경우 DNS 변경만으로 충분하며 VPN은 필요하지 않습니다.
              DNS 변경으로도 해결되지 않는 네트워크 수준 차단에서만 고려하되,
              로그 정책이 공개된 검증된 유료 서비스를 사용하세요.
            </FAQItem>
          </div>

          <h2 id="related">관련 콘텐츠</h2>
          <ul>
            <li>
              <Link href="/jtokki">짭토끼란? — 실시간 검증 서비스 소개</Link>
            </li>
            <li>
              <Link href="/jtokki-address">짭토끼 공식 주소 안내</Link>
            </li>
            <li>
              <Link href="/newtoki">뉴토끼 주소 — 짭토끼 실시간 검증</Link>
            </li>
            <li>
              <Link href="/newtoki-address">뉴토끼 최신 주소 변경 이력</Link>
            </li>
            <li>
              <Link href="/guide">짭토끼 이용 가이드</Link>
            </li>
          </ul>

          <div className="article-cta">
            <p className="article-cta__text">
              접속이 복구되었다면, 짭토끼에서 실시간 검증된 최신 주소를
              확인하세요
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
