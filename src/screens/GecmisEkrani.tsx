import { useState } from "react";
import { HistoryItem } from "../components/HistoryItem";
import { ConfirmModal } from "../components/ConfirmModal";
import { EmptyState } from "../components/EmptyState";
import { useHistory } from "../hooks/useHistory";

interface GecmisEkraniProps {
  onNavigate?: (screen: string) => void;
}

const MONTH_NAMES = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

function getGroupLabel(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const yesterday = today - 24 * 60 * 60 * 1000;
  const entryDay = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  if (entryDay === today) return 'Bugün';
  if (entryDay === yesterday) return 'Dün';

  return `${date.getUTCDate()} ${MONTH_NAMES[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function groupByDate<T extends { timestamp: string; id: string }>(entries: T[]): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const entry of entries) {
    const label = getGroupLabel(entry.timestamp);
    const list = groups.get(label) ?? [];
    list.push(entry);
    groups.set(label, list);
  }
  return groups;
}

export function GecmisEkrani(props: GecmisEkraniProps) {
  const { onNavigate } = props;
  const { history, clearHistory } = useHistory();

  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleClearHistory = () => {
    setShowClearConfirm(true);
  };

  const confirmClearHistory = () => {
    clearHistory();
    setShowClearConfirm(false);
  };

  const cancelClearHistory = () => {
    setShowClearConfirm(false);
  };

  const grouped = groupByDate(history);
  const groupLabels = Array.from(grouped.keys());

  const groupOpacity = (label: string): string => {
    if (label === 'Bugün') return '';
    if (label === 'Dün') return 'opacity-60';
    return 'opacity-60';
  };

  const cardOpacity = (label: string): string => {
    if (label === 'Bugün') return '';
    if (label === 'Dün') return 'opacity-80 hover:opacity-100';
    return 'opacity-80 hover:opacity-100';
  };

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
          <button
            type="button"
            onClick={() => onNavigate?.('counter')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined" data-icon="timer">timer</span>
            <span className="font-medium">Sayaç</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate?.('notes')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined" data-icon="description">description</span>
            <span className="font-medium">Notlar</span>
          </button>
          {/* Geçmiş (Active) */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98]">
            <span className="material-symbols-outlined" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
            <span className="font-bold">Geçmiş</span>
          </div>
          <button
            type="button"
            onClick={() => onNavigate?.('settings')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors hover:bg-[#222a3d]/50 hover:brightness-105 rounded-lg text-left cursor-pointer"
          >
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-medium">Ayarlar</span>
          </button>
        </nav>
        <div className="mt-auto px-2">
          <button
            type="button"
            onClick={() => onNavigate?.('notes')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-lg font-bold hover:brightness-105 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
            Yeni Not
          </button>
        </div>
      </aside>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl border-none">
        <div className="flex-1 flex items-center">
          <button
            type="button"
            className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300 cursor-pointer"
            aria-label="Ara"
          >
            <span className="material-symbols-outlined" data-icon="search">search</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300 cursor-pointer"
            aria-label="Bildirimler"
          >
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button
            type="button"
            className="hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 text-slate-400 transition-all duration-300 cursor-pointer"
            aria-label="Hesap"
          >
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
          {history.length > 0 && (
            <button
              type="button"
              onClick={handleClearHistory}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-outline-variant/20 hover:border-error/50 text-on-surface-variant hover:text-error hover:bg-error/5 transition-all duration-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
              <span className="font-medium text-sm">Geçmişi Temizle</span>
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <EmptyState
            icon="history"
            message="Henüz geçmiş yok"
            subMessage="Sayaç ve not işlemleriniz burada görünecek. İlk işleminizi yaparak başlayın."
            actionLabel="Sayaç Ekranına Git"
            actionIcon="timer"
            onAction={() => onNavigate?.('counter')}
          />
        ) : (
          /* History Content Grid */
          <div className="space-y-16">
            {groupLabels.map((label) => (
              <section key={label}>
                <h3 className={`font-headline text-headline-sm font-bold text-on-surface mb-6 flex items-center gap-6 ${groupOpacity(label)}`}>
                  {label}
                  <span className="h-px flex-1 bg-gradient-to-r from-outline-variant/20 to-transparent"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grouped.get(label)?.map((entry) => (
                    <div key={entry.id} className={cardOpacity(label)}>
                      <HistoryItem entry={entry} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      <ConfirmModal
        isOpen={showClearConfirm}
        title="Geçmişi Temizle"
        description="Tüm geçmiş kayıtları silinecek. Bu işlem geri alınamaz."
        confirmLabel="Temizle"
        cancelLabel="İptal"
        iconName="delete_sweep"
        confirmIconName="delete"
        onConfirm={confirmClearHistory}
        onCancel={cancelClearHistory}
      />
    </>
  );
}
