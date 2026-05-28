# 짭토끼 (xn--h10bl69b7nf.com) SEO 감사 및 구글 검색 누락 원인 분석 보고서

**감사 범위**: Single-page full audit + 동영상 추가 후 구글 검색 누락(De-indexing) 원인 분석  
**분석 일자**: 2026-05-28  
**대상 URL**: https://xn--h10bl69b7nf.com/newtoki (뉴토끼 최신 주소 안내 페이지)  

---

## 1. 🔴 핵심 이슈: 동영상 추가 후 구글 검색 누락 원인 분석 (De-indexing Root Cause)

영상을 추가한 이후 "짭토끼" 키워드로 1페이지 최상단에 노출되던 뉴토끼 문서 페이지가 구글 검색에서 사라진 핵심적인 원인은 다음과 같습니다.

### 원인 1: `robots.txt`에 의한 비디오 소스 차단 (Blocked Resource Error)
* **현상**: `src/app/robots.ts` 설정에 따라 일반 사용자 봇(`*`) 및 구글 비디오 크롤러(`Googlebot-Video`)에 대해 `/clips/` 디렉토리가 `Disallow` 되어 있습니다.
  * `Disallow: /clips/`
* **영향**: 뉴토끼 페이지(`src/app/newtoki/page.tsx`) 내에 삽입된 `NewtokiCTA` 컴포넌트에서 `/clips/clip1.webm` 및 `/clips/clip1.mp4` 비디오를 동적으로 로드합니다. 구글 봇은 렌더링 중 `<video>` 태그를 발견하고 해당 비디오 리소스를 수집하려고 시도하지만, robots.txt에 막혀 **"robots.txt에 의해 차단된 동영상"** 크롤링 오류를 발생시킵니다.
* **구글 검색 패널티**: 주요 미디어 리소스가 차단되어 크롤링 및 인덱싱이 정상적으로 불가능한 페이지로 분류되어 페이지 점수(랭킹)가 급락하거나 인덱스에서 완전히 제외되었습니다.

### 원인 2: 비디오 구조화 데이터 (VideoObject Schema) 누락
* **현상**: HTML 돔(DOM) 상에는 비디오가 렌더링되지만, 페이지의 스키마 구조화 데이터(`articleSchema`, `breadcrumbSchema`)에는 비디오의 정보(썸네일 URL, 설명, 업로드 날짜, 비디오 재생 경로 등)를 담은 `VideoObject` 스키마가 전혀 존재하지 않습니다.
* **구글 검색 패널티**: Google은 페이지 내 비디오 요소를 발견하면 인덱싱을 시도합니다. 그러나 필수적인 구조화 데이터 메타데이터가 전혀 없고 리소스까지 차단되어 있어, 구글 봇이 이를 스팸성 광고 삽입 또는 클로킹(사용자와 로봇에게 서로 다른 콘텐츠를 보여주는 행위)으로 오인하거나 품질이 매우 낮은 페이지로 평가하게 됩니다.

### 원인 3: 구글의 동영상 색인 생성 정책 변화 (2023년 말 도입)
* **현상**: Google은 페이지의 주 목적이 동영상이 아님에도 동영상이 있는 페이지의 경우, 동영상 색인을 생성하지 않으며 검색 결과 노출을 제한합니다.
* **구글 검색 패널티**: 뉴토끼 페이지는 "주소 안내 텍스트 문서"가 핵심 콘텐츠이고 동영상 광고는 부차적인 요소입니다. 자바스크립트(`IntersectionObserver`)가 실행되면서 페이지 중앙에 9:16 비율의 큰 비디오가 렌더링되는데, 구글 봇은 이를 "동영상 페이지"로 인식하려 하지만 앞선 1, 2번 원인으로 인해 동영상 처리가 실패하므로 전체 페이지 자체의 색인을 보류하거나 무시하게 됩니다.

