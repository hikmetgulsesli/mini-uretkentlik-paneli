// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Geçmiş Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface GecmisEkraniProps {}

export function GecmisEkrani(props: GecmisEkraniProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-6 gap-8 w-72 shrink-0 bg-[#171f33] dark:bg-[#171f33] border-none font-['Inter'] leading-relaxed antialiased z-50">
      {/* Header */}
      <div className="flex items-center gap-4 px-2">
      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-primary" data-icon="space_dashboard" style={{fontVariationSettings: "'FILL' 1"}}>space_dashboard</span>
      </div>
      <div>
      <h2 className="text-lg font-black tracking-tighter text-[#b4c5ff]">Mini Üretkenlik</h2>
      <p className="text-xs font-medium text-on-surface-variant/80">Luminous Void</p>
      </div>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex flex-col gap-1 mt-4">
      {/* Sayaç (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="timer">timer</span>
      <span className="font-medium">Sayaç</span>
      </a>
      {/* Notlar (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="description">description</span>
      <span className="font-medium">Notlar</span>
      </a>
      {/* Geçmiş (Active) */}
      <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98]" href="#">
      <span className="material-symbols-outlined" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
      <span className="font-bold">Geçmiş</span>
      </a>
      {/* Ayarlar (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto px-2">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-lg font-bold hover:brightness-105 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)]">
      <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                      Yeni Not
                  </button>
      </div>
      </aside>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl border-none">
      <div className="flex-1 flex items-center">
      <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      </button>
      </div>
      <div className="flex items-center gap-1">
      <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-[288px] pt-24 min-h-screen p-8 lg:p-12 xl:p-16">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-16">
      <div>
      <h1 className="font-display text-[3.5rem] leading-none font-black tracking-tighter text-on-surface mb-2">Geçmiş</h1>
      <p className="font-body text-body-md text-on-surface-variant">Tüm aktivite ve not geçmişiniz.</p>
      </div>
      <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-outline-variant/20 hover:border-error/50 text-on-surface-variant hover:text-error hover:bg-error/5 transition-all duration-300">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      <span className="font-medium text-sm">Geçmişi Temizle</span>
      </button>
      </div>
      {/* History Content Grid */}
      <div className="space-y-16">
      {/* Group: Bugün */}
      <section>
      <h3 className="font-headline text-headline-sm font-bold text-on-surface mb-6 flex items-center gap-6">
                          Bugün 
                          <span className="h-px flex-1 bg-gradient-to-r from-outline-variant/20 to-transparent"></span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1: Action (Add) */}
      <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)] relative">
      <div className="absolute inset-0 bg-secondary blur-md opacity-20 rounded-full"></div>
      <span className="material-symbols-outlined text-secondary relative z-10" data-icon="add">add</span>
      </div>
      <span className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">14:32</span>
      </div>
      <div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Sayaç artırıldı</h4>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">Çalışma seansına +15 dakika eklendi. Odaklanma süresi uzatıldı.</p>
      </div>
      </div>
      {/* Card 2: Action (Note) */}
      <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-primary" data-icon="description">description</span>
      </div>
      <span className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">11:05</span>
      </div>
      <div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Not eklendi</h4>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">"Proje X Tasarım Revizyonları" başlıklı yeni bir çalışma notu oluşturuldu.</p>
      </div>
      </div>
      {/* Card 3: Action (Timer) */}
      <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-tertiary" data-icon="timer">timer</span>
      </div>
      <span className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">09:15</span>
      </div>
      <div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Seans tamamlandı</h4>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">25 dakikalık ilk odaklanma seansı başarıyla bitirildi.</p>
      </div>
      </div>
      </div>
      </section>
      {/* Group: Dün */}
      <section>
      <h3 className="font-headline text-headline-sm font-bold text-on-surface mb-6 flex items-center gap-6 opacity-60">
                          Dün 
                          <span className="h-px flex-1 bg-gradient-to-r from-outline-variant/20 to-transparent"></span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 4: Action (Remove) */}
      <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden opacity-80 hover:opacity-100">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)] relative">
      <span className="material-symbols-outlined text-error" data-icon="remove">remove</span>
      </div>
      <span className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">16:40</span>
      </div>
      <div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Sayaç azaltıldı</h4>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">Yanlışlıkla başlatılan seans süresi -10 dakika düzeltildi.</p>
      </div>
      </div>
      {/* Card 5: Action (Note Edit) */}
      <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden opacity-80 hover:opacity-100">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-primary" data-icon="edit_document">edit_document</span>
      </div>
      <span className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">13:20</span>
      </div>
      <div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Not güncellendi</h4>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed">Haftalık planlama notuna yeni maddeler eklendi.</p>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
