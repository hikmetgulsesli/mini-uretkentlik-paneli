import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('icon ve mesajı render eder', () => {
    render(<EmptyState icon="folder" message="Dosya yok" />);
    expect(screen.getByText('Dosya yok')).toBeInTheDocument();
  });

  it('subMessage varsa gösterir', () => {
    render(<EmptyState icon="folder" message="Boş" subMessage="Henüz içerik eklenmemiş" />);
    expect(screen.getByText('Henüz içerik eklenmemiş')).toBeInTheDocument();
  });

  it('actionLabel ve onAction ile buton oluşturur', () => {
    const handleAction = vi.fn();
    render(<EmptyState icon="folder" message="Boş" actionLabel="Ekle" onAction={handleAction} />);
    const button = screen.getByRole('button', { name: 'Ekle' });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it('actionIcon gösterir', () => {
    render(<EmptyState icon="folder" message="Boş" actionLabel="Oluştur" actionIcon="add" onAction={vi.fn()} />);
    expect(screen.getByText('add', { selector: '.material-symbols-outlined' })).toBeInTheDocument();
  });

  it('actionLabel yoksa buton oluşturmaz', () => {
    const { container } = render(<EmptyState icon="folder" message="Boş" />);
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });

  it('onAction yoksa buton oluşturmaz', () => {
    const { container } = render(<EmptyState icon="folder" message="Boş" actionLabel="Aksiyon" />);
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });
});
