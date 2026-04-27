// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarEkraniProps {
  onNavigate?: (screen: string) => void;
}

export function AyarlarEkrani(props: AyarlarEkraniProps) {
  const { onNavigate } = props;
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-full flex flex-col p-6 gap-8 bg-[#171f33] dark:bg-[#171f33] w-72 shrink-0 z-50 hidden md:flex border-none font-['Inter'] leading-relaxed antialiased">
      {/* Header */}
      <div className="flex items-center gap-4 px-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-primary flex items-center justify-center shrink-0 shadow-[0_0_24px_-4px_rgba(37,99,235,0.4)]">
      <span className="material-symbols-outlined text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>target</span>
      </div>
      <div>
      <h1 className="text-lg font-black tracking-tighter text-[#b4c5ff]">Mini Üretkenlik</h1>
      <p className="text-xs text-on-surface-variant font-medium">Luminous Void</p>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-xl py-3 px-4 font-semibold hover:brightness-105 hover:scale-[0.98] transition-all duration-200 shadow-[0_0_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined">add</span>
                  Yeni Not
              </button>
      {/* Navigation Links */}
      <div className="flex flex-col gap-2 mt-4 flex-1">
      {/* Inactive Tab 1 */}
      <button
        type="button"
        onClick={() => onNavigate?.('counter')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group text-left cursor-pointer"
      >
        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">timer</span>
        <span className="font-medium">Sayaç</span>
      </button>
      {/* Inactive Tab 2 */}
      <button
        type="button"
        onClick={() => onNavigate?.('notes')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group text-left cursor-pointer"
      >
        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">description</span>
        <span className="font-medium">Notlar</span>
      </button>
      {/* Inactive Tab 3 */}
      <button
        type="button"
        onClick={() => onNavigate?.('history')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg group text-left cursor-pointer"
      >
        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">history</span>
        <span className="font-medium">Geçmiş</span>
      </button>
      {/* Active Tab 4 */}
      <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98]" href="#settings">
        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
        <span className="font-medium">Ayarlar</span>
      </a>
      </div>
      {/* User Profile Area (Bottom) */}
      <div className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low cursor-pointer transition-colors">
      <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="close up portrait of a young woman with neutral expression on dark background soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_b4Y4ymMDbGSiQt0lItXFJnf-sqkzXmITSEEjN2k3jxtyY5AkizZqNmsGfzO70NvPixzMLlqgIixcS1kV-wCsM89DkI9YkQqfnS-gfuqdLdcjBbMdu-p-z2Y-bx7dRTtzqw9LdToXXuTwUsziUqE9PlRJE8jE-k8_ISiiwXKPSCFaauDWJlcMvFUdiU9X8SNexKA3AQ2VtYDz6RDPZKjvoRBsFqwuE8OTkBd9RfgBU2YINrw_7eK4eZ_D1bQCVeN2jRmzh6g" />
      </div>
      <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-on-surface truncate">Kullanıcı</p>
      <p className="text-xs text-on-surface-variant truncate">Pro Plan</p>
      </div>
      </div>
      </nav>
      {/* JSON Component: TopNavBar */}
      <header className="flex justify-between items-center w-full pl-6 md:pl-[324px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl font-['Inter'] text-sm font-medium border-none">
      {/* Left: Search / Branding */}
      <div className="flex items-center gap-4 flex-1">
      <span className="hidden">Panel</span>
      <div className="relative w-full max-w-md hidden md:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
      <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-slate-500 rounded-full py-2 pl-10 pr-4 outline-none border border-outline-variant/20 focus:border-primary/50 transition-colors shadow-none text-sm" placeholder="Ara..." type="text" />
      </div>
      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all">
      <span className="material-symbols-outlined">menu</span>
      </button>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-2">
      <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all md:hidden">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="pt-24 pb-12 px-6 md:pl-[324px] md:pr-12 w-full max-w-7xl mx-auto flex-1 flex flex-col gap-12 relative z-10">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-headline font-semibold tracking-tight text-on-surface">Ayarlar</h2>
      <p className="text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                      Çalışma ortamınızı kişiselleştirin ve veri tercihlerinizi yönetin. Değişiklikler anında kaydedilir.
                  </p>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Görünüm (Appearance) Card - Spans 7 cols */}
      <section className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 flex flex-col gap-8">
      <div className="flex items-center gap-4 border-b border-transparent pb-2">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">palette</span>
      </div>
      <div>
      <h3 className="text-xl font-headline font-medium text-on-surface">Görünüm</h3>
      <p className="text-sm text-on-surface-variant mt-1">Arayüz temasını çalışma ortamınıza göre ayarlayın.</p>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-surface-container p-2 rounded-xl">
      <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-high transition-colors w-full group">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">light_mode</span>
      <span className="font-medium text-sm">Açık Mod</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-surface-container-highest text-primary shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)] w-full transition-all">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dark_mode</span>
      <span className="font-medium text-sm">Karanlık Mod</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-high transition-colors w-full group">
      <span className="material-symbols-outlined group-hover:text-primary transition-colors">computer</span>
      <span className="font-medium text-sm">Sistem</span>
      </button>
      </div>
      </section>
      {/* Uygulama Hakkında (About) Card - Spans 5 cols */}
      <section className="lg:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col gap-8 h-full relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-colors duration-700 pointer-events-none"></div>
      <div className="flex items-center gap-4 relative z-10">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
      <span className="material-symbols-outlined text-primary">info</span>
      </div>
      <div>
      <h3 className="text-xl font-headline font-medium text-on-surface">Uygulama Hakkında</h3>
      </div>
      </div>
      <div className="flex flex-col gap-4 mt-auto relative z-10">
      <div className="flex items-center justify-between">
      <span className="text-base font-medium text-on-surface">Mini Üretkenlik Paneli</span>
      <span className="text-xs font-mono font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">v1.0.0</span>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">
                              Üretkenliğinizi artırmak için tasarlanmış, minimalist ve tamamen odaklanmaya yönelik dijital çalışma alanı aracı.
                          </p>
      <div className="flex gap-4 mt-4 pt-4 border-t border-surface-container-high/50">
      <a className="text-sm font-medium text-primary hover:text-primary-fixed-dim transition-colors" href="#">Sürüm Notları</a>
      <a className="text-sm font-medium text-primary hover:text-primary-fixed-dim transition-colors" href="#">Gizlilik Politikası</a>
      </div>
      </div>
      </section>
      {/* Veri Yönetimi (Data Management - Destructive) - Spans 12 cols */}
      <section className="lg:col-span-12 bg-surface-container-low rounded-xl p-8 mt-6 border border-error/10 relative overflow-hidden">
      {/* Faint red glow for danger zone */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-error/20 to-transparent"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
      <div className="flex gap-5 items-start max-w-2xl">
      <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center shrink-0 mt-1">
      <span className="material-symbols-outlined text-error">warning</span>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="text-lg font-headline font-medium text-error">Tehlikeli Bölge</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">
                                      Tüm yerel verilerinizi, sayaç geçmişinizi ve notlarınızı cihazınızdan kalıcı olarak siler. Bu işlem <span className="font-semibold text-on-surface">kesinlikle geri alınamaz</span> ve verileriniz kurtarılamaz.
                                  </p>
      </div>
      </div>
      <button className="shrink-0 flex items-center justify-center gap-2 bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded-lg px-6 py-3.5 font-medium transition-all duration-200 shadow-[0_4px_12px_-4px_rgba(147,0,10,0.3)]">
      <span className="material-symbols-outlined text-[20px]">delete_forever</span>
                              Tüm Verileri Temizle
                          </button>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
