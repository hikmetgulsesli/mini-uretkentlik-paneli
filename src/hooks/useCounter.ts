import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../types';
import type { HistoryEntry } from '../types';

export interface UseCounterReturn {
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function createHistoryEntry(
  type: 'increment' | 'decrement' | 'reset',
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

function addHistoryEntry(entry: HistoryEntry): void {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const entries: HistoryEntry[] = stored ? JSON.parse(stored) : [];
    entries.unshift(entry);
    // Keep only last 100 entries to prevent storage bloat
    const trimmed = entries.slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmed));
  } catch {
    // Silently fail if storage is full or unavailable
  }
}

export function useCounter(): UseCounterReturn {
  const [value, setValue] = useLocalStorage<number>(STORAGE_KEYS.COUNTER, 0);

  const increment = useCallback(() => {
    setValue((prev) => {
      const next = prev + 1;
      addHistoryEntry(createHistoryEntry('increment', next, 'Sayaç artırıldı'));
      return next;
    });
  }, [setValue]);

  const decrement = useCallback(() => {
    setValue((prev) => {
      const next = prev - 1;
      addHistoryEntry(createHistoryEntry('decrement', next, 'Sayaç azaltıldı'));
      return next;
    });
  }, [setValue]);

  const reset = useCallback(() => {
    setValue(0);
    addHistoryEntry(createHistoryEntry('reset', 0, 'Sayaç sıfırlandı'));
  }, [setValue]);

  return {
    value,
    increment,
    decrement,
    reset,
  };
}
