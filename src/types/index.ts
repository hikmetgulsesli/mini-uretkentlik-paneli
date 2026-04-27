export interface CounterState {
  value: number;
}

export interface Note {
  id: string;
  content: string;
  createdAt: string;
}

export interface HistoryEntry {
  id: string;
  type: 'increment' | 'decrement' | 'reset' | 'note_added' | 'note_deleted' | 'history_cleared' | 'data_cleared';
  value: number;
  description: string;
  timestamp: string;
}

export interface Settings {
  theme: 'light' | 'dark' | 'system';
}

export interface AppState {
  counter: CounterState;
  notes: Note[];
  history: HistoryEntry[];
  settings: Settings;
}

export const STORAGE_KEYS = {
  APP_STATE: 'mini-uretkentlik-app-state',
  COUNTER: 'mini-uretkentlik-counter',
  NOTES: 'mini-uretkentlik-notes',
  HISTORY: 'mini-uretkentlik-history',
  SETTINGS: 'mini-uretkentlik-settings',
} as const;
