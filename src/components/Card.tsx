import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-outline-variant/20',
        'bg-surface-container shadow-[0_8px_24px_-8px_rgba(6,14,32,0.4)]',
        'p-6',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
