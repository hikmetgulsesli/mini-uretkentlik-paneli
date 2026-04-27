import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../types';
import type { HistoryEntry, Note } from '../types';

export interface UseNotesReturn {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: string) => void;
  getFilteredNotes: (searchTerm: string) => Note[];
}

function createHistoryEntry(
  type: 'note_added' | 'note_deleted',
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
    const trimmed = entries.slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmed));
  } catch {
    // Silently fail if storage is full or unavailable
  }
}

function dispatchHistoryUpdate(): void {
  try {
    window.dispatchEvent(new Event('history-update'));
  } catch {
    // Ignore if window is not available (e.g. SSR)
  }
}

export function useNotes(): UseNotesReturn {
  const [notes, setNotes] = useLocalStorage<Note[]>(STORAGE_KEYS.NOTES, []);

  const addNote = useCallback((content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    const newNote: Note = {
      id: crypto.randomUUID(),
      content: trimmed,
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [newNote, ...prev]);
    addHistoryEntry(createHistoryEntry('note_added', 1, 'Not eklendi'));
    dispatchHistoryUpdate();
  }, [setNotes]);

  const deleteNote = useCallback((id: string) => {
    // Find note outside state updater to avoid side effects inside React state updates
    const noteToDelete = notes.find((n) => n.id === id);
    if (!noteToDelete) return;

    setNotes((prev) => prev.filter((n) => n.id !== id));
    addHistoryEntry(createHistoryEntry('note_deleted', 0, 'Not silindi'));
    dispatchHistoryUpdate();
  }, [setNotes, notes]);

  const getFilteredNotes = useCallback((searchTerm: string): Note[] => {
    if (!searchTerm.trim()) return notes;
    const term = searchTerm.toLowerCase();
    return notes.filter((note) =>
      note.content.toLowerCase().includes(term),
    );
  }, [notes]);

  return {
    notes,
    addNote,
    deleteNote,
    getFilteredNotes,
  };
}
