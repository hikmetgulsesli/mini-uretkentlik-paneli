import { STORAGE_KEYS } from '../types';
import type { HistoryEntry } from '../types';

export function createHistoryEntry(
  type: HistoryEntry['type'],
  value: number,
  description: string,
): HistoryEntry {
  return {
    id: crypto.randomUUID(),
    type,
    value,
    description,
    timestamp: new Date().toISOString(),
  };
}

export function addHistoryEntry(entry: HistoryEntry): void {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const entries: HistoryEntry[] = stored ? JSON.parse(stored) : [];
    entries.unshift(entry);
    const trimmed = entries.slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmed));
  } catch {
    // Silently fail if storage is full or unavailable
  }
}

export function dispatchHistoryUpdate(): void {
  try {
    window.dispatchEvent(new Event('history-update'));
  } catch {
    // Ignore if window is not available (e.g. SSR)
  }
}
