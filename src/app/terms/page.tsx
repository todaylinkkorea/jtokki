import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { BunnyLogo } from '@/components/BunnyLogo';

export const metadata: Metadata = {
  title: '이용약관',
  description: '짭토끼 서비스 이용약관입니다.',
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
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
        <aside className="article-toc">
          <p className="article-toc__title">목차</p>
          <ul className="article-toc__list">
            <li><a href="#purpose">목적</a></li>
            <li><a href="#definition">정의</a></li>
            <li><a href="#usage">서비스 이용</a></li>
            <li><a href="#obligation">이용자 의무</a></li>
            <li><a href="#disclaimer">면책</a></li>
            <li><a href="#ip">지적재산권</a></li>
            <li><a href="#change">약관 변경</a></li>
            <li><a href="#law">준거법</a></li>
          </ul>
        </aside>

        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 이용약관
          </nav>

          <h1>이용약관</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>최종 수정일: 2026년 4월 29일</p>

          <h2 id="purpose">제1조 (목적)</h2>
          <p>
            본 약관은 짭토끼(이하 &quot;서비스&quot;)가 제공하는 웹사이트 모니터링 및 링크 디렉토리
            서비스의 이용 조건과 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>

          <h2 id="definition">제2조 (정의)</h2>
          <ul>
            <li><strong>&quot;서비스&quot;</strong>란 짭토끼가 운영하는 실시간 사이트 검증 및 링크 디렉토리 서비스를 말합니다.</li>
            <li><strong>&quot;이용자&quot;</strong>란 본 약관에 따라 서비스를 이용하는 모든 사용자를 말합니다.</li>
            <li><strong>&quot;등록 사이트&quot;</strong>란 서비스에서 모니터링 대상으로 등록된 외부 웹사이트를 말합니다.</li>
          </ul>

          <h2 id="usage">제3조 (서비스 이용)</h2>
          <ol>
            <li>서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.</li>
            <li>서비스는 등록된 사이트의 접속 상태를 확인하는 링크 디렉토리 기능을 제공합니다.</li>
            <li>서비스는 등록된 사이트의 콘텐츠를 직접 제공하거나 호스팅하지 않습니다.</li>
            <li>서비스는 사전 통지 없이 기능을 변경하거나 중단할 수 있습니다.</li>
          </ol>

          <h2 id="obligation">제4조 (이용자의 의무)</h2>
          <p>이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다:</p>
          <ul>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>자동화된 수단을 통한 과도한 접속 (크롤링, 스크래핑 등)</li>
            <li>서비스를 통해 불법적인 활동을 하는 행위</li>
            <li>타인의 권리를 침해하거나 명예를 훼손하는 행위</li>
          </ul>

          <h2 id="disclaimer">제5조 (면책 조항)</h2>
          <ol>
            <li>
              서비스는 등록된 외부 사이트에 대한 <strong>링크만을 제공</strong>하며,
              해당 사이트의 콘텐츠, 안전성, 적법성에 대해 보증하지 않습니다.
            </li>
            <li>
              이용자가 서비스를 통해 접속한 외부 사이트에서 발생한 손해에 대해
              서비스는 책임을 지지 않습니다.
            </li>
            <li>
              서비스에서 제공하는 접속 상태 정보(LIVE, DOWN, CHANGED 등)는
              자동화된 시스템에 의해 생성되며, 그 정확성을 완전히 보장하지 않습니다.
            </li>
            <li>
              천재지변, 시스템 장애 등 불가항력에 의한 서비스 중단에 대해
              서비스는 책임을 지지 않습니다.
            </li>
          </ol>

          <h2 id="ip">제6조 (지적재산권)</h2>
          <p>
            서비스의 디자인, 로고, 소스코드 및 기타 콘텐츠에 대한 지적재산권은
            짭토끼에 귀속됩니다. 단, 오픈소스로 공개된 부분은 해당 라이선스를 따릅니다.
          </p>

          <h2 id="change">제7조 (약관 변경)</h2>
          <p>
            서비스는 필요한 경우 본 약관을 변경할 수 있으며,
            변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.
            변경 후에도 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.
          </p>

          <h2 id="law">제8조 (준거법 및 관할법원)</h2>
          <p>
            본 약관의 해석 및 적용에 관한 사항은 대한민국 법률에 따르며,
            서비스 이용과 관련한 분쟁은 대한민국 법원을 관할법원으로 합니다.
          </p>

          <div className="article-cta">
            <p className="article-cta__text">짭토끼에서 실시간 검증된 사이트를 확인하세요</p>
            <Link href="/" className="article-cta__link">
              짭토끼 바로가기 →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
