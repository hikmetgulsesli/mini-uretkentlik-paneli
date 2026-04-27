// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Onay Modalı - Veri Silme
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { ConfirmModal } from '../components/ConfirmModal';

interface OnayModaliVeriSilmeProps {
  isOpen?: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function OnayModaliVeriSilme(props: OnayModaliVeriSilmeProps) {
  const {
    isOpen = true,
    title = 'Tüm Verileri Sil',
    description = 'Sayacı, notları ve geçmişi kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz.',
    confirmLabel = 'Sil',
    cancelLabel = 'İptal',
    onConfirm,
    onCancel,
  } = props;

  if (!isOpen) return null;

  return (
    <>
      {/* Mock Background Content (Blurred out) */}
      <div className="fixed inset-0 z-0 bg-surface blur-sm opacity-50 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl p-8 grid gap-8">
          <div className="h-64 bg-surface-container rounded-xl w-full"></div>
          <div className="grid grid-cols-2 gap-8">
            <div className="h-48 bg-surface-container rounded-xl"></div>
            <div className="h-48 bg-surface-container rounded-xl"></div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isOpen}
        title={title}
        description={description}
        confirmLabel={confirmLabel}
        cancelLabel={cancelLabel}
        onConfirm={onConfirm ?? (() => {})}
        onCancel={onCancel ?? (() => {})}
      />
    </>
  );
}
