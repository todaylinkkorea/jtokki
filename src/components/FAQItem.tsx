'use client';

import { useState, type ReactNode } from 'react';

interface FAQItemProps {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function FAQItem({ question, children, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="faq-chevron">▼</span>
      </button>
      <div className="faq-answer">{children}</div>
    </div>
  );
}
