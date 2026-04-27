// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Onay Modalı - Veri Silme
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

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
    title = "Tüm Verileri Sil",
    description = "Sayacı, notları ve geçmişi kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz.",
    confirmLabel = "Sil",
    cancelLabel = "İptal",
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
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md">
      {/* Modal Container */}
      <div className="w-full max-w-md bg-surface-container-low rounded-[16px] shadow-[0_24px_48px_-12px_rgba(6,14,32,0.4)] relative overflow-hidden ring-1 ring-outline-variant/20">
      {/* Modal Header */}
      <div className="p-6 pb-0 flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-2">
      <span className="material-symbols-outlined text-error text-4xl" data-icon="error" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      </div>
      <h2 className="text-[1.5rem] leading-[1.2] font-headline font-bold text-on-surface tracking-tight">
                          {title}
                      </h2>
      </div>
      {/* Modal Body */}
      <div className="p-6 text-center">
      <p className="text-[0.875rem] leading-[1.5] text-on-surface-variant font-body px-4">
                          {description}
                      </p>
      </div>
      {/* Modal Footer (Actions) */}
      <div className="p-6 pt-2 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-center">
      <button
        type="button"
        onClick={onCancel}
        className="w-full sm:w-auto px-6 py-3 rounded-lg font-label text-[0.875rem] font-medium text-primary bg-transparent hover:bg-surface-bright/50 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
      >
                          {cancelLabel}
                      </button>
      <button
        type="button"
        onClick={onConfirm}
        className="w-full sm:w-auto px-6 py-3 rounded-lg font-label text-[0.875rem] font-medium text-on-error bg-error hover:brightness-105 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-error"
      >
      <span className="material-symbols-outlined text-lg" data-icon="delete" style={{fontVariationSettings: "'FILL' 1"}}>delete</span>
                          {confirmLabel}
                      </button>
      </div>
      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-error/0 via-error to-error/0 opacity-50"></div>
      </div>
      </div>
    </>
  );
}
