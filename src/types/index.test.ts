import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import { getStorageItem, setStorageItem, removeStorageItem } from '../src/utils/storage';
import { formatTurkishDateTime } from '../src/utils/formatters';
import type { CounterState, Note, HistoryEntry, Settings, AppState } from '../src/types';
import { STORAGE_KEYS } from '../src/types';

describe('Tipler (Types)', () => {
  it('STORAGE_KEYS sabitleri doğru değerler içerir', () => {
    expect(STORAGE_KEYS.APP_STATE).toBe('mini-uretkentlik-app-state');
    expect(STORAGE_KEYS.COUNTER).toBe('mini-uretkentlik-counter');
    expect(STORAGE_KEYS.NOTES).toBe('mini-uretkentlik-notes');
    expect(STORAGE_KEYS.HISTORY).toBe('mini-uretkentlik-history');
    expect(STORAGE_KEYS.SETTINGS).toBe('mini-uretkentlik-settings');
  });

  it('AppState tipi doğru yapıya sahiptir', () => {
    const state: AppState = {
      counter: { value: 42 },
      notes: [
        { id: '1', content: 'Test notu', createdAt: '2026-04-27T14:35:00.000Z' },
      ],
      history: [
        { id: 'h1', type: 'increment', value: 5, description: 'Sayaç artırıldı', timestamp: '2026-04-27T14:30:00.000Z' },
      ],
      settings: { theme: 'dark' },
    };
    expect(state.counter.value).toBe(42);
    expect(state.notes[0].content).toBe('Test notu');
    expect(state.history[0].type).toBe('increment');
    expect(state.settings.theme).toBe('dark');
  });

  it('CounterState tipi doğru yapıya sahiptir', () => {
    const counter: CounterState = { value: 0 };
    expect(counter.value).toBe(0);
  });

  it('Note tipi doğru yapıya sahiptir', () => {
    const note: Note = {
      id: 'n1',
      content: 'Proje X Tasarım Revizyonları',
      createdAt: '2026-04-26T09:12:00.000Z',
    };
    expect(note.id).toBe('n1');
    expect(note.content).toBe('Proje X Tasarım Revizyonları');
  });

  it('HistoryEntry tipi doğru yapıya sahiptir', () => {
    const entry: HistoryEntry = {
      id: 'h1',
      type: 'reset',
      value: 0,
      description: 'Sayaç sıfırlandı',
      timestamp: '2026-04-25T11:05:00.000Z',
    };
    expect(entry.type).toBe('reset');
    expect(entry.value).toBe(0);
  });

  it('Settings tipi doğru yapıya sahiptir', () => {
    const settings: Settings = { theme: 'system' };
    expect(settings.theme).toBe('system');
  });

  it('tüm tema değerleri kabul edilir', () => {
    const themes: Array<Settings['theme']> = ['light', 'dark', 'system'];
    expect(themes).toContain('light');
    expect(themes).toContain('dark');
    expect(themes).toContain('system');
  });
});

describe('Depolama (Storage)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('getStorageItem - mevcut olmayan key için null döner', () => {
    expect(getStorageItem('non-existent-key')).toBeNull();
  });

  it('getStorageItem - JSON veriyi parse eder', () => {
    const data = { value: 42 };
    localStorage.setItem('test-key', JSON.stringify(data));
    expect(getStorageItem('test-key')).toEqual(data);
  });

  it('getStorageItem - boş string için null döner', () => {
    localStorage.setItem('empty-key', '');
    expect(getStorageItem('empty-key')).toBeNull();
  });

  it('getStorageItem - geçersiz JSON için null döner ve hata yakalar', () => {
    localStorage.setItem('bad-json', '{invalid');
    expect(getStorageItem('bad-json')).toBeNull();
  });

  it('setStorageItem - veriyi JSON olarak kaydeder', () => {
    const data = { notes: ['not 1', 'not 2'] };
    setStorageItem('notes-key', data);
    const stored = localStorage.getItem('notes-key');
    expect(stored).toBe(JSON.stringify(data));
  });

  it('setStorageItem - null değer kaydetmez ve siler', () => {
    localStorage.setItem('null-test', 'some-value');
    setStorageItem('null-test', null);
    expect(localStorage.getItem('null-test')).toBeNull();
  });

  it('removeStorageItem - keyi siler', () => {
    localStorage.setItem('remove-test', 'value');
    removeStorageItem('remove-test');
    expect(localStorage.getItem('remove-test')).toBeNull();
  });

  it('STORAGE_KEYS ile depolama döngüsü çalışır', () => {
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

  it('büyük veri seti kaydedilebilir', () => {
    const notes: Note[] = Array.from({ length: 100 }, (_, i) => ({
      id: `note-${i}`,
      content: `Not içeriği ${i}`,
      createdAt: new Date().toISOString(),
    }));
    setStorageItem('big-notes', notes);
    const retrieved = getStorageItem<Note[]>('big-notes');
    expect(retrieved).toHaveLength(100);
    expect(retrieved?.[0].content).toBe('Not içeriği 0');
  });
});

