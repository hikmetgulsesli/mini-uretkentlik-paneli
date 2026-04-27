import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getStorageItem, setStorageItem, removeStorageItem } from './storage';
import type { AppState } from '../types/index';
import { STORAGE_KEYS } from '../types/index';

describe('Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('getStorageItem - mevcut olmayan key icin null doner', () => {
    expect(getStorageItem('non-existent-key')).toBeNull();
  });

  it('getStorageItem - JSON veriyi parse eder', () => {
    const data = { value: 42 };
    localStorage.setItem('test-key', JSON.stringify(data));
    expect(getStorageItem('test-key')).toEqual(data);
  });

  it('getStorageItem - bos string icin null doner', () => {
    localStorage.setItem('empty-key', '');
    expect(getStorageItem('empty-key')).toBeNull();
  });

  it('getStorageItem - gecersiz JSON icin null doner', () => {
    localStorage.setItem('bad-json', '{invalid');
    expect(getStorageItem('bad-json')).toBeNull();
  });

  it('setStorageItem - veriyi JSON olarak kaydeder', () => {
    const data = { notes: ['not 1', 'not 2'] };
    setStorageItem('notes-key', data);
    expect(localStorage.getItem('notes-key')).toBe(JSON.stringify(data));
  });

  it('setStorageItem - null deger kaydetmez ve siler', () => {
    localStorage.setItem('null-test', 'some-value');
    setStorageItem('null-test', null);
    expect(localStorage.getItem('null-test')).toBeNull();
  });

  it('removeStorageItem - keyi siler', () => {
    localStorage.setItem('remove-test', 'value');
    removeStorageItem('remove-test');
    expect(localStorage.getItem('remove-test')).toBeNull();
  });

  it('STORAGE_KEYS ile depolama dongusu calisir', () => {
    const state: AppState = {
      counter: { value: 15 },
      notes: [],
      history: [],
      settings: { theme: 'light' },
    };
    setStorageItem(STORAGE_KEYS.APP_STATE, state);
    const retrieved = getStorageItem<AppState>(STORAGE_KEYS.APP_STATE);
    expect(retrieved).toEqual(state);
  });

  it('buyuk veri seti kaydedilebilir', () => {
    const notes = Array.from({ length: 100 }, (_, i) => ({
      id: `note-${i}`,
      content: `Not icerigi ${i}`,
      createdAt: new Date().toISOString(),
    }));
    setStorageItem('big-notes', notes);
    const retrieved = getStorageItem<typeof notes>('big-notes');
    expect(retrieved).toHaveLength(100);
    expect(retrieved?.[0].content).toBe('Not icerigi 0');
  });
});
