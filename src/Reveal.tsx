import type { ReactNode } from 'react';

type RevealStyle = 'lift' | 'sweep' | 'focus' | 'lines';

/** CSS view timelines link heading progress to scrolling; static HTML is the fallback. */
export default function Reveal({ children, className = '', variant = 'lift' }: {
  children: ReactNode;
  className?: string;
  variant?: RevealStyle;
}) {
  return <div className={`scroll-reveal scroll-reveal--${variant} ${className}`}>{children}</div>;
}