describe('Formatlayıcılar (Formatters)', () => {
  it('formatTurkishDateTime - ISO tarihi Türkçe formatlar', () => {
    const iso = '2026-04-27T14:35:00.000Z';
    const formatted = formatTurkishDateTime(iso);
    expect(formatted).toBe('27 Nisan 2026, 14:35');
  });

  it('formatTurkishDateTime - başka bir tarih doğru formatlar', () => {
    const iso = '2026-01-05T09:12:00.000Z';
    const formatted = formatTurkishDateTime(iso);
    expect(formatted).toBe('5 Ocak 2026, 09:12');
  });

  it('formatTurkishDateTime - tek haneli gün/ay doğru formatlar', () => {
    const iso = '2026-03-08T03:07:00.000Z';
    const formatted = formatTurkishDateTime(iso);
    expect(formatted).toBe('8 Mart 2026, 03:07');
  });

  it('formatTurkishDateTime - tüm aylar doğru çevrilir', () => {
    const months = [
      ['2026-01-15T10:00:00.000Z', '15 Ocak 2026, 10:00'],
      ['2026-02-15T10:00:00.000Z', '15 Şubat 2026, 10:00'],
      ['2026-03-15T10:00:00.000Z', '15 Mart 2026, 10:00'],
      ['2026-04-15T10:00:00.000Z', '15 Nisan 2026, 10:00'],
      ['2026-05-15T10:00:00.000Z', '15 Mayıs 2026, 10:00'],
      ['2026-06-15T10:00:00.000Z', '15 Haziran 2026, 10:00'],
      ['2026-07-15T10:00:00.000Z', '15 Temmuz 2026, 10:00'],
      ['2026-08-15T10:00:00.000Z', '15 Ağustos 2026, 10:00'],
      ['2026-09-15T10:00:00.000Z', '15 Eylül 2026, 10:00'],
      ['2026-10-15T10:00:00.000Z', '15 Ekim 2026, 10:00'],
      ['2026-11-15T10:00:00.000Z', '15 Kasım 2026, 10:00'],
      ['2026-12-15T10:00:00.000Z', '15 Aralık 2026, 10:00'],
    ];
    months.forEach(([iso, expected]) => {
      expect(formatTurkishDateTime(iso)).toBe(expected);
    });
  });

  it('formatTurkishDateTime - geçersiz tarih için boş string döner', () => {
    expect(formatTurkishDateTime('invalid-date')).toBe('');
  });

  it('formatTurkishDateTime - boş string için boş string döner', () => {
    expect(formatTurkishDateTime('')).toBe('');
  });
});

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('localStorage değeri varsa onu kullanır', () => {
    localStorage.setItem('test-key', JSON.stringify(42));
    const { result } = renderHook(() => useLocalStorage<number>('test-key', 0));
    expect(result.current[0]).toBe(42);
  });

  it('localStorage değeri yoksa default değeri kullanır', () => {
    const { result } = renderHook(() => useLocalStorage<string>('new-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('state değiştiğinde localStoragea yazar', () => {
    const { result } = renderHook(() => useLocalStorage<number>('counter-key', 0));
    act(() => {
      result.current[1](10);
    });
    expect(result.current[0]).toBe(10);
    const stored = JSON.parse(localStorage.getItem('counter-key')!);
    expect(stored).toBe(10);
  });

  it('fonksiyonel updater ile çalışır', () => {
    const { result } = renderHook(() => useLocalStorage<number>('updater-key', 5));
    act(() => {
      result.current[1]((prev) => prev + 3);
    });
    expect(result.current[0]).toBe(8);
    expect(JSON.parse(localStorage.getItem('updater-key')!)).toBe(8);
  });

  it('obje tipi ile çalışır', () => {
    const defaultSettings: Settings = { theme: 'light' };
    const { result } = renderHook(() => useLocalStorage<Settings>('settings-key', defaultSettings));
    expect(result.current[0]).toEqual({ theme: 'light' });

    act(() => {
      result.current[1]({ theme: 'dark' });
    });
    expect(result.current[0]).toEqual({ theme: 'dark' });
    expect(JSON.parse(localStorage.getItem('settings-key')!)).toEqual({ theme: 'dark' });
  });

  it('dizi tipi ile çalışır', () => {
    const defaultNotes: Note[] = [];
    const { result } = renderHook(() => useLocalStorage<Note[]>('notes-key', defaultNotes));
    const newNote: Note = { id: '1', content: 'Test', createdAt: '2026-04-27T14:35:00.000Z' };
    act(() => {
      result.current[1]([newNote]);
    });
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].content).toBe('Test');
  });

  it('geçersiz localStorage JSON için default değeri kullanır', () => {
    localStorage.setItem('bad-json-key', 'not-valid-json');
    const { result } = renderHook(() => useLocalStorage<number>('bad-json-key', 99));
    expect(result.current[0]).toBe(99);
  });

  it('storage event ile dışarıdan değişim senkronize olur', () => {
    const { result } = renderHook(() => useLocalStorage<number>('sync-key', 0));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'sync-key',
          newValue: JSON.stringify(77),
        })
      );
    });
    expect(result.current[0]).toBe(77);
  });

  it('başka bir keyin storage eventi etkilemez', () => {
    const { result } = renderHook(() => useLocalStorage<number>('my-key', 0));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'other-key',
          newValue: JSON.stringify(99),
        })
      );
    });
    expect(result.current[0]).toBe(0);
  });

  it('AppState ile çalışır', () => {
    const defaultState: AppState = {
      counter: { value: 0 },
      notes: [],
      history: [],
      settings: { theme: 'system' },
    };
    const { result } = renderHook(() => useLocalStorage<AppState>(STORAGE_KEYS.APP_STATE, defaultState));
    expect(result.current[0].counter.value).toBe(0);
    expect(result.current[0].settings.theme).toBe('system');

    act(() => {
      result.current[1]((prev) => ({
        ...prev,
        counter: { value: 42 },
      }));
    });
    expect(result.current[0].counter.value).toBe(42);
  });

  it('hook unmount edildiğinde listener temizlenir', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useLocalStorage<number>('cleanup-key', 0));
    expect(addEventListenerSpy).toHaveBeenCalledWith('storage', expect.any(Function));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('storage', expect.any(Function));
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
