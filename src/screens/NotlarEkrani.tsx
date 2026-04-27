// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Notlar Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../types';
import { formatTurkishDateTime } from '../utils/formatters';
import type { Note } from '../types';

interface NotlarEkraniProps {
  onNavigate?: (screen: string) => void;
}

export function NotlarEkrani({ onNavigate }: NotlarEkraniProps) {
  const [notes, setNotes] = useLocalStorage<Note[]>(STORAGE_KEYS.NOTES, []);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: crypto.randomUUID(),
      content: newNote.trim(),
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [note, ...prev]);
    setNewNote('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
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
            <span className="material-symbols-outlined text-on-surface-variant text-2xl">person</span>
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
            type="button"
            onClick={() => onNavigate?.('counter')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full">timer</span>
            <span className="font-medium">Sayaç</span>
          </button>
          {/* Tab 2: Notlar (Active) */}
          <a className="flex items-center gap-3 px-4 py-3 bg-[#222a3d] text-[#b4c5ff] rounded-lg transition-all duration-300 scale-[0.98] transition-transform duration-200" href="#notes">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>description</span>
            <span className="font-bold">Notlar</span>
          </a>
          {/* Tab 3: Geçmiş (Inactive) */}
          <button
            type="button"
            onClick={() => onNavigate?.('history')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full">history</span>
            <span className="font-medium">Geçmiş</span>
          </button>
          {/* Tab 4: Ayarlar (Inactive) */}
          <button
            type="button"
            onClick={() => onNavigate?.('settings')}
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 transition-colors group mt-auto text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:bg-[#222a3d]/50 group-hover:brightness-105 rounded-full">settings</span>
            <span className="font-medium">Ayarlar</span>
          </button>
        </div>
        {/* CTA */}
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('note-input');
            el?.focus();
          }}
          className="w-full mt-4 py-3 px-4 bg-gradient-to-br from-primary-container to-primary text-on-primary-container font-medium rounded-lg flex justify-center items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Yeni Not
        </button>
      </nav>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full pl-[300px] pr-8 h-16 fixed top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl font-['Inter'] text-sm font-medium">
        {/* Search Bar (on_left) */}
        <div className="flex items-center flex-1">
          <div className="relative w-64 group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[18px]">search</span>
            <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-slate-400 rounded-full pl-10 pr-4 py-2 border border-outline-variant/20 focus:border-primary focus:outline-none focus:ring-0 transition-colors" placeholder="Ara..." type="text" />
          </div>
        </div>
        <div className="hidden text-lg font-black tracking-tighter text-[#b4c5ff]">Panel</div>
        {/* Trailing Icons */}
        <div className="flex items-center gap-2">
          <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-slate-400 hover:text-[#b4c5ff] hover:bg-[#222a3d]/40 rounded-full p-2 transition-all cursor-pointer">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
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
            <textarea
              id="note-input"
              className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/60 text-[1rem] leading-[1.5] border-none focus:ring-0 resize-none p-4 font-body outline-none"
              placeholder="Notunuzu yazın..."
              rows={3}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <div className="flex justify-end p-2 mt-2">
              <button
                type="button"
                onClick={handleAddNote}
                disabled={!newNote.trim()}
                className="bg-gradient-to-br from-primary-container to-primary text-on-primary-container rounded-lg px-6 py-2.5 font-medium flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_24px_-4px_rgba(6,14,32,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                Ekle
              </button>
            </div>
          </div>
        </div>
        {/* Notes Grid (Bento Style) */}
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">description</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Henüz Not Yok</h3>
            <p className="text-on-surface-variant text-sm max-w-md">Yukarıdaki alana tıklayarak ilk notunuzu oluşturun.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-min">
            {notes.map((note, index) => (
              <div
                key={note.id}
                className={`bg-surface-container rounded-[16px] p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300 relative overflow-hidden ${index === 0 ? 'xl:col-span-2' : ''}`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary/50 blur-[2px]"></div>
                <div>
                  <p className="text-on-surface text-[1.125rem] leading-[1.6] font-body line-clamp-4 mb-8">
                    {note.content}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[0.75rem] font-label text-on-surface-variant tracking-wider uppercase">
                    {formatTurkishDateTime(note.createdAt)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteNote(note.id)}
                    aria-label="Notu Sil"
                    className="text-on-surface-variant hover:text-error hover:bg-surface-bright rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
