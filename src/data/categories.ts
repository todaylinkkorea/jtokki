export type SiteStatus = 'live' | 'changed' | 'dead';

export interface Site {
  name: string;
  url: string;
  status: SiteStatus;
  latency: number | null;
  /** ISO date — when the URL was last changed */
  changedAt?: string;
  /** Previous URL before the change */
  previousUrl?: string;
}

export interface Category {
  id: string;
  icon: string;
  title: string;
  sites: Site[];
  uptime: number;
  lastCheck: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'webtoon',
    icon: '📖',
    title: '웹툰',
    sites: [
      { name: '뉴토끼', url: 'https://ntk01.com', status: 'live', latency: 245 },
      { name: '늑대닷컴', url: 'https://wfwf449.com', status: 'live', latency: 368 },
      { name: '툰코', url: 'https://tkor114.com', status: 'live', latency: 357 },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'drama',
    icon: '📺',
    title: '영화/드라마',
    sites: [
      { name: '티비위키', url: '#', status: 'live', latency: null },
      { name: '티비몬', url: '#', status: 'live', latency: null },
      { name: '후후티비', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'sports',
    icon: '🏀',
    title: '스포츠 중계',
    sites: [
      { name: '매직티비', url: '#', status: 'live', latency: null },
      { name: '헐크티비', url: '#', status: 'live', latency: null },
      { name: '빠른티비', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'BJ',
    icon: '🔞',
    title: 'BJ라이브',
    sites: [
      { name: '팬더티비', url: '#', status: 'live', latency: null },
      { name: '스트립챗', url: 'https://stripchat.com', status: 'live', latency: null },
      { name: '팝콘티비', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'adult-ko',
    icon: '🔞',
    title: '성인-국내',
    sites: [
      { name: '야스닷컴', url: '#', status: 'live', latency: null },
      { name: '오늘보지 (AI 영상)', url: '#', status: 'live', latency: null },
      { name: '야동코리아', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'adult-int',
    icon: '🔞',
    title: '성인-해외',
    sites: [
      { name: 'SpankBang', url: 'https://spankbang.com', status: 'live', latency: null },
      { name: 'XVideos', url: 'https://xvideos.com', status: 'live', latency: null },
      { name: 'XHamster', url: 'https://xhamster.com', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'toto-ko',
    icon: '⚽',
    title: '토토-국내',
    sites: [
      { name: '먹튀중개소', url: '#', status: 'live', latency: null },
      { name: '월드슬롯', url: '#', status: 'live', latency: null },
      { name: '도박꾼', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'toto-int',
    icon: '🎰',
    title: '토토-코인',
    sites: [
      { name: 'FOMO', url: '#', status: 'live', latency: null },
      { name: 'Stake', url: 'https://stake.com', status: 'live', latency: null },
      { name: 'BC.game', url: 'https://bc.game', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
  {
    id: 'op',
    icon: '💕',
    title: '유흥',
    sites: [
      { name: '건마에반하다', url: '#', status: 'live', latency: null },
      { name: '오피가이드', url: '#', status: 'live', latency: null },
      { name: '마사지맵', url: '#', status: 'live', latency: null },
    ],
    uptime: 100,
    lastCheck: '방금 전',
  },
];
