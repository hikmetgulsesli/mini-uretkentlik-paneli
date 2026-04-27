import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../types';
import {
  createHistoryEntry,
  addHistoryEntry,
  dispatchHistoryUpdate,
} from '../utils/history';
import type { Note } from '../types';

export interface UseNotesReturn {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: string) => void;
  getFilteredNotes: (searchTerm: string) => Note[];
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
    const term = searchTerm.toLocaleLowerCase('tr-TR');
    return notes.filter((note) =>
      note.content.toLocaleLowerCase('tr-TR').includes(term),
    );
  }, [notes]);

  return {
    notes,
    addNote,
    deleteNote,
    getFilteredNotes,
  };
}
