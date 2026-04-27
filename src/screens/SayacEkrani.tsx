import { useState, useEffect } from 'react';
import { CounterDisplay } from '../components/CounterDisplay';
import { formatTurkishDateTime } from '../utils/formatters';
import { STORAGE_KEYS } from '../types';
import type { HistoryEntry } from '../types';

interface SayacEkraniProps {
  onNavigate?: (screen: string) => void;
}

function getRecentHistory(): HistoryEntry[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!stored) return [];
    const entries: HistoryEntry[] = JSON.parse(stored);
    return entries.slice(0, 3);
  } catch {
    return [];
  }
}

function getHistoryIcon(type: HistoryEntry['type']) {
  switch (type) {
    case 'increment':
      return { icon: 'arrow_upward', color: 'text-secondary', label: 'Artırıldı' };
    case 'decrement':
      return { icon: 'arrow_downward', color: 'text-error', label: 'Azaltıldı' };
    case 'reset':
      return { icon: 'refresh', color: 'text-outline', label: 'Sıfırlandı' };
    default:
      return { icon: 'history', color: 'text-on-surface-variant', label: 'İşlem' };
  }
}

export function SayacEkrani({ onNavigate }: SayacEkraniProps) {
  const [history, setHistory] = useState<HistoryEntry[]>(getRecentHistory);

  const refreshHistory = () => {
    setHistory(getRecentHistory());
  };

  useEffect(() => {
    const handleHistoryUpdate = () => refreshHistory();
    window.addEventListener('history-update', handleHistoryUpdate);
    return () => window.removeEventListener('history-update', handleHistoryUpdate);
  }, []);

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
        <button
          type="button"
          onClick={() => onNavigate?.('notes')}
          className="w-full bg-primary-container text-on-primary-container rounded-lg py-3 px-4 font-bold flex justify-center items-center gap-2 hover:brightness-105 transition-all duration-200 Active: scale-[0.98] bg-gradient-to-br from-primary-container to-primary/80 cursor-pointer"
        >
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
          Yeni Not
        </button>
        {/* Tabs */}
        <div className="flex flex-col gap-2 flex-grow mt-4">
          {/* Active Tab: Sayaç */}
          <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105" href="#counter">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
            Sayaç
          </a>
          <button
            type="button"
            onClick={() => onNavigate?.('notes')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">description</span>
            Notlar
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('history')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">history</span>
            Geçmiş
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('settings')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors font-['Inter'] leading-relaxed antialiased hover:bg-[#222a3d]/50 hover:brightness-105 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined">settings</span>
            Ayarlar
          </button>
        </div>
        {/* User Avatar Placeholder (Bottom) */}
        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-outline-variant/20">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant">person</span>
            </div>
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
          <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-200 Soft fade on hover with 5% brightness increase flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-200 Soft fade on hover with 5% brightness increase flex items-center justify-center cursor-pointer">
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
          {/* Central Counter Display */}
          <CounterDisplay />
          {/* Recent Activity Widget (Bento Style) */}
          <div className="w-full mt-12">
            <h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">history</span>
              Son İşlemler
            </h3>
            {history.length === 0 ? (
              <div className="text-center py-8 text-on-surface-variant text-sm">
                Henüz işlem yapılmadı. Sayaç artırarak veya azaltarak başlayın.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {history.map((entry) => {
                  const { icon, color, label } = getHistoryIcon(entry.type);
                  return (
                    <div key={entry.id} className="bg-surface-container-low rounded-xl p-5 flex flex-col gap-3 relative overflow-hidden group border border-outline-variant/10">
                      <div className="absolute inset-0 bg-surface-bright/0 group-hover:bg-surface-bright/5 transition-colors"></div>
                      <div className="flex justify-between items-start relative z-10">
                        <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
                          {formatTurkishDateTime(entry.timestamp)}
                        </span>
                        <span className={`material-symbols-outlined ${color} text-[16px]`}>{icon}</span>
                      </div>
                      <div className="flex items-end gap-2 mt-2 relative z-10">
                        <span className="text-2xl font-bold text-on-surface leading-none">
                          {entry.type === 'increment' ? '+' : entry.type === 'decrement' ? '-' : ''}{entry.value}
                        </span>
                        <span className="text-xs text-on-surface-variant mb-1">{label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
