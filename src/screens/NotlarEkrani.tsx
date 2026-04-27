// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Notlar Ekranı
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useRef } from "react";
import { NoteItem } from "../components/NoteItem";
import { EmptyState } from "../components/EmptyState";
import { useNotes } from "../hooks/useNotes";

interface NotlarEkraniProps {
  onNavigate?: (screen: string) => void;
}

export function NotlarEkrani(props: NotlarEkraniProps) {
  const { onNavigate } = props;
  const { notes, addNote, deleteNote } = useNotes();

  const [noteInput, setNoteInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAddNote = () => {
    if (noteInput.trim()) {
      addNote(noteInput);
      setNoteInput("");
    }
  };

  const handleDeleteNote = (id: string) => {
    deleteNote(id);
  };

  const handleCreateNote = () => {
    // Focus the textarea
    const textarea = textareaRef.current;
    textarea?.focus();
  };

  // Determine which notes are "large" (xl:col-span-2) - first and fourth notes
  const getIsLarge = (index: number): boolean => {
    return index === 0 || index === 3;
  };

  return (
    <>
      {/* Ambient Gradient Background (The Luminous Void) */}
      <div className="fixed top-0 left-[300px] w-full h-[512px] bg-gradient-to-br from-primary-container/10 via-transparent to-transparent opacity-50 pointer-events-none z-0"></div>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full flex flex-col p-6 gap-8 bg-[#171f33] dark:bg-[#171f33] h-screen w-72 flex-col shrink-0 font-['Inter'] leading-relaxed antialiased z-50">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center shrink-0">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="abstract geometric 3d art with soft neon blue and dark navy tones minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJoEOmAxiOkd2NRC0xB7tqJJA3nnOFiHYyi_Ke1atFH0O6GkpXnao2AKIhSYInp6BDNNE2hl9m7p-qBZOk1R6iUSWY-hops4YSw0uVFSGX77oQAvrPx5FtyxYDA3Ef0T-wf07Zd5ieI9gpccw9G_dvc7c4KOuDKiWLEaWlGp3xvvAHgP_4QxdbYE_hlD-4q6dYXtf3bzlJrujfJWezZZJCofsSWdNyEN8Lc-yn7zL2V0LWG7GgsIFP60kiHP3FmD4eE4mi4lus" />
      </div>
      <div>
      <h1 className="text-lg font-black tracking-tighter text-[#b4c5ff]">Mini Üretkenlik</h1>
      <p className="text-xs text-on-surface-variant">Luminous Void</p>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex flex-col gap-2 flex-grow">
      {/* Tab 1: Sayaç (Inactive) */}
      <button
        onClick={() => onNavigate?.('counter')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer bg-transparent border-none text-left w-full"
      >
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="timer">timer</span>
      <span className="font-medium">Sayaç</span>
      </button>
      {/* Tab 2: Notlar (Active) */}
      <button
        onClick={() => onNavigate?.('notes')}
        className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98] transition-transform duration-200 cursor-pointer border-none text-left w-full"
      >
      <span className="material-symbols-outlined text-[20px]" data-icon="description" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
      <span className="font-bold">Notlar</span>
      </button>
      {/* Tab 3: Geçmiş (Inactive) */}
      <button
        onClick={() => onNavigate?.('history')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer bg-transparent border-none text-left w-full"
      >
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="history">history</span>
      <span className="font-medium">Geçmiş</span>
      </button>
      {/* Tab 4: Ayarlar (Inactive) */}
      <button
        onClick={() => onNavigate?.('settings')}
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group mt-auto cursor-pointer bg-transparent border-none text-left w-full"
      >
      <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full" data-icon="settings">settings</span>
      <span className="font-medium">Ayarlar</span>
      </button>
      </div>
      {/* CTA */}
      <button
        onClick={handleCreateNote}
        className="w-full mt-4 py-3 px-4 bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-medium rounded-lg flex justify-center items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)] cursor-pointer"
      >
      <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                  Yeni Not
              </button>
      </nav>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl font-['Inter'] text-sm font-medium">
      <div className="flex-1" />
      <div className="hidden text-lg font-black tracking-tighter text-[#b4c5ff]">Panel</div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 ml-[288px] pt-24 px-12 pb-16 relative z-10">
      {/* Page Header */}
      <div className="mb-12">
      <h2 className="text-[3.5rem] font-display font-black leading-tight text-on-surface tracking-tight">Düşüncelerini<br /><span className="text-primary opacity-80">Yakala.</span></h2>
      </div>
      {/* Note Input Area */}
      <div className="mb-16">
      <div className="bg-surface-container-low rounded-[16px] p-2 relative group focus-within:bg-surface-container transition-colors duration-300">
      <textarea ref={textareaRef}
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAddNote();
          }
        }}
        className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/60 text-[1rem] leading-[1.5] border-none focus:ring-0 resize-none p-4 font-body outline-none"
        placeholder="Notunuzu yazın..."
        rows={3}
        aria-label="Yeni not içeriği"
      />
      <div className="flex justify-end p-2 mt-2">
      <button
        onClick={handleAddNote}
        type="button"
        disabled={!noteInput.trim()}
        className="bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-lg px-6 py-2.5 font-medium flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                              Ekle
                          </button>
      </div>
      </div>
      </div>
      {/* Notes Grid (Bento Style) */}
      {notes.length === 0 ? (
          <EmptyState
            icon="sticky_note_2"
            message="Henüz not eklenmemiş."
            subMessage="Yeni bir not ekleyerek başlayabilirsiniz. Fikirlerinizi, görevlerinizi veya kısa hatırlatıcılarınızı burada toplayın."
            actionLabel="İlk Notunu Oluştur"
            actionIcon="edit_document"
            onAction={handleCreateNote}
          />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-min">
          {notes.map((note, index) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={handleDeleteNote}
              isLarge={getIsLarge(index)}
            />
          ))}
        </div>
      )}
      </main>
    </>
  );
}
