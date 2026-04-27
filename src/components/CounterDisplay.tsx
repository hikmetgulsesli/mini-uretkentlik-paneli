import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { ConfirmModal } from '../components/ConfirmModal';

export function CounterDisplay() {
  const { value, increment, decrement, reset } = useCounter();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    reset();
    setShowResetConfirm(false);
  };

  return (
    <>
      <div className="relative w-full max-w-md aspect-square flex flex-col items-center justify-center bg-surface-container-low rounded-[3rem] p-8 before:absolute before:inset-0 before:rounded-[3rem] before:bg-gradient-to-br before:from-surface-container-highest/40 before:to-transparent before:-z-10 isolate">
        <div className="text-[8rem] font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-on-surface to-on-surface-variant/50 leading-none tracking-tighter tabular-nums mb-4">
          {value}
        </div>
        <span className="text-label-md text-primary font-medium tracking-widest uppercase mb-12">
          Mevcut Değer
        </span>
        <div className="flex items-center gap-6 w-full justify-center mt-4">
          <button
            type="button"
            onClick={decrement}
            aria-label="Azalt"
            className="w-16 h-16 rounded-2xl bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
              remove
            </span>
          </button>
          <button
            type="button"
            onClick={increment}
            aria-label="Artır"
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-container to-primary/80 flex items-center justify-center text-on-primary-container hover:brightness-110 transition-all duration-300 shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] group cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              add
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <button
          type="button"
          onClick={handleReset}
          aria-label="Sıfırla"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20 hover:text-error hover:border-error/40 hover:bg-error/5 transition-colors text-sm font-medium cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
          Sıfırla
        </button>
      </div>

      <ConfirmModal
        isOpen={showResetConfirm}
        title="Sayaç Sıfırlama"
        description="Sayaç değeri sıfırlanacak ve bu işlem geçmişe kaydedilecek. Devam etmek istiyor musunuz?"
        confirmLabel="Sıfırla"
        cancelLabel="İptal"
        iconName="refresh"
        confirmIconName="refresh"
        onConfirm={confirmReset}
        onCancel={() => setShowResetConfirm(false)}
      />
    </>
  );
}
