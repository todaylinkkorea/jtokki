'use client';

import { useState, useEffect } from 'react';
import { CATEGORIES, type Category } from '@/data/categories';
import { FavoriteButton } from './FavoriteButton';
import { CardReveal } from './CardReveal';

/** Crawler API base URL — override via env or default to localhost */
const CRAWLER_API_URL =
  process.env.NEXT_PUBLIC_CRAWLER_API_URL || 'http://localhost:3001';
const CRAWLER_API_KEY = process.env.NEXT_PUBLIC_CRAWLER_API_KEY || '';

/** Returns human-readable relative time like "3시간 전" */
function getRelativeTime(isoDate: string): string {
  const now = Date.now();
  const then = new Date(isoDate).getTime();
  const diffMs = now - then;
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}시간 전`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay}일 전`;
}

/** Map crawler API response to our Category[] shape */
interface CrawlerSite {
  name: string;
  currentUrl: string;
  status: string;
  latency: number | null;
  lastChecked: string | null;
}

interface CrawlerCategory {
  category: string;
  categoryTitle: string;
  icon: string;
  sites: CrawlerSite[];
  uptime: number;
}

interface CrawlerResponse {
  ok: boolean;
  data: CrawlerCategory[];
}

function mapApiToCategories(apiData: CrawlerCategory[]): Category[] {
  return apiData.map((cat) => ({
    id: cat.category,
    icon: cat.icon,
    title: cat.categoryTitle,
    sites: cat.sites.map((s) => ({
      name: s.name,
      url: s.currentUrl,
      status: (s.status === 'unknown' ? 'live' : s.status) as 'live' | 'changed' | 'dead',
      latency: s.latency,
      changedAt: undefined,
      previousUrl: undefined,
    })),
    uptime: cat.uptime,
    lastCheck: cat.sites[0]?.lastChecked
      ? getRelativeTime(cat.sites[0].lastChecked)
      : '방금 전',
  }));
}

export function CategorySection() {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const headers: Record<string, string> = {};
    if (CRAWLER_API_KEY) {
      headers['X-API-Key'] = CRAWLER_API_KEY;
    }

    fetch(`${CRAWLER_API_URL}/api/sites`, { headers })
      .then((res) => res.json() as Promise<CrawlerResponse>)
      .then((data) => {
        if (data.ok && data.data?.length > 0) {
          setCategories(mapApiToCategories(data.data));
          setIsLive(true);
        }
      })
      .catch(() => {
        // Silently fall back to static data
        console.log('[짭토끼] Crawler API unavailable — using static data');
      });
  }, []);

  return (
    <>
      {/* Category shortcut buttons */}
      <nav className="category-nav" aria-label="카테고리 바로가기">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="category-nav__btn"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      {/* Live indicator */}
      {isLive && (
        <div className="live-api-badge" style={{
          textAlign: 'center',
          marginBottom: '16px',
          fontSize: '12px',
          color: '#34d399',
          opacity: 0.7,
        }}>
          ● 실시간 데이터 연동 중
        </div>
      )}

      {/* Cards */}
      <div className="categories-grid">
        {categories.map((cat) => (
          <CardReveal key={cat.id}>
            <div id={cat.id} style={{ scrollMarginTop: '24px' }} />
            {/* Card header */}
            <div className="card__header">
              <h2 className="card__title">
                <span className="card__title-icon">{cat.icon}</span>
                {cat.title}
              </h2>
            </div>

            {/* Site items */}
            <div className="card__body">
              {cat.sites.map((site) => {
                const statusLabel =
                  site.status === 'live'
                    ? 'LIVE'
                    : site.status === 'changed'
                      ? 'CHANGED'
                      : 'DOWN';
                const statusClass =
                  site.status === 'live'
                    ? 'live'
                    : site.status === 'changed'
                      ? 'changed'
                      : 'dead';

                // For changed sites: show relative time of address change
                let latencyText: string;
                if (site.status === 'changed' && site.changedAt) {
                  latencyText = `${getRelativeTime(site.changedAt)} 변경`;
                } else if (site.latency) {
                  latencyText = `${site.latency}ms`;
                } else if (site.status === 'changed') {
                  latencyText = '주소변경';
                } else {
                  latencyText = '접속불가';
                }

                const siteKey = `${cat.id}__${site.name}`;

                return (
                  <div key={siteKey} className={`site-row site-row--${statusClass}`}>
                    <div className="site-row__left">
                      <a
                        href={site.url}
                        className="site-row__name"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.name}
                      </a>
                      <div className="site-row__meta">
                        <span className={`site-row__status site-row__status--${statusClass}`}>
                          <span className="site-row__dot" />
                          {statusLabel}
                        </span>
                        <span className="site-row__sep">-</span>
                        <span className="site-row__latency">{latencyText}</span>
                      </div>
                    </div>
                    <FavoriteButton siteKey={siteKey} />
                  </div>
                );
              })}
            </div>

            {/* Footer with uptime bar */}
            <div className="card__footer">
              <div className="card__uptime">
                <div className="uptime-bar">
                  <div
                    className="uptime-bar__fill"
                    style={{ width: `${cat.uptime}%` }}
                  />
                </div>
              </div>
              <span className="card__footer-time">최근 확인 {cat.lastCheck}</span>
            </div>
          </CardReveal>
        ))}
      </div>
    </>
  );
}
