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

  return <span ref={ref} />;
}
