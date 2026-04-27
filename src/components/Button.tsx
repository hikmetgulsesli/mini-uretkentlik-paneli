import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary',
  secondary:
    'bg-secondary-container text-on-secondary-container hover:brightness-110 focus-visible:ring-2 focus-visible:ring-secondary',
  danger:
    'bg-error text-on-error hover:brightness-105 focus-visible:ring-2 focus-visible:ring-error',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
        'transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'enabled:cursor-pointer',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
}
