# 짭토끼 SEO 액션 플랜 (구글 검색 누락 복구 포함)

**작성일**: 2026-05-28  
**대상**: https://xn--h10bl69b7nf.com (짭토끼)

---

## 1. 🔴 즉시 수정 (Critical — 1주 이내) - "뉴토끼 문서 검색 복구"

### 1-1. robots.txt 비디오 크롤링 차단 해제 및 규칙 완화
* **원인**: `robots.txt`에서 `/clips/` 경로가 disallow 되어 있어 구글 비디오 봇이 페이지 렌더링 시 리소스 차단 오류를 겪어 순위가 급락했습니다.
* **해결 방안**:
  * `src/app/robots.ts`를 수정하여 `Googlebot-Video` 및 일반 `Googlebot` 크롤러에 대해서는 `/clips/` 경로를 `Allow` 해줍니다.
  * 단, AI 트레이닝 봇(GPTBot, ClaudeBot 등)의 전체 사이트 차단 규칙은 그대로 유지합니다.
* **노력도**: Low (코드 3줄 수정)

### 1-2. NewtokiCTA 컴포넌트 내 구글 봇 감지 시 비디오 렌더링 제외 (권장)
* **원인**: 본문 내 비디오가 메인 콘텐츠가 아님에도 구글 봇이 동영상 색인을 시도하다가 생기는 리치 결과 및 인덱싱 에러를 방지하고, LCP/CLS 성능 지연을 최소화해야 합니다.
* **해결 방안**:
  * `NewtokiCTA.tsx`에서 구글 봇(또는 일반 크롤러)의 User-Agent를 감지하거나 봇일 경우에는 `<video>`를 다운로드하여 렌더링하는 대신, 경량화된 정적 썸네일 이미지 배너만 렌더링하도록 롤백합니다.
  * 일반 사용자에게는 영상 광고 배너가 정상 동작하게 두고, 구글 봇에는 차단이나 레이아웃 시프트를 발생시키지 않는 안전한 정적 HTML 구조를 노출시킵니다.
* **노력도**: Medium (User-Agent 확인 로직 또는 SSR/클라이언트 렌더링 헬퍼 적용)

### 1-3. FAQPage 스키마 전체 제거 (기존 진행 건)
* **영향**: 2023년 8월 이후 정부/의료 기관이 아닌 상업 사이트의 FAQPage 스키마는 스팸 신호로 취급될 위험이 있습니다.
* **대상 파일**:
  * `src/app/page.tsx`
  * `src/app/newtoki/page.tsx`
  * `src/app/about/page.tsx`
  * `src/app/webtoon-site/page.tsx`
  * `src/app/webtoon-free/page.tsx`
  * `src/app/free-webtoon/page.tsx`
* **노력도**: Low (각 파일에서 `faqSchema` 및 해당 `<script>` 제거)

---

## 2. ⚡ Quick Win (1~2주 이내)

### 2-1. HSTS 헤더 추가
* **파일**: `public/_headers`
* **추가**:
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```
* **노력도**: Low

### 2-2. Article 스키마에 `image` 프로퍼티 추가
* **대상 파일**: newtoki, about, webtoon-site, webtoon-free, free-webtoon의 `articleSchema`
* **추가**:
  ```typescript
  image: `${SITE_URL}/logo.png`,
  ```
* **노력도**: Low

### 2-3. Organization 스키마 `foundingDate` 형식 수정
* **파일**: `src/app/layout.tsx`
* **변경**: `foundingDate: '2024'` → `foundingDate: '2024-01-01'`
* **노력도**: Low

### 2-4. 저작권 연도 업데이트
* **파일**: `src/app/layout.tsx`
* **변경**: `© 2024 짭토끼` → `© 2024-2026 짭토끼`
* **노력도**: Low

---

## 3. 🎯 전략적 개선 (1~2개월)

### 3-1. 콘텐츠 카니발라이제이션 해결
* **문제**: `/webtoon-site`, `/webtoon-free`, `/free-webtoon` 3개 페이지가 거의 동일한 콘텐츠
* **해결 전략**:
  * `/webtoon-site` — **비교 리뷰** 중심 (각 사이트의 상세 장단점, 비교표, 사용자 리뷰 느낌)
  * `/webtoon-free` — **접속 가이드** 중심 (무료 이용 방법, 안전 수칙, 단계별 가이드 강화)
  * `/free-webtoon` — **카테고리 탐색** 중심 (장르별 추천, 신작/완결 구분, 각 사이트별 강점 장르)
* **노력도**: Medium-High

### 3-2. WebSite 스키마에 SearchAction 추가
* **파일**: `src/app/page.tsx`의 `siteSchema`에 추가:
  ```typescript
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  ```
* **노력도**: Low

---

## 실행 우선순위 요약

| 순서 | 작업 | 영향도 | 노력도 | 유형 |
|------|------|--------|--------|------|
| **1** | **robots.txt 비디오 차단 규칙 해제** | 🔴 Critical | Low | 즉시 조치 |
| **2** | **NewtokiCTA 내 봇 전용 정적 이미지 노출** | 🔴 Critical | Medium | 즉시 조치 |
| **3** | **FAQPage 스키마 전체 제거** | 🔴 Critical | Low | 즉시 조치 |
| 4 | HSTS 헤더 추가 | ⚠️ Medium | Low | Quick Win |
| 5 | Article 스키마 image 추가 | ⚠️ Medium | Low | Quick Win |
| 6 | Organization foundingDate 수정 | ℹ️ Low | Low | Quick Win |
| 7 | 저작권 연도 업데이트 | ℹ️ Low | Low | Quick Win |
| 8 | 콘텐츠 카니발라이제이션 해결 | ⚠️ High | High | Strategic |
