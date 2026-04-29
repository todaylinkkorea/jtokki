# 🐰 짭토끼 — 실시간 검증 사이트 모음

> **죽은 링크 없는, 진짜 살아있는 사이트만.** 짭토끼가 실시간으로 검증합니다.

짭토끼는 주요 인터넷 사이트의 **접속 상태를 실시간으로 모니터링**하고, 현재 **정상 운영 중인 사이트만** 카테고리별로 큐레이션하여 제공하는 링크 디렉토리 서비스입니다.

**🔗 서비스 바로가기: [짭토끼](https://xn--2i0bpa058g.com)**

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 **실시간 헬스체크** | 등록된 사이트의 HTTP 상태 코드, 응답 속도, 리다이렉트 여부를 자동으로 점검 |
| 📊 **업타임 대시보드** | 카테고리별 가동률(uptime)을 시각적으로 표시 |
| 🔄 **도메인 변경 감지** | 도메인이 변경(301/302 리다이렉트)된 경우 자동 감지 및 알림 |
| ⭐ **즐겨찾기** | 자주 방문하는 사이트를 브라우저에 저장 (localStorage) |
| 📱 **모바일 최적화** | 모바일 퍼스트 반응형 디자인으로 어디서든 빠르게 확인 |

## 🏗️ 기술 스택

- **Framework**: [Next.js 16](https://nextjs.org/) (Static Export)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Dark theme, Glassmorphism)
- **Deployment**: Static HTML — CDN / GitHub Pages 호환
- **Monitoring**: 자동화된 Crawler API 연동 (옵션)

## 📂 프로젝트 구조

```
jtokki/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # 메인 랜딩 페이지
│   │   ├── guide/        # 짭토끼 가이드 (SEO 아티클)
│   │   ├── layout.tsx    # 공통 레이아웃
│   │   └── globals.css   # 디자인 시스템
│   ├── components/       # 재사용 UI 컴포넌트
│   │   ├── CategorySection.tsx  # 카테고리 카드 그리드
│   │   ├── BunnyLogo.tsx        # 로고 SVG
│   │   ├── FavoriteButton.tsx   # 즐겨찾기 토글
│   │   └── ...
│   ├── data/             # 정적 fallback 데이터
│   └── lib/              # 공용 상수 및 유틸리티
├── scripts/
│   ├── sites.json        # 모니터링 대상 사이트 마스터 데이터
│   └── health-check.ts   # URL 헬스체크 스크립트
└── .env.example          # 환경 변수 템플릿
```

## 🚀 시작하기

### 설치

```bash
git clone https://github.com/<your-username>/jtokki.git
cd jtokki
npm install
```

### 환경 변수 설정

```bash
cp .env.example .env.local
# .env.local 파일을 열어 필요한 값을 입력하세요
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 헬스체크 실행

```bash
# 전체 카테고리 점검
npx tsx scripts/health-check.ts

# 특정 카테고리만 점검
npx tsx scripts/health-check.ts webtoon
```

### 정적 빌드

```bash
npm run build
# 결과물: out/ 디렉토리
```

## ⚙️ 환경 변수

| 변수명 | 필수 | 설명 |
|--------|------|------|
| `NEXT_PUBLIC_CRAWLER_API_URL` | ❌ | Crawler API 서버 주소 (미설정 시 정적 데이터 사용) |
| `NEXT_PUBLIC_CRAWLER_API_KEY` | ❌ | Crawler API 인증 키 |
| `NEXT_PUBLIC_SITE_URL` | ❌ | 서비스 도메인 (Canonical URL, 구조화 데이터에 사용) |

## 📈 SEO 최적화

짭토끼는 검색 엔진 최적화를 위해 다음을 적용하고 있습니다:

- **구조화 데이터 (JSON-LD)**: `WebSite`, `FAQPage`, `Article`, `BreadcrumbList` 스키마
- **Canonical URL**: 모든 페이지에 정규 URL 지정
- **시맨틱 HTML**: `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>` 등 시맨틱 태그 사용
- **Open Graph 메타태그**: SNS 공유 최적화
- **Heading 계층 구조**: 페이지당 단일 `<h1>`, 논리적 `<h2>`~`<h3>` 구조
- **SEO 아티클 페이지**: `/guide` 경로에 검색 유입을 위한 가이드 콘텐츠

## 🤝 기여하기

이슈 제보와 PR을 환영합니다.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.

---

<p align="center">
  <strong>🐰 짭토끼</strong> — 진짜 살아있는 사이트만, 짭토끼가 검증합니다.
</p>
