import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../types';
import type { HistoryEntry } from '../types';

export interface UseHistoryReturn {
  history: HistoryEntry[];
  clearHistory: () => void;
}

export function useHistory(): UseHistoryReturn {
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return stored ? (JSON.parse(stored) as HistoryEntry[]) : [];
    } catch {
      return [];
    }
  });

  const refresh = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
      setHistory(stored ? (JSON.parse(stored) as HistoryEntry[]) : []);
    } catch {
      setHistory([]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('history-update', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('history-update', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [refresh]);

  const clearHistory = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
      window.dispatchEvent(new Event('history-update'));
    } catch {
      // Silently fail if storage is unavailable
    }
  }, []);

  return {
    history,
    clearHistory,
  };
}
