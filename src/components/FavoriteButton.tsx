'use client';

import { useState } from 'react';

export function FavoriteButton({ siteKey }: { siteKey: string }) {
  const [active, setActive] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const favs: string[] = JSON.parse(localStorage.getItem('jtokki_favs') || '[]');
      return favs.includes(siteKey);
    } catch {
      return false;
    }
  });

  function toggle() {
    try {
      const favs: string[] = JSON.parse(localStorage.getItem('jtokki_favs') || '[]');
      const idx = favs.indexOf(siteKey);
      if (idx >= 0) {
        favs.splice(idx, 1);
        setActive(false);
      } else {
        favs.push(siteKey);
        setActive(true);
      }
      localStorage.setItem('jtokki_favs', JSON.stringify(favs));
    } catch {
      // localStorage unavailable
    }
  }

  return (
    <button
      className={`card__item-fav ${active ? 'active' : ''}`}
      onClick={toggle}
      aria-label="즐겨찾기"
      style={active ? { animation: 'fav-pop 0.3s ease' } : undefined}
    >
      {active ? '★' : '☆'}
    </button>
  );
}
