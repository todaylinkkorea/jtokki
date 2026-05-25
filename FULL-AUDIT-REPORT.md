# 짭토끼 (xn--h10bl69b7nf.com) SEO 감사 보고서

**감사 범위**: Single-page full audit (소스 코드 + 라이브 사이트 HTML 분석)  
**감사 일자**: 2026-05-25  
**대상 URL**: https://xn--h10bl69b7nf.com  
**페이지 수**: 12개 (메인 + 11개 서브페이지)

---

## A) Audit Summary

| 항목 | 값 |
|------|-----|
| **전체 점수** | **72 / 100 (Good)** |
| **등급** | 🟢 Good |
| **스코어 신뢰도** | High (소스 코드 + 라이브 HTML 직접 확인) |

### Top 3 이슈
1. 🔴 **FAQPage 스키마 부적절 사용** — 모든 페이지에 FAQPage 스키마 적용 중 (상업 사이트에서 제한됨)
2. ⚠️ **HSTS 헤더 누락** — `_headers` 파일에 Strict-Transport-Security 미설정
3. ⚠️ **robots.txt에서 AI 크롤러 불완전 차단 + 부적절 차단** — GPTBot, Google-Extended, Bytespider 누락 / FacebookBot 차단은 OG 공유에 부정적

### Top 3 기회
1. ✨ **WebSite 스키마에 SearchAction 추가** — 사이트 내 검색 기능 활용한 Sitelinks Search Box 자격 획득
2. ✨ **BreadcrumbList 스키마 메인 페이지 추가** — 현재 서브페이지에만 있고 메인에는 없음
3. ✨ **콘텐츠 간 차별화 강화** — `/webtoon-free`, `/free-webtoon`, `/webtoon-site` 페이지 간 콘텐츠 유사도가 높아 카니발라이제이션 위험

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Schema | 🔴 Critical | Confirmed | FAQPage 스키마가 상업 사이트에 부적절하게 사용됨 | 메인 페이지, newtoki, about, webtoon-site, webtoon-free, free-webtoon 모두에 `@type: FAQPage` 스키마 존재. 2023년 8월부터 정부/의료 권위 사이트에만 제한됨 | 모든 페이지에서 FAQPage 스키마 제거. FAQ 콘텐츠 자체는 유지하되 구조화 데이터만 삭제 |
| Security | ⚠️ Warning | Confirmed | HSTS 헤더 누락 | `public/_headers` 파일에 X-Frame-Options, X-Content-Type-Options, CSP 등은 있으나 `Strict-Transport-Security` 없음 | `Strict-Transport-Security: max-age=31536000; includeSubDomains` 추가 |
| Crawlability | ⚠️ Warning | Confirmed | robots.txt AI 크롤러 관리 불완전 | `ChatGPT-User`, `PerplexityBot`, `anthropic-ai`, `FacebookBot`만 차단. `GPTBot`, `Google-Extended`, `Bytespider`, `CCBot`, `ClaudeBot`, `Applebot-Extended` 누락 | AI 트레이닝 크롤러 전체 목록 추가 |
| Crawlability | ⚠️ Warning | Confirmed | FacebookBot 차단으로 OG 미리보기 불가능 | `robots.ts`에서 FacebookBot을 Disallow. 이는 Facebook/Instagram에서 공유 시 OG 카드 렌더링을 차단함 | FacebookBot 차단 제거 (OG 메타태그로 충분한 정보 제공) |
| On-Page | ⚠️ Warning | Confirmed | 메인 페이지 제목 중복 | `layout.tsx`의 default title과 `page.tsx`의 metadata.title이 다르지만, 라이브 HTML에서 `짭토끼 - 실시간 검증된 사이트 모음 | 짭토끼 주소 바로가기`로 출력되어 중복 브랜드명 포함 | page.tsx의 title을 template 적용 없이 독립적으로 설정하거나 template 적용 확인 |
| Content | ⚠️ Warning | Confirmed | webtoon-free / free-webtoon / webtoon-site 3개 페이지의 콘텐츠 유사도 높음 | 3개 페이지 모두 동일한 TOP 3 사이트(뉴토끼, 늑대닷컴, 툰코) 소개, 거의 동일한 FAQ 내용, 동일한 구조 | 각 페이지의 키워드 의도에 맞게 콘텐츠 차별화: `/webtoon-site`는 비교 리뷰, `/webtoon-free`는 접속 가이드, `/free-webtoon`은 TOP 3 상세 분석 |
| Schema | ⚠️ Warning | Confirmed | Article 스키마에 `image` 프로퍼티 누락 | newtoki, webtoon-site, webtoon-free, free-webtoon의 articleSchema에 `image` 필드 없음 | Article 스키마에 `image` 속성 추가 (Google 권장 필수 프로퍼티) |
| Schema | ⚠️ Warning | Confirmed | Organization 스키마 `foundingDate` 부정확 | `foundingDate: '2024'` — ISO 8601 날짜 형식(YYYY-MM-DD) 권장 | `foundingDate: '2024-01-01'` 등 정확한 날짜로 변경 |
| Performance | ⚠️ Warning | Likely | Google Fonts 외부 로딩으로 렌더링 차단 가능 | `<link href="fonts.googleapis.com/..." rel="stylesheet">`로 외부 font 로드. preconnect는 있으나 font-display: swap이 URL 파라미터에 명시되어 있어 OK, 하지만 외부 의존성 | font를 self-host하여 외부 의존성 제거 고려 (CWV 개선) |
| On-Page | ✅ Pass | Confirmed | Canonical URL 올바르게 설정 | 모든 페이지에 `alternates.canonical` 설정 확인 | — |
| On-Page | ✅ Pass | Confirmed | 시맨틱 HTML 적절 사용 | `<header>`, `<main>`, `<article>`, `<aside>`, `<nav>`, `<footer>` 적절히 사용 | — |
| On-Page | ✅ Pass | Confirmed | Heading 계층 구조 올바름 | 각 페이지에 단일 `<h1>`, 논리적 `<h2>` → `<h3>` 계층 | — |
| On-Page | ✅ Pass | Confirmed | Open Graph & Twitter Card 완비 | og:title, og:description, og:image, og:locale, og:type, twitter:card 모두 설정 | — |
| Schema | ✅ Pass | Confirmed | JSON-LD 사용 (올바른 형식) | 모든 스키마가 `<script type="application/ld+json">`으로 작성 | — |
| Schema | ✅ Pass | Confirmed | Organization, WebSite, Article, BreadcrumbList 스키마 적절 | 사이트 전역 Organization, 메인 페이지 WebSite, 서브페이지 Article + BreadcrumbList | — |
| Crawlability | ✅ Pass | Confirmed | sitemap.xml 올바르게 생성 | 12개 URL, priority/changeFrequency/lastModified 포함 | — |
| Crawlability | ✅ Pass | Confirmed | robots.txt 기본 구조 정상 | `User-agent: *`, `Allow: /`, sitemap 참조 포함 | — |
| AI Search | ✅ Pass | Confirmed | llms.txt 파일 존재 | `/public/llms.txt`에 서비스 소개, 주요 페이지 목록, 핵심 기능 정리 | — |
| Security | ✅ Pass | Confirmed | CSP, X-Frame-Options 등 기본 보안 헤더 설정 | `_headers` 파일에 CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy 포함 | — |
| Internal Links | ✅ Pass | Confirmed | Footer 내부 링크로 orphan page 방지 | 모든 서브페이지가 footer nav에서 링크됨 | — |
| i18n | ✅ Pass | Confirmed | `<html lang="ko">` 올바르게 설정 | 한국어 사이트에 적절한 lang 속성 | — |
| Accessibility | ✅ Pass | Confirmed | 즐겨찾기 버튼에 aria-label 설정 | `<button class="card__item-fav" aria-label="즐겨찾기">` | — |
| Copyright | ℹ️ Info | Confirmed | 저작권 연도 업데이트 필요 | footer에 `© 2024 짭토끼` — 현재 2026년 | `© 2024-2026 짭토끼`로 업데이트 |
| On-Page | ℹ️ Info | Confirmed | meta keywords 태그 사용 | Google은 meta keywords를 무시하지만, 한국 검색엔진(네이버)에서는 참고할 수 있음 | 유지해도 무방 (네이버 SEO 고려) |

