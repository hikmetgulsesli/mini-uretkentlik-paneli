// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Notlar Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface NotlarEkraniProps {}

export function NotlarEkrani(props: NotlarEkraniProps) {
  return (
    <>
      {/* Ambient Gradient Background (The Luminous Void) */}
      <div className="fixed top-0 left-[300px] w-full h-[512px] bg-gradient-to-br from-primary-container/10 via-transparent to-transparent opacity-50 pointer-events-none z-0"></div>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full flex flex-col p-6 gap-8 bg-[#171f33] dark:bg-[#171f33] h-screen w-72 flex-col shrink-0 font-['Inter'] leading-relaxed antialiased z-50">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center shrink-0">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="abstract geometric 3d art with soft neon blue and dark navy tones minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJoEOmAxiOkd2NRC0xB7tqJJA3nnOFiHYyi_Ke1atFH0O6GkpXnao2AKIhSYInp6BDNNE2hl9m7p-qBZOk1R6iUSWY-hops4YSw0uVFSGX77oQAvrPx5FtyxYDA3Ef0T-wf07Zd5ieI9gpccw9G_dvc7c4KOuDKiWLEaWlGp3xvvAHgP_4QxdbYE_hlD-4q6dYXtf3bzlJrujfJWezZZJCofsSWdNyEN8Lc-yn7zL2V0LWG7GgsIFP60kiHP3FmD4eE4mi4lus" />
      </div>
      <div>
      <h1 className="text-lg font-black tracking-tighter text-[#b4c5ff]">Mini Üretkenlik</h1>
      <p className="text-xs text-on-surface-variant">Luminous Void</p>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex flex-col gap-2 flex-grow">
      {/* Tab 1: Sayaç (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="timer">timer</span>
      <span className="font-medium">Sayaç</span>
      </a>
      {/* Tab 2: Notlar (Active) */}
      <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98] transition-transform duration-200" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="description" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
      <span className="font-bold">Notlar</span>
      </a>
      {/* Tab 3: Geçmiş (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group" href="#">
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="history">history</span>
      <span className="font-medium">Geçmiş</span>
      </a>
      {/* Tab 4: Ayarlar (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group mt-auto" href="#">
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="settings">settings</span>
      <span className="font-medium">Ayarlar</span>
      </a>
      </div>
      {/* CTA */}
      <button className="w-full mt-4 py-3 px-4 bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-medium rounded-lg flex justify-center items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                  Yeni Not
              </button>
      </nav>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl font-['Inter'] text-sm font-medium">
      {/* Search Bar (on_left) */}
      <div className="flex items-center flex-1">
      <div className="relative w-64 group">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[18px]">search</span>
      <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-slate-400 rounded-full pl-10 pr-4 py-2 border border-outline-variant/20 focus:border-primary focus:outline-none focus:ring-0 transition-colors" placeholder="Ara..." type="text" />
      </div>
      </div>
      <div className="hidden text-lg font-black tracking-tighter text-[#b4c5ff]">Panel</div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-2">
      <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 ml-[288px] pt-24 px-12 pb-16 relative z-10">
      {/* Page Header */}
      <div className="mb-12">
      <h2 className="text-[3.5rem] font-display font-black leading-tight text-on-surface tracking-tight">Düşüncelerini<br /><span className="text-primary opacity-80">Yakala.</span></h2>
      </div>
      {/* Note Input Area */}
      <div className="mb-16">
      <div className="bg-surface-container-low rounded-[16px] p-2 relative group focus-within:bg-surface-container transition-colors duration-300">
      <textarea className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/60 text-[1rem] leading-[1.5] border-none focus:ring-0 resize-none p-4 font-body outline-none" placeholder="Notunuzu yazın..." rows={3}></textarea>
      <div className="flex justify-end p-2 mt-2">
      <button className="bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-lg px-6 py-2.5 font-medium flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)]">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                              Ekle
                          </button>
      </div>
      </div>
      </div>
      {/* Notes Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-min">
      {/* Note Card 1 (Large) */}
      <div className="bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 xl:col-span-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary/50 blur-[2px]"></div>
      <div>
      <p className="text-on-surface text-[1.125rem] leading-[1.6] font-body line-clamp-4 mb-8">
                              Yeni projenin tasarım sistemi üzerine düşünceler. Karanlık mod için kontrast oranlarını kontrol etmeyi unutma. Özellikle "Luminous Void" konseptinde derinlik hissini vermek için gölgeler yerine yüzey parlaklıklarına odaklanmalıyız.
                          </p>
      </div>
      <div className="flex justify-between items-end">
      <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">27 Nisan 2026, 14:35</span>
      <button className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </div>
      {/* Note Card 2 */}
      <div className="bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
      <div>
      <p className="text-on-surface text-[1rem] leading-[1.5] font-body line-clamp-4 mb-8 text-on-surface-variant">
                              Alışveriş listesi:<br />- Süt<br />- Yumurta<br />- Tam buğday ekmeği<br />- Filtre kahve çekirdeği (Ethiopia)
                          </p>
      </div>
      <div className="flex justify-between items-end">
      <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">26 Nisan 2026, 09:12</span>
      <button className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </div>
      {/* Note Card 3 */}
      <div className="bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
      <div>
      <p className="text-on-surface text-[1rem] leading-[1.5] font-body line-clamp-4 mb-8">
                              Müşteri toplantısı notları. Haftaya Salı günü saat 14:00'te tekrar görüşülecek. Gündem maddeleri hazırlanacak ve arayüz prototipleri üzerinden geçilecek.
                          </p>
      </div>
      <div className="flex justify-between items-end">
      <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">25 Nisan 2026, 16:40</span>
      <button className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </div>
      {/* Note Card 4 */}
      <div className="bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 xl:col-span-2">
      <div>
      <p className="text-on-surface text-[1rem] leading-[1.5] font-body line-clamp-4 mb-8">
                              React performans optimizasyon teknikleri. useMemo ve useCallback kullanım alanlarını tekrar incele. Gereksiz render'ları önlemek için React.memo ile sarmalanmış bileşenlerin proplarını dikkatli yönetmek gerekiyor.
                          </p>
      </div>
      <div className="flex justify-between items-end">
      <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">24 Nisan 2026, 11:05</span>
      <button className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