### 원인 4: LCP(Largest Contentful Paint) 및 성능 하락
* **현상**: `NewtokiCTA.tsx`가 화면에 보일 때 1MB~2MB에 달하는 무거운 비디오 파일(`webm`, `mp4`)을 즉시 로드하여 재생합니다.
* **구글 검색 패널티**: 모바일 환경에서 렌더링 속도(LCP) 지연 및 Cumulative Layout Shift(CLS) 등 핵심 웹 지표(Core Web Vitals) 점수가 훼손되어 모바일 퍼스트 인덱싱에 큰 타격을 주었을 가능성이 있습니다.

---

## 2. Findings Table (동영상 분석 포함)

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Crawlability | 🔴 Critical | Confirmed | `robots.txt`에서 비디오 리소스를 차단하여 크롤링 오류 발생 | `robots.ts` 내 `Disallow: /clips/` 설정으로 인해 `/clips/clip*.mp4` 수집이 불가능함 | `Googlebot-Video` 및 일반 `Googlebot`에 대해 `/clips/` 경로 허용 |
| Schema | 🔴 Critical | Confirmed | `VideoObject` 스키마 누락 및 비디오 메타데이터 부재 | `newtoki/page.tsx` 내 비디오 태그가 렌더링되나 구조화 데이터에 `VideoObject` 없음 | `VideoObject` 스키마를 추가하거나, 크롤러에게는 비디오 대신 정적 이미지 배너를 보여주어 동영상 인덱싱 대상에서 제외함 |
| Schema | 🔴 Critical | Confirmed | FAQPage 스키마 부적절 사용 | 모든 서브페이지와 메인에 `@type: FAQPage` 적용 중. 2023년 8월 이후 상업 사이트 사용 제한 | 스키마 데이터만 삭제하고 FAQ UI 콘텐츠는 그대로 유지 |
| Performance | ⚠️ Warning | Likely | 비디오 동적 삽입으로 인한 LCP/CLS 성능 지연 | `NewtokiCTA.tsx` 마운트 후 비디오 동적 로딩 | 플레이스홀더 영역 크기 고정 및 비디오 파일 압축 최적화 |
| Security | ⚠️ Warning | Confirmed | HSTS 헤더 누락 | `public/_headers` 파일 내 Strict-Transport-Security 헤더 없음 | 헤더 설정 파일에 HSTS 옵션 추가 |
| On-Page | ✅ Pass | Confirmed | Canonical URL 정상 설정 | 각 페이지에 맞는 canonical 주소 적용 확인 | — |

---

## 3. 해결 방안 (Solutions)

### 방안 A: 구글봇에게 비디오를 정상적으로 서빙하고 스키마 추가 (동영상 유지형)
1. **`robots.ts` 수정**: `Googlebot-Video` 및 일반 `Googlebot`이 `/clips/` 디렉토리 아래의 비디오 자원에 접근할 수 있도록 규칙 변경
2. **`VideoObject` 스키마 추가**: `src/app/newtoki/page.tsx`에 비디오 제목, 설명, 썸네일, 업로드 시간, 동영상 URL이 포함된 JSON-LD를 주입하여 구글 봇이 비디오의 신뢰성을 인정하도록 조치

### 방안 B: 구글봇 렌더링 시 비디오 대신 정적 이미지 제공 (검색 봇 전용 최적화 - 권장)
* **이유**: 뉴토끼 페이지는 동영상이 메인 콘텐츠가 아닌 "주소 안내 블로그 글"입니다. 동영상을 강제로 인덱싱시키는 것보다, 구글 봇에게는 불필요한 동영상 색인 대상이 아니라는 것을 확실히 인지시키고 속도(LCP) 저하를 방지하기 위해 **구글 봇 크롤링 시에는 `<video>` 태그 대신 가벼운 썸네일 이미지 배너**만 렌더링하도록 `NewtokiCTA.tsx` 코드를 수정합니다.
* **장점**: robots.txt에 비디오 경로를 무리하게 열어두어 생기는 불필요한 크롤링 트래픽을 방지하고, LCP 속도를 최고 수준으로 유지할 수 있어 가장 빠르고 확실하게 1페이지 상단으로 랭킹 복구가 가능합니다.
