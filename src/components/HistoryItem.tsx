import { formatTurkishDateTime } from '../utils/formatters';
import type { HistoryEntry } from '../types';

interface HistoryItemProps {
  entry: HistoryEntry;
}

const TYPE_CONFIG: Record<
  HistoryEntry['type'],
  { icon: string; color: string; label: string }
> = {
  increment: { icon: 'add', color: 'text-secondary', label: 'Sayaç artırıldı' },
  decrement: { icon: 'remove', color: 'text-error', label: 'Sayaç azaltıldı' },
  reset: { icon: 'refresh', color: 'text-primary', label: 'Sayaç sıfırlandı' },
  note_added: { icon: 'description', color: 'text-primary', label: 'Not eklendi' },
  note_deleted: { icon: 'delete', color: 'text-error', label: 'Not silindi' },
  history_cleared: { icon: 'delete_sweep', color: 'text-error', label: 'Geçmiş temizlendi' },
  data_cleared: { icon: 'delete_forever', color: 'text-error', label: 'Tüm veriler silindi' },
};

function getTimeLabel(isoString: string): string {
  try {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return '';
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  } catch {
    return '';
  }
}

export function HistoryItem({ entry }: HistoryItemProps) {
  const config = TYPE_CONFIG[entry.type];
  const timeLabel = getTimeLabel(entry.timestamp);
  const fullDate = formatTurkishDateTime(entry.timestamp);

  return (
    <div className="bg-surface-container-low rounded-xl p-6 relative group border border-outline-variant/0 hover:border-outline-variant/20 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-surface-bright opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="flex items-start justify-between mb-10">
        <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(6,14,32,0.4)] relative">
          {entry.type === 'increment' && (
            <div className="absolute inset-0 bg-secondary blur-md opacity-20 rounded-full" />
          )}
          <span
            className={`material-symbols-outlined ${config.color} relative z-10`}
            aria-hidden="true"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {config.icon}
          </span>
        </div>
        <span
          className="font-label text-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full"
          title={fullDate}
        >
          {timeLabel}
        </span>
      </div>
      <div>
        <h4 className="font-headline text-lg font-bold text-on-surface mb-2">
          {entry.description || config.label}
        </h4>
        <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
          {entry.value !== 0 && entry.type !== 'history_cleared' && entry.type !== 'data_cleared' && entry.type !== 'note_added' && entry.type !== 'note_deleted'
            ? `İşlem sonucu: ${entry.value}`
            : config.label}
        </p>
      </div>
    </div>
  );
}
