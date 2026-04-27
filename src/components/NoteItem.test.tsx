import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NoteItem } from './NoteItem';
import type { Note } from '../types';

describe('NoteItem', () => {
  const mockNote: Note = {
    id: 'test-note-1',
    content: 'Test notu içeriği burada.',
    createdAt: '2026-04-27T14:30:00.000Z',
  };

  it('not içeriğini gösterir', () => {
    const onDelete = vi.fn();
    render(<NoteItem note={mockNote} onDelete={onDelete} />);
    expect(screen.getByText('Test notu içeriği burada.')).toBeInTheDocument();
  });

  it('silme butonu görünür', () => {
    const onDelete = vi.fn();
    render(<NoteItem note={mockNote} onDelete={onDelete} />);
    const deleteButton = screen.getByRole('button', { name: 'Notu sil' });
    expect(deleteButton).toBeInTheDocument();
  });

  it('silme butonuna tıklandığında onDelete çağrılır', () => {
    const onDelete = vi.fn();
    render(<NoteItem note={mockNote} onDelete={onDelete} />);
    const deleteButton = screen.getByRole('button', { name: 'Notu sil' });
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledWith('test-note-1');
  });

  it('isLarge=true ise xl:col-span-2 class ekler', () => {
    const onDelete = vi.fn();
    const { container } = render(
      <NoteItem note={mockNote} onDelete={onDelete} isLarge={true} />,
    );
    const noteCard = container.firstChild as HTMLElement;
    expect(noteCard.className).toContain('xl:col-span-2');
  });

  it('isLarge=false ise xl:col-span-2 class eklemez', () => {
    const onDelete = vi.fn();
    const { container } = render(
      <NoteItem note={mockNote} onDelete={onDelete} isLarge={false} />,
    );
    const noteCard = container.firstChild as HTMLElement;
    expect(noteCard.className).not.toContain('xl:col-span-2');
  });

  it('varsayılan olarak isLarge=false', () => {
    const onDelete = vi.fn();
    const { container } = render(<NoteItem note={mockNote} onDelete={onDelete} />);
    const noteCard = container.firstChild as HTMLElement;
    expect(noteCard.className).not.toContain('xl:col-span-2');
  });

  it('tarih formatı doğru gösterilir', () => {
    const onDelete = vi.fn();
    render(<NoteItem note={mockNote} onDelete={onDelete} />);
    // formatTurkishDateTime formats as "27 Nisan 2026, 14:30"
    expect(screen.getByText(/27.*Nisan.*2026.*14:30/i)).toBeInTheDocument();
  });
});
