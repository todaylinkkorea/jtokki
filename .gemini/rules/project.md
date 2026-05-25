# jtokki 프로젝트 규칙

## 프로젝트 개요
- **목적**: 한국어 웹사이트(뉴토끼 등) 주소 추적 및 SEO 최적화 콘텐츠 플랫폼
- **스택**: Next.js 16 + React 19 + TypeScript
- **빌드**: 정적 사이트 생성 (SSG) — `next build`로 `out/` 디렉토리에 출력
- **콘텐츠**: 한국어 중심, SEO 최적화 필수

## 기술 규칙

### Next.js / React
- App Router 패턴 사용 (`src/app/`)
- Server Components 우선, 클라이언트 컴포넌트는 `'use client'` 명시
- `src/components/` — 재사용 가능한 UI 컴포넌트
- `src/data/` — 정적 데이터 소스
- `src/lib/` — 유틸리티, 헬퍼 함수

### SEO 필수사항
- 모든 페이지에 고유한 `<title>`, `<meta description>` 설정
- Schema.org 구조화 데이터 (JSON-LD)
- 시멘틱 HTML (`<article>`, `<nav>`, `<main>` 등)
- Open Graph + Twitter Card 메타 태그
- 동적 sitemap.xml 생성
- 한국어 SEO 키워드 최적화

### 데이터 관리
- 사이트 주소 데이터는 `src/data/` 아래 TypeScript 파일로 관리
- 크롤러 데이터(`jtokki-crawler`)와 연동 시 `scripts/` 디렉토리 활용
- `out/` 디렉토리의 정적 파일은 git에서 제외 (`.gitignore`)

## 추천 스킬

이 프로젝트에서 우선적으로 참조할 스킬 목록:

### 핵심 (항상 참조)
- `nextjs-best-practices` — Next.js App Router, SSR/SSG 패턴
- `react-patterns` — React 19 훅, 컴포지션, 성능 패턴
- `seo-fundamentals` — SEO 기본 최적화
- `typescript-pro` — TypeScript 고급 패턴

### SEO 특화
- `seo-technical` — 기술적 SEO (sitemap, robots.txt, canonical)
- `seo-schema` — Schema.org 구조화 데이터
- `seo-content` — SEO 콘텐츠 최적화
- `schema-markup` — 구조화 데이터 설계/검증
- `seo-meta-optimizer` — 메타 태그 최적화

### 품질/보안
- `web-performance-optimization` — Core Web Vitals, 성능 최적화
- `security-auditor` — 보안 감사
- `frontend-design` — UI/UX 디자인 품질
- `debugger` — 디버깅

### 운영
- `github` — GitHub CLI 활용
- `vercel-deployment` — Vercel 배포 (필요 시)
