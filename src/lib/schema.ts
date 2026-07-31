import { SITE_URL } from './constants';

/**
 * Article.publisher 공통 블록 — 전 페이지에서 동일하게 사용한다.
 * Google Article 가이드는 publisher 포함 시 logo(ImageObject)를 권장 필드로 명시.
 */
export const ORG_PUBLISHER = {
  '@type': 'Organization',
  name: '짭토끼',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 480,
    height: 520,
  },
} as const;
