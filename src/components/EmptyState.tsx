import type { ReactNode } from 'react';

interface EmptyStateProps {
  icon: string;
  message: string;
  subMessage?: string;
  actionLabel?: string;
  actionIcon?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon,
  message,
  subMessage,
  actionLabel,
  actionIcon,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-12 text-center relative z-10">
      {/* Icon Composition */}
      <div className="relative mb-10 group">
        {/* Soft under-glow for icon */}
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700" />
        <div className="w-32 h-32 rounded-[2rem] bg-surface-container-low border border-outline-variant/20 shadow-[0_24px_48px_-12px_rgba(6,14,32,0.8)] flex items-center justify-center relative rotate-[-4deg] group-hover:rotate-0 transition-all duration-500 ease-out">
          {/* Layered icons for depth */}
          <span className="material-symbols-outlined text-7xl text-surface-bright absolute -right-4 -bottom-2 opacity-50 blur-[2px]" aria-hidden="true">
            {icon}
          </span>
          <span
            className="material-symbols-outlined text-6xl text-primary"
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
          {/* Decorative sparkle */}
          <span
            className="material-symbols-outlined text-secondary absolute top-4 right-4 text-sm"
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            temp_preferences_custom
          </span>
        </div>
      </div>

      {/* Typography */}
      <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4 tracking-tight">
        {message}
      </h2>
      {subMessage && (
        <p className="font-normal text-on-surface-variant text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
          {subMessage}
        </p>
      )}

      {/* Inline Action */}
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="group flex items-center gap-3 px-6 py-3 rounded-lg border border-outline-variant/20 text-primary hover:bg-surface-bright/20 hover:border-primary/40 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
        >
          {actionIcon && (
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              {actionIcon}
            </span>
          )}
          <span className="font-medium">{actionLabel}</span>
        </button>
      )}
    </div>
  );
}