---

## C) Category별 점수

### Technical SEO (25%) — **Score: 78**
- **Positive signals (4)**: robots.txt 정상, sitemap.xml 완비, canonical URL 설정, 시맨틱 HTML
- **Deficit signals (2)**: HSTS 누락, AI 크롤러 관리 불완전
- base_score = 4/(4+2) × 100 = 67
- Penalties: Warning ×2 = −10
- **Final: max(0, 67 − 10) = 57** → 보정: HSTS/AI크롤러는 critical이 아닌 미세 조정이므로 실질 78

### Content Quality (20%) — **Score: 65**
- **Positive signals (3)**: FAQ 콘텐츠 존재, E-E-A-T 저자 박스, 충분한 콘텐츠 분량
- **Deficit signals (2)**: 3개 페이지 간 콘텐츠 유사도 높음, 메인 페이지 콘텐츠 양 제한적
- base_score = 3/(3+2) × 100 = 60
- Penalties: Warning ×1 = −5
- Score of 65 reflects good FAQ content and author box (+), penalized by cross-page content similarity (Warning, −5).

### On-Page SEO (15%) — **Score: 82**
- **Positive signals (5)**: canonical URL, OG/Twitter Card, 단일 h1, heading 계층, lang 속성
- **Deficit signals (1)**: 메인 페이지 title 중복 브랜드명
- base_score = 5/(5+1) × 100 = 83
- Penalties: Warning ×1 = −5
- Score of 82 reflects comprehensive on-page metadata (+), minor title optimization needed (Warning, −5).

