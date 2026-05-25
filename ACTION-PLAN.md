# 짭토끼 SEO 액션 플랜

**작성일**: 2026-05-25  
**대상**: https://xn--h10bl69b7nf.com

---

## 1. 🔴 즉시 수정 (Critical — 1주 이내)

### 1-1. FAQPage 스키마 전체 제거
- **영향**: FAQPage 스키마는 2023년 8월부터 정부/의료 권위 사이트에만 리치 결과 제공. 상업 사이트에서 사용 시 무시되거나 스팸 신호로 인식될 수 있음
- **대상 파일**:
  - `src/app/page.tsx` — `faqSchema` 객체 및 `<script type="application/ld+json">` 제거
  - `src/app/newtoki/page.tsx` — `faqSchema` 제거
  - `src/app/about/page.tsx` — `faqSchema` 제거
  - `src/app/webtoon-site/page.tsx` — `faqSchema` 제거
  - `src/app/webtoon-free/page.tsx` — `faqSchema` 제거
  - `src/app/free-webtoon/page.tsx` — `faqSchema` 제거
- **FAQ 콘텐츠(HTML)는 유지** — 구조화 데이터만 제거, 사용자 UX용 FAQ UI는 그대로 유지
- **노력도**: Low (스키마 객체와 script 태그만 삭제)

---

## 2. ⚡ Quick Win (1~2주 이내)

### 2-1. HSTS 헤더 추가
- **파일**: `public/_headers`
- **추가**:
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```
- **노력도**: Low

### 2-2. robots.txt AI 크롤러 목록 보완
- **파일**: `src/app/robots.ts`
- **추가할 크롤러**:
  - `GPTBot` (OpenAI 주요 크롤러)
  - `Google-Extended` (Google AI 트레이닝)
  - `ClaudeBot` (Anthropic 공식 크롤러, 현재 `anthropic-ai`만 차단)
  - `Bytespider` (ByteDance AI)
  - `CCBot` (Common Crawl AI)
  - `Applebot-Extended` (Apple AI)
- **FacebookBot 차단 제거** — Facebook/Instagram에서 OG 카드 미리보기가 차단됨. SNS 공유 트래픽 확보를 위해 필수
- **노력도**: Low

### 2-3. Article 스키마에 `image` 프로퍼티 추가
- **대상 파일**: newtoki, about, webtoon-site, webtoon-free, free-webtoon의 `articleSchema`
- **추가**:
  ```typescript
  image: `${SITE_URL}/logo.png`,
  ```
  또는 각 페이지에 맞는 대표 이미지 URL
- **노력도**: Low

### 2-4. Organization 스키마 `foundingDate` 형식 수정
- **파일**: `src/app/layout.tsx`
- **변경**: `foundingDate: '2024'` → `foundingDate: '2024-01-01'`
- **노력도**: Low

### 2-5. 저작권 연도 업데이트
- **파일**: `src/app/layout.tsx`
- **변경**: `© 2024 짭토끼` → `© 2024-2026 짭토끼`
- **노력도**: Low

---

## 3. 🎯 전략적 개선 (1~2개월)

### 3-1. 콘텐츠 카니발라이제이션 해결
- **문제**: `/webtoon-site`, `/webtoon-free`, `/free-webtoon` 3개 페이지가 거의 동일한 콘텐츠
- **해결 전략**:
  - `/webtoon-site` — **비교 리뷰** 중심 (각 사이트의 상세 장단점, 비교표, 사용자 리뷰 느낌)
  - `/webtoon-free` — **접속 가이드** 중심 (무료 이용 방법, 안전 수칙, 단계별 가이드 강화)
  - `/free-webtoon` — **카테고리 탐색** 중심 (장르별 추천, 신작/완결 구분, 각 사이트별 강점 장르)
- **키워드 차별화도 함께 진행**
- **노력도**: Medium-High

### 3-2. 메인 페이지 BreadcrumbList 스키마 추가
- **파일**: `src/app/page.tsx`
- **추가**:
  ```typescript
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
    ],
  };
  ```
- **노력도**: Low

### 3-3. WebSite 스키마에 SearchAction 추가
- **조건**: 사이트 내 검색 기능이 구현되어 있거나 구현 예정인 경우
- **파일**: `src/app/page.tsx`의 `siteSchema`에 추가:
  ```typescript
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  ```
- **노력도**: Low (스키마만) / Medium (검색 기능 구현 포함)

### 3-4. Google Fonts Self-hosting
- **현재**: `fonts.googleapis.com`에서 Geist 폰트를 외부 로드
- **개선**: 폰트 파일을 `public/fonts/`에 다운로드하여 로컬 서빙
- **효과**: 외부 DNS 조회 1회, TCP 연결 1회 제거 → LCP 개선
- **노력도**: Medium

---

## 4. 🔧 유지보수 (분기별)

### 4-1. sitemap.xml lastModified 자동화
- **현재**: `sitemap.ts`에 하드코딩된 날짜 (`'2026-05-15'`)
- **개선**: 빌드 시 자동으로 현재 날짜 반영하도록 동적 생성
- **노력도**: Low

### 4-2. 콘텐츠 내 날짜 정보 자동 업데이트
- **현재**: 각 서브페이지에 `(2026년 5월)` 등 수동 표기
- **개선**: 빌드 시 또는 환경 변수로 자동 반영
- **노력도**: Medium

### 4-3. 정기 SEO 감사
- 분기별 이 Agentic-SEO-Skill로 재감사 실시
- CWV 실측, 인덱싱 현황, 백링크 변화 추적

---

## 실행 우선순위 요약

| 순서 | 작업 | 영향도 | 노력도 | 유형 |
|------|------|--------|--------|------|
| 1 | FAQPage 스키마 제거 | 🔴 High | Low | Critical |
| 2 | HSTS 헤더 추가 | ⚠️ Medium | Low | Quick Win |
| 3 | robots.txt AI 크롤러 보완 + FacebookBot 허용 | ⚠️ Medium | Low | Quick Win |
| 4 | Article 스키마 image 추가 | ⚠️ Medium | Low | Quick Win |
| 5 | Organization foundingDate 수정 | ℹ️ Low | Low | Quick Win |
| 6 | 저작권 연도 업데이트 | ℹ️ Low | Low | Quick Win |
| 7 | 콘텐츠 카니발라이제이션 해결 | ⚠️ High | High | Strategic |
| 8 | BreadcrumbList 메인 추가 | ⚠️ Medium | Low | Strategic |
| 9 | SearchAction 추가 | ⚠️ Medium | Medium | Strategic |
| 10 | Fonts Self-hosting | ⚠️ Low-Med | Medium | Strategic |
