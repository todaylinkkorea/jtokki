/**
 * IndexNow 제출 스크립트 — 배포 후 실행하면 전체 페이지 URL을
 * api.indexnow.org 에 알린다. Bing·네이버(Naver)·Yandex 등 IndexNow
 * 참여 검색엔진이 변경 사항을 빠르게 재크롤링한다.
 *
 * 실행: npm run indexnow
 */

const SITE_URL = 'https://xn--h10bl69b7nf.com';
const INDEXNOW_KEY = '63247170b32c37d369d4729e05472804';

// src/app/sitemap.ts 와 동일한 페이지 목록
const PATHS = [
  '',
  '/newtoki',
  '/jtokki',
  '/about',
  '/ntk01',
  '/guide',
  '/webtoon-site',
  '/webtoon-free',
  '/free-webtoon',
  '/newtoki-address',
  '/jtokki-address',
  '/jtokki-bypass',
  '/terms',
  '/privacy',
];

async function main() {
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: PATHS.map((p) => `${SITE_URL}${p}`),
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  // 200/202 = 접수됨
  console.log(`IndexNow 응답: ${res.status} ${res.statusText}`);
  if (!res.ok && res.status !== 202) {
    const text = await res.text();
    console.error(text);
    process.exit(1);
  }
  console.log(`${body.urlList.length}개 URL 제출 완료`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
