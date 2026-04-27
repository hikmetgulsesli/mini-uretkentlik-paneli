// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sayaç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SayacEkraniProps {}

export function SayacEkrani(props: SayacEkraniProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-[#171f33] dark:bg-[#171f33] border-none flat no shadows tonal layering level-1 h-screen w-72 flex-col shrink-0 fixed left-0 top-0 h-full flex flex-col p-6 gap-8 z-50">
      {/* Header */}
      <div className="flex flex-col gap-1">
      <h1 className="text-lg font-black tracking-tighter text-[#b4c5ff] font-['Inter'] leading-relaxed antialiased">Mini Üretkenlik</h1>
      <span className="text-xs text-on-surface-variant font-medium tracking-wide">Luminous Void</span>
      </div>
      {/* CTA */}
      <button className="w-full bg-primary-container text-on-primary-container rounded-lg py-3 px-4 font-bold flex justify-center items-center gap-2 hover:brightness-105 transition-all duration-200 Active: scale-[0.98] bg-gradient-to-br from-primary-container to-primary/80">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  Yeni Not
              </button>
      {/* Tabs */}
      <div className="flex flex-col gap-2 flex-grow mt-4">
      {/* Active Tab: Sayaç */}
      <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
                      Sayaç
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105" href="#">
      <span className="material-symbols-outlined">description</span>
                      Notlar
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105" href="#">
      <span className="material-symbols-outlined">history</span>
                      Geçmiş
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Ayarlar
                  </a>
      </div>
      {/* User Avatar Placeholder (Bottom) */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-outline-variant/20">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="close up portrait of a man looking professional in dark lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsXWfQ-AG0l-pUDd0YdIfuRyFQEuOYLuJ8Pj2nFRjDYyUhIPE0ItdWFACqLeptzJufEP59h4wtILlFgchr8X_t-KL0JHzFhrX-OVVJH5umQ9EF_hQqysUnidn2QY_rrtKkNxecE0PaAjvKFnGVgJjS9-9gcGJlV4kefvPUqXlrEpAtQwUUF_6kfoxKvn4Q2lygIkIPX0up4567iBXtuurjYfFzWvSsTZJMYa9B9y-SagswwUzQeXq3rourMfRJdIffdhcGy3tf" />
      </div>
      <div className="flex flex-col">
      <span className="text-sm font-medium text-on-surface">Kullanıcı</span>
      <span className="text-xs text-on-surface-variant">Profil</span>
      </div>
      </div>
      </nav>
      {/* TopNavBar (Mobile mainly, or supplementary on Web) */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl bg-transparent flat font-['Inter'] text-sm font-medium">
      <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{fontSize: "18px"}}>search</span>
      <input className="bg-surface-container-lowest border border-outline-variant/20 rounded-full py-1.5 pl-9 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-colors w-64 placeholder:text-on-surface-variant" placeholder="Ara..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-200 Soft fade on hover with 5% brightness increase flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-200 Soft fade on hover with 5% brightness increase flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-72 pt-24 pb-12 px-6 lg:px-12 flex flex-col items-center min-h-screen relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="w-full max-w-3xl flex flex-col items-center gap-16 mt-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
      <h2 className="text-headline-sm font-bold text-on-surface tracking-tight">Odağı Koru</h2>
      <p className="text-body-md text-on-surface-variant leading-relaxed">Hedeflerinize ulaşmak için sayacı kullanın.</p>
      </div>
      {/* Central Counter Display (Luminous Void Style) */}
      <div className="relative w-full max-w-md aspect-square flex flex-col items-center justify-center bg-surface-container-low rounded-[3rem] p-8 before:absolute before:inset-0 before:rounded-[3rem] before:bg-gradient-to-br before:from-surface-container-highest/40 before:to-transparent before:-z-10 isolate">
      {/* Number */}
      <div className="text-[8rem] font-black font-display text-transparent bg-clip-text bg-gradient-to-b from-on-surface to-on-surface-variant/50 leading-none tracking-tighter tabular-nums mb-4">
                          42
                      </div>
      <span className="text-label-md text-primary font-medium tracking-widest uppercase mb-12">Mevcut Değer</span>
      {/* Controls */}
      <div className="flex items-center gap-6 w-full justify-center mt-4">
      <button className="w-16 h-16 rounded-2xl bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300 group">
      <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">remove</span>
      </button>
      <button className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-container to-primary/80 flex items-center justify-center text-on-primary-container hover:brightness-110 transition-all duration-300 shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)] group">
      <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      </button>
      </div>
      </div>
      {/* Reset Actions */}
      <div className="flex justify-center w-full">
      <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20 hover:text-error hover:border-error/40 hover:bg-error/5 transition-colors text-sm font-medium">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
                          Sıfırla
                      </button>
      </div>
      {/* Recent Activity Widget (Bento Style) */}
      <div className="w-full mt-12">
      <h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[18px]">history</span>
                          Son İşlemler
                      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Item 1 */}
      <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group">
      <div className="absolute inset-0 bg-surface-bright/0 group-hover:bg-surface-bright/5 transition-colors"></div>
      <div className="flex justify-between items-start">
      <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">Bugün 14:30</span>
      <span className="material-symbols-outlined text-secondary text-[16px]">arrow_upward</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
      <span className="text-2xl font-bold text-on-surface leading-none">+5</span>
      <span className="text-xs text-on-surface-variant mb-1">Artırıldı</span>
      </div>
      </div>
      {/* Item 2 */}
      <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group">
      <div className="absolute inset-0 bg-surface-bright/0 group-hover:bg-surface-bright/5 transition-colors"></div>
      <div className="flex justify-between items-start">
      <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">Bugün 10:15</span>
      <span className="material-symbols-outlined text-error text-[16px]">arrow_downward</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
      <span className="text-2xl font-bold text-on-surface leading-none">-2</span>
      <span className="text-xs text-on-surface-variant mb-1">Azaltıldı</span>
      </div>
      </div>
      {/* Item 3 */}
      <div className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group border border-outline-variant/10">
      <div className="absolute inset-0 bg-surface-bright/0 group-hover:bg-surface-bright/5 transition-colors"></div>
      <div className="flex justify-between items-start">
      <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">Dün 18:00</span>
      <span className="material-symbols-outlined text-outline text-[16px]">refresh</span>
      </div>
      <div className="flex items-end gap-2 mt-2">
      <span className="text-2xl font-bold text-on-surface leading-none">0</span>
      <span className="text-xs text-on-surface-variant mb-1">Sıfırlandı</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
