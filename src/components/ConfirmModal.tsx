import { useEffect, useRef } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  iconName?: string;
  confirmIconName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  isOpen,
  title,
  description,
  confirmLabel = 'Sil',
  cancelLabel = 'İptal',
  iconName = 'error',
  confirmIconName = 'delete',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasFocusedRef = useRef(false);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      hasFocusedRef.current = false;
      return;
    }

    // Store previously focused element to restore later
    previouslyFocusedRef.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }

      // Focus trap: keep Tab cycling inside the modal
      if (e.key === 'Tab' && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableList = Array.from(focusable).filter(
          (el) => !("disabled" in el && (el as { disabled?: boolean }).disabled) && el.offsetParent !== null
        );
        if (focusableList.length === 0) return;

        const first = focusableList[0];
        const last = focusableList[focusableList.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus confirm button only on first open
    if (!hasFocusedRef.current) {
      hasFocusedRef.current = true;
      setTimeout(() => {
        confirmButtonRef.current?.focus();
      }, 0);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore previous focus when modal closes
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onCancel();
        }
      }}
    >
      <div className="w-full max-w-md bg-surface-container-low rounded-2xl shadow-[0_24px_48px_-12px_rgba(6,14,32,0.4)] relative overflow-hidden ring-1 ring-outline-variant/20">
        {/* Modal Header */}
        <div className="p-6 pb-0 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-2">
            <span
              className="material-symbols-outlined text-error text-4xl"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {iconName}
            </span>
          </div>
          <h2
            id="confirm-modal-title"
            className="text-2xl leading-tight font-bold text-on-surface tracking-tight"
          >
            {title}
          </h2>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center">
          <p
            id="confirm-modal-desc"
            className="text-sm leading-relaxed text-on-surface-variant px-4"
          >
            {description}
          </p>
        </div>

        {/* Modal Footer (Actions) */}
        <div className="p-6 pt-2 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium text-primary bg-transparent hover:bg-surface-bright/50 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmButtonRef}
            type="button"
            onClick={onConfirm}
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium text-on-error bg-error hover:brightness-105 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-error"
          >
            <span
              className="material-symbols-outlined text-lg"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {confirmIconName}
            </span>
            {confirmLabel}
          </button>
        </div>

        {/* Bottom decorative accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-error/0 via-error to-error/0 opacity-50" />
      </div>
    </div>
  );
}
