import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNotes } from './useNotes';
import { STORAGE_KEYS } from '../types';

describe('useNotes Hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    localStorage.clear();
    vi.useRealTimers();
  });

  it('varsayılan olarak boş dizi döner', () => {
    const { result } = renderHook(() => useNotes());
    expect(result.current.notes).toEqual([]);
  });

  it('addNote not ekler', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('Test notu');
    });
    expect(result.current.notes).toHaveLength(1);
    expect(result.current.notes[0].content).toBe('Test notu');
  });

  it('addNote boş string eklemez', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('   ');
    });
    expect(result.current.notes).toHaveLength(0);
  });

  it('addNote history entry üretir', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('Yeni not');
    });
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(1);
    expect(history[0].type).toBe('note_added');
    expect(history[0].description).toBe('Not eklendi');
  });

  it('deleteNote not siler', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('Silinecek not');
    });
    const noteId = result.current.notes[0].id;
    expect(result.current.notes).toHaveLength(1);

    act(() => {
      result.current.deleteNote(noteId);
    });
    expect(result.current.notes).toHaveLength(0);
  });

  it('deleteNote history entry üretir', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('Silinecek not');
    });
    const noteId = result.current.notes[0].id;

    act(() => {
      result.current.deleteNote(noteId);
    });
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(2);
    expect(history[0].type).toBe('note_deleted');
    expect(history[0].description).toBe('Not silindi');
  });

  it('getFilteredNotes arama terimi ile filtreleme yapar', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('React dersi');
      result.current.addNote('Vue dersi');
      result.current.addNote('Angular dersi');
    });

    const filtered = result.current.getFilteredNotes('React');
    expect(filtered).toHaveLength(1);
    expect(filtered[0].content).toBe('React dersi');
  });

  it('getFilteredNotes boş terim ile tüm notları döner', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('Not 1');
      result.current.addNote('Not 2');
    });

    const filtered = result.current.getFilteredNotes('');
    expect(filtered).toHaveLength(2);
  });

  it('getFilteredNotes büyük-küçük harf duyarsız çalışır', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('React Dersi');
    });

    const filtered = result.current.getFilteredNotes('REACT');
    expect(filtered).toHaveLength(1);
  });

  it('notlar tarihe göre sıralı (en yeni önce)', () => {
    const { result } = renderHook(() => useNotes());
    act(() => {
      result.current.addNote('İlk not');
    });
    act(() => {
      result.current.addNote('İkinci not');
    });

    expect(result.current.notes[0].content).toBe('İkinci not');
    expect(result.current.notes[1].content).toBe('İlk not');
  });

  it('localStorage\'dan notları yükler', () => {
    const storedNote = {
      id: 'test-id',
      content: 'Kayıtlı not',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify([storedNote]));

    const { result } = renderHook(() => useNotes());
    expect(result.current.notes).toHaveLength(1);
    expect(result.current.notes[0].content).toBe('Kayıtlı not');
  });
});
