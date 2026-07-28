/**
 * 페이지 신선도 표기를 위한 날짜 헬퍼.
 * 정적 빌드(SSG) 시점에 평가되므로, 워커 재빌드마다 값이 갱신된다.
 */

/** 빌드 시점의 "YYYY년 M월" 문자열 */
export function getDateLabel(): string {
  const now = new Date();
  return `${now.getFullYear()}년 ${now.getMonth() + 1}월`;
}

/** 빌드 시점의 "YYYY-MM-DD" 문자열 */
export function getTodayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
