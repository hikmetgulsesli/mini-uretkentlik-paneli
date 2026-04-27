import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../types';
import {
  createHistoryEntry,
  addHistoryEntry,
  dispatchHistoryUpdate,
} from '../utils/history';

export interface UseCounterReturn {
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export function useCounter(): UseCounterReturn {
  const [value, setValue] = useLocalStorage<number>(STORAGE_KEYS.COUNTER, 0);

  const increment = useCallback(() => {
    const next = value + 1;
    setValue(next);
    addHistoryEntry(createHistoryEntry('increment', next, 'Sayaç artırıldı'));
    dispatchHistoryUpdate();
  }, [setValue, value]);

  const decrement = useCallback(() => {
    const next = value - 1;
    setValue(next);
    addHistoryEntry(createHistoryEntry('decrement', next, 'Sayaç azaltıldı'));
    dispatchHistoryUpdate();
  }, [setValue, value]);

  const reset = useCallback(() => {
    setValue(0);
    addHistoryEntry(createHistoryEntry('reset', 0, 'Sayaç sıfırlandı'));
    dispatchHistoryUpdate();
  }, [setValue]);

  return {
    value,
    increment,
    decrement,
    reset,
  };
}
