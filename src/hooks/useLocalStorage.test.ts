import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';
import type { Settings, Note, AppState } from '../types/index';
import { STORAGE_KEYS } from '../types/index';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('localStorage degeri varsa onu kullanir', () => {
    localStorage.setItem('test-key', JSON.stringify(42));
    const { result } = renderHook(() => useLocalStorage<number>('test-key', 0));
    expect(result.current[0]).toBe(42);
  });

  it('localStorage degeri yoksa default degeri kullanir', () => {
    const { result } = renderHook(() => useLocalStorage<string>('new-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('state degistiginde localStoragea yazar', () => {
    const { result } = renderHook(() => useLocalStorage<number>('counter-key', 0));
    act(() => { result.current[1](10); });
    expect(result.current[0]).toBe(10);
    expect(JSON.parse(localStorage.getItem('counter-key')!)).toBe(10);
  });

  it('fonksiyonel updater ile calisir', () => {
    const { result } = renderHook(() => useLocalStorage<number>('updater-key', 5));
    act(() => { result.current[1]((prev) => prev + 3); });
    expect(result.current[0]).toBe(8);
    expect(JSON.parse(localStorage.getItem('updater-key')!)).toBe(8);
  });

  it('obje tipi ile calisir', () => {
    const defaultSettings: Settings = { theme: 'light' };
    const { result } = renderHook(() => useLocalStorage<Settings>('settings-key', defaultSettings));
    expect(result.current[0]).toEqual({ theme: 'light' });
    act(() => { result.current[1]({ theme: 'dark' }); });
    expect(result.current[0]).toEqual({ theme: 'dark' });
    expect(JSON.parse(localStorage.getItem('settings-key')!)).toEqual({ theme: 'dark' });
  });

  it('dizi tipi ile calisir', () => {
    const defaultNotes: Note[] = [];
    const { result } = renderHook(() => useLocalStorage<Note[]>('notes-key', defaultNotes));
    const newNote: Note = { id: '1', content: 'Test', createdAt: '2026-04-27T14:35:00.000Z' };
    act(() => { result.current[1]([newNote]); });
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].content).toBe('Test');
  });

  it('gecersiz localStorage JSON icin default degeri kullanir', () => {
    localStorage.setItem('bad-json-key', 'not-valid-json');
    const { result } = renderHook(() => useLocalStorage<number>('bad-json-key', 99));
    expect(result.current[0]).toBe(99);
  });

  it('storage event ile disaridan degisim senkronize olur', () => {
    const { result } = renderHook(() => useLocalStorage<number>('sync-key', 0));
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'sync-key', newValue: JSON.stringify(77) }));
    });
    expect(result.current[0]).toBe(77);
  });

  it('baska bir keyin storage eventi etkilemez', () => {
    const { result } = renderHook(() => useLocalStorage<number>('my-key', 0));
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'other-key', newValue: JSON.stringify(99) }));
    });
    expect(result.current[0]).toBe(0);
  });

  it('AppState ile calisir', () => {
    const defaultState: AppState = {
      counter: { value: 0 },
      notes: [],
      history: [],
      settings: { theme: 'system' },
    };
    const { result } = renderHook(() => useLocalStorage<AppState>(STORAGE_KEYS.APP_STATE, defaultState));
    expect(result.current[0].counter.value).toBe(0);
    expect(result.current[0].settings.theme).toBe('system');
    act(() => { result.current[1]((prev) => ({ ...prev, counter: { value: 42 } })); });
    expect(result.current[0].counter.value).toBe(42);
  });

  it('hook unmount edildiginde listener temizlenir', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useLocalStorage<number>('cleanup-key', 0));
    expect(addEventListenerSpy).toHaveBeenCalledWith('storage', expect.any(Function));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('storage', expect.any(Function));
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('storage event null newValue ile default degeri restore eder', () => {
    localStorage.setItem('null-key', JSON.stringify(50));
    const { result } = renderHook(() => useLocalStorage<number>('null-key', 10));
    expect(result.current[0]).toBe(50);
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { key: 'null-key', newValue: null }));
    });
    expect(result.current[0]).toBe(10);
  });
});
