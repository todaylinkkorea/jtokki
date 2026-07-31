'use client';

import { useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  highlightWord?: string;
}

export function TypingEffect({ text, highlightWord }: TypingEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<span class="cursor"></span>';
    let i = 0;

    function type() {
      if (!el) return;
      if (i < text.length) {
        const typed = text.slice(0, i + 1);
        let display: string;
        if (highlightWord && typed.includes(highlightWord)) {
          display = typed.replace(
            highlightWord,
            `<span class="hero__highlight">${highlightWord}</span>`
          );
        } else {
          display = typed;
        }
        el.innerHTML = display + '<span class="cursor"></span>';
        i++;
        setTimeout(type, 60 + Math.random() * 40);
      }
    }
    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [text, highlightWord]);

  // SSR/크롤러에는 전체 텍스트를 노출하고, 하이드레이션 후 타이핑 애니메이션으로 대체한다
  const idx = highlightWord ? text.indexOf(highlightWord) : -1;
  return (
    <span ref={ref}>
      {idx >= 0 && highlightWord ? (
        <>
          {text.slice(0, idx)}
          <span className="hero__highlight">{highlightWord}</span>
          {text.slice(idx + highlightWord.length)}
        </>
      ) : (
        text
      )}
    </span>
  );
}