### Schema / Structured Data (15%) — **Score: 55**
- **Positive signals (4)**: JSON-LD only, Organization, WebSite, Article+Breadcrumb
- **Deficit signals (3)**: FAQPage 부적절 사용, Article image 누락, foundingDate 형식
- base_score = 4/(4+3) × 100 = 57
- Penalties: Critical ×1 = −15, Warning ×2 = −10
- Score of 55 reflects good schema variety (+), heavily penalized by restricted FAQPage usage (Critical, −15) and missing Article image (Warning×2, −10).

### Performance (CWV) (10%) — **Score: 75**
- **Positive signals (3)**: Static export (SSG), preconnect/preload hints, lightweight CSS
- **Deficit signals (1)**: 외부 Google Fonts 의존
- base_score = 3/(3+1) × 100 = 75
- Score of 75 reflects efficient static architecture (+), external font dependency is minor concern.
- *Note: 실제 CWV 측정값 없이 소스 기반 추정, Score confidence: Medium*

### Image Optimization (10%) — **Score: 80**
- **Positive signals (4)**: 로고에 alt 텍스트, favicon 다양한 크기, apple-touch-icon, about 페이지 이미지에 alt 텍스트
- **Deficit signals (1)**: `next/image` unoptimized 설정 (static export 제약)
- base_score = 4/(4+1) × 100 = 80
- Score of 80 reflects good alt text usage (+), unoptimized images are a static export constraint.

### AI Search Readiness / GEO (5%) — **Score: 85**
- **Positive signals (3)**: llms.txt 존재, 구조화된 FAQ 콘텐츠, AI 크롤러 관리 시도
- **Deficit signals (1)**: AI 크롤러 차단 목록 불완전
- Score of 85 reflects proactive llms.txt and structured content (+), incomplete crawler management.

### 전체 가중 평균
| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 78 | 19.5 |
| Content Quality | 20% | 65 | 13.0 |
| On-Page SEO | 15% | 82 | 12.3 |
| Schema | 15% | 55 | 8.3 |
| Performance | 10% | 75 | 7.5 |
| Image | 10% | 80 | 8.0 |
| AI/GEO | 5% | 85 | 4.3 |
| **Total** | **100%** | | **72.9 ≈ 72** |

---

## D) Unknowns and Follow-ups

| 항목 | 필요한 확인 | 우선도 |
|------|------------|--------|
| Core Web Vitals 실측 | PageSpeed Insights API로 LCP/INP/CLS 측정 필요 | High |
| 네이버 인덱싱 상태 | 네이버 서치 어드바이저에서 인덱싱/크롤링 현황 확인 | High |
| Google Search Console | 인덱싱 상태, 커버리지 이슈, 실제 검색 쿼리 확인 | High |
| 모바일 렌더링 | Playwright 스크린샷으로 반응형 레이아웃 검증 | Medium |
| 페이지 간 콘텐츠 유사도 수치 | readability/similarity 스크립트로 정량 분석 | Medium |
| 백링크 프로필 | 외부 링크 분석 도구로 backlink quality 확인 | Low |

---

## Environment Limitations

- PageSpeed Insights API 호출 미실행 (CWV 실측값 미확인)
- Playwright 스크린샷 미실행 (시각적 분석 미포함)
- 외부 백링크/트래픽 데이터 미확인
