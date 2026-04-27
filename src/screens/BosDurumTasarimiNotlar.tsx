// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum Tasarımı - Notlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumTasarimiNotlarProps {
  onCreateNote?: () => void;
}

export function BosDurumTasarimiNotlar(props: BosDurumTasarimiNotlarProps) {
  const { onCreateNote } = props;

  return (
    <>
      {/* SideNavBar from JSON Blueprint */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-6 gap-8 bg-[#171f33] dark:bg-[#171f33] font-['Inter'] leading-relaxed antialiased h-screen w-72 shrink-0 z-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-2">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-primary-container text-xl" style={{fontVariationSettings: "'FILL' 1"}}>
                          space_dashboard
                      </span>
      </div>
      <div>
      <h1 className="text-lg font-black tracking-tighter text-[#b4c5ff] leading-none">Mini Üretkenlik</h1>
      <span className="text-[0.65rem] text-on-surface-variant uppercase tracking-widest mt-1 block">Luminous Void</span>
      </div>
      </div>
      {/* CTA */}
      <button
        type="button"
        onClick={onCreateNote}
        className="w-full bg-gradient-to-br from-[#2563eb] to-[#b4c5ff] text-[#00174b] font-bold rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(37,99,235,0.4)] cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
      >
      <span className="material-symbols-outlined text-[20px]">add</span>
                  Yeni Not
              </button>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 mt-4 flex-1">
      {/* Sayaç (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">timer</span>
      <span className="font-medium text-sm">Sayaç</span>
      </a>
      {/* Notlar (Active) */}
      <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98]" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
      <span className="font-bold text-sm">Notlar</span>
      </a>
      {/* Geçmiş (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">history</span>
      <span className="font-medium text-sm">Geçmiş</span>
      </a>
      {/* Ayarlar (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">settings</span>
      <span className="font-medium text-sm">Ayarlar</span>
      </a>
      </nav>
      {/* Bottom User Area placeholder to match high-end feel */}
      <div className="mt-auto px-4 py-3 rounded-lg bg-surface-container-highest/50 flex items-center gap-3 border border-outline-variant/10">
      <div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface text-sm">person</span>
      </div>
      <div className="flex flex-col">
      <span className="text-xs font-medium text-on-surface">Kullanıcı Profili</span>
      </div>
      </div>
      </aside>
      {/* Main Canvas Area */}
      <main className="ml-72 h-screen flex items-center justify-center relative bg-surface">
      {/* Ambient Background Glow for "Luminous Void" effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Empty State Content Container */}
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-12 text-center relative z-10">
      {/* Icon Composition */}
      <div className="relative mb-10 group">
      {/* Soft under-glow for icon */}
      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
      <div className="w-32 h-32 rounded-[2rem] bg-surface-container-low border border-outline-variant/20 shadow-[0_24px_48px_-12px_rgba(6,14,32,0.8)] flex items-center justify-center relative rotate-[-4deg] group-hover:rotate-0 transition-all duration-500 ease-out">
      {/* Layered icons for depth */}
      <span className="material-symbols-outlined text-7xl text-surface-bright absolute -right-4 -bottom-2 opacity-50 blur-[2px]">
                              sticky_note_2
                          </span>
      <span className="material-symbols-outlined text-6xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                              sticky_note_2
                          </span>
      {/* Decorative sparkle */}
      <span className="material-symbols-outlined text-secondary absolute top-4 right-4 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>
                              temp_preferences_custom
                          </span>
      </div>
      </div>
      {/* Typography (Editorial Hierarchy) */}
      <h2 className="text-display font-bold text-3xl md:text-4xl text-on-surface mb-4 tracking-tight">
                      Henüz not eklenmemiş.
                  </h2>
      <p className="text-body font-normal text-on-surface-variant text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
                      Yeni bir not ekleyerek başlayabilirsiniz. Fikirlerinizi, görevlerinizi veya kısa hatırlatıcılarınızı burada toplayın.
                  </p>
      {/* Inline Action (Ghost Button matching Minimalist aesthetic) */}
      <button
        type="button"
        onClick={onCreateNote}
        className="group flex items-center gap-3 px-6 py-3 rounded-lg border border-outline-variant/20 text-primary hover:bg-surface-bright/20 hover:border-primary/40 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
      >
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-300">
                          edit_document
                      </span>
      <span className="font-medium">İlk Notunu Oluştur</span>
      </button>
      </div>
      </main>
    </>
  );
}
