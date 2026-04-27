import { describe, it, expect } from 'vitest';
import type { CounterState, Note, HistoryEntry, Settings, AppState } from './index';
import { STORAGE_KEYS } from './index';

describe('STORAGE_KEYS', () => {
  it('sabitleri dogru degerler icerir', () => {
    expect(STORAGE_KEYS.APP_STATE).toBe('mini-uretkentlik-app-state');
    expect(STORAGE_KEYS.COUNTER).toBe('mini-uretkentlik-counter');
    expect(STORAGE_KEYS.NOTES).toBe('mini-uretkentlik-notes');
    expect(STORAGE_KEYS.HISTORY).toBe('mini-uretkentlik-history');
    expect(STORAGE_KEYS.SETTINGS).toBe('mini-uretkentlik-settings');
  });
});

describe('Types compile correctly', () => {
  it('AppState tipi derleme zamaninda dogru', () => {
    const state: AppState = {
      counter: { value: 42 },
      notes: [{ id: '1', content: 'Test', createdAt: '2026-04-27T14:35:00.000Z' }],
      history: [{ id: 'h1', type: 'increment', value: 5, description: 'A', timestamp: '2026-04-27T14:30:00.000Z' }],
      settings: { theme: 'dark' },
    };
    expect(state.settings.theme).toBe('dark');
  });

  it('CounterState tipi derleme zamaninda dogru', () => {
    const counter: CounterState = { value: 0 };
    expect(counter.value).toBe(0);
  });

  it('Note tipi derleme zamaninda dogru', () => {
    const note: Note = { id: 'n1', content: 'Test', createdAt: '2026-04-26T09:12:00.000Z' };
    expect(note.id).toBe('n1');
  });

  it('HistoryEntry tipi derleme zamaninda dogru', () => {
    const entry: HistoryEntry = { id: 'h1', type: 'reset', value: 0, description: 'A', timestamp: '2026-04-25T11:05:00.000Z' };
    expect(entry.type).toBe('reset');
  });

  it('Settings tipi derleme zamaninda dogru', () => {
    const settings: Settings = { theme: 'system' };
    expect(settings.theme).toBe('system');
  });

  it('tüm tema degerleri kabul edilir', () => {
    const themes: Array<Settings['theme']> = ['light', 'dark', 'system'];
    expect(themes).toContain('light');
    expect(themes).toContain('dark');
    expect(themes).toContain('system');
  });
});
