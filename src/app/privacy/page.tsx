import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';
import { BunnyLogo } from '@/components/BunnyLogo';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '짭토끼 서비스의 개인정보처리방침입니다.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
            <li><a href="#overview">개요</a></li>
            <li><a href="#collect">수집 정보</a></li>
            <li><a href="#usage">이용 목적</a></li>
            <li><a href="#storage">보관 및 저장</a></li>
            <li><a href="#third-party">제3자 제공</a></li>
            <li><a href="#cookies">쿠키 및 분석</a></li>
            <li><a href="#rights">이용자 권리</a></li>
            <li><a href="#change">방침 변경</a></li>
            <li><a href="#contact">문의처</a></li>
          </ul>
        </aside>

        <article className="article-content">
          <nav className="article-breadcrumb">
            <Link href="/">홈</Link> &gt; 개인정보처리방침
          </nav>

          <h1>개인정보처리방침</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>최종 수정일: 2026년 4월 29일</p>

          <h2 id="overview">제1조 (개요)</h2>
          <p>
            짭토끼(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요시하며,
            「개인정보보호법」 등 관련 법령을 준수합니다.
            본 개인정보처리방침은 서비스가 어떤 정보를 수집하고
            어떻게 이용하는지를 안내합니다.
          </p>

          <h2 id="collect">제2조 (수집하는 정보)</h2>
          <p>
            짭토끼는 <strong>회원가입 기능이 없으며</strong>,
            이용자의 개인정보를 직접 수집하지 않습니다.
          </p>
          <p>다만, 서비스 이용 과정에서 아래 정보가 자동으로 생성·수집될 수 있습니다:</p>
          <ul>
            <li><strong>즐겨찾기 데이터</strong> — 브라우저의 localStorage에 저장되며, 서버로 전송되지 않습니다</li>
            <li><strong>접속 로그</strong> — IP 주소, 브라우저 유형, 접속 시간 (서버 및 CDN 레벨에서 자동 생성)</li>
            <li><strong>분석 데이터</strong> — Plausible Analytics를 통한 페이지 조회수, 유입 경로 등 (비식별 데이터)</li>
          </ul>

          <h2 id="usage">제3조 (정보 이용 목적)</h2>
          <p>수집된 정보는 다음 목적으로만 이용됩니다:</p>
          <ul>
            <li>서비스 안정성 확보 및 장애 대응</li>
            <li>서비스 이용 통계 분석 및 품질 개선</li>
            <li>부정 이용 방지 및 보안 강화</li>
          </ul>

          <h2 id="storage">제4조 (보관 및 저장)</h2>
          <ul>
            <li><strong>즐겨찾기</strong>: 이용자의 브라우저(localStorage)에만 저장되며, 서비스 서버에 보관되지 않습니다.</li>
            <li><strong>접속 로그</strong>: Cloudflare CDN에서 자동 생성되며, Cloudflare의 데이터 보존 정책에 따릅니다.</li>
            <li><strong>분석 데이터</strong>: Plausible Analytics에 의해 처리되며, 개인을 식별할 수 없는 집계 데이터만 보관합니다.</li>
          </ul>

          <h2 id="third-party">제5조 (제3자 제공)</h2>
          <p>
            서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
            다만, 다음의 경우 예외로 합니다:
          </p>
          <ul>
            <li>법령에 의해 요구되는 경우</li>
            <li>수사 목적으로 법령에 정해진 절차에 따라 요청되는 경우</li>
          </ul>

          <h2 id="cookies">제6조 (쿠키 및 웹 분석)</h2>
          <p>
            짭토끼는 쿠키(Cookie)를 사용하지 않습니다.
          </p>
          <p>
            웹 분석 도구로 <strong>Plausible Analytics</strong>를 사용하며,
            이는 쿠키를 사용하지 않는 프라이버시 중심의 분석 서비스입니다.
            Plausible는 개인을 식별할 수 있는 데이터를 수집하지 않으며,
            GDPR, CCPA 등 국제 개인정보보호 규정을 준수합니다.
          </p>

          <h2 id="rights">제7조 (이용자의 권리)</h2>
          <ul>
            <li>서비스는 개인정보를 직접 수집하지 않으므로, 별도의 열람·수정·삭제 요청 절차가 없습니다.</li>
            <li>브라우저의 localStorage에 저장된 즐겨찾기 데이터는 이용자가 직접 삭제할 수 있습니다
              (브라우저 설정 → 사이트 데이터 삭제).</li>
          </ul>

          <h2 id="change">제8조 (방침 변경)</h2>
          <p>
            본 개인정보처리방침은 법령 변경 또는 서비스 변경에 따라 수정될 수 있으며,
            변경 시 서비스 내 공지를 통해 안내합니다.
          </p>

          <h2 id="contact">제9조 (문의처)</h2>
          <p>
            개인정보 관련 문의사항이 있으시면 아래 채널로 연락해주세요:
          </p>
          <ul>
            <li>GitHub: <a href="https://github.com/todaylinkkorea/jtokki/issues" target="_blank" rel="noopener noreferrer">이슈 등록</a></li>
          </ul>

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
