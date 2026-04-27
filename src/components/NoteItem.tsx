import { Trash2 } from 'lucide-react';
import { formatTurkishDateTime } from '../utils/formatters';
import type { Note } from '../types';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  isLarge?: boolean;
}

export function NoteItem({ note, onDelete, isLarge = false }: NoteItemProps) {
  return (
    <div
      className={`bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 relative overflow-hidden ${
        isLarge ? 'xl:col-span-2' : ''
      }`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary/50 blur-[2px]"></div>
      <div>
        <p className="text-on-surface text-[1.125rem] leading-[1.6] font-body line-clamp-3 mb-8">
          {note.content}
        </p>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">
          {formatTurkishDateTime(note.createdAt)}
        </span>
        <button
          onClick={() => onDelete(note.id)}
          type="button"
          className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
          aria-label="Notu sil"
        >
          <Trash2 size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
