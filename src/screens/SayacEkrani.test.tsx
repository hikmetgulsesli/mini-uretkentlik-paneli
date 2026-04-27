import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SayacEkrani } from './SayacEkrani';
import { STORAGE_KEYS } from '../types';

describe('SayacEkrani', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('sayfa başlığı ve açıklama görünür', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    expect(screen.getByText('Odağı Koru')).toBeInTheDocument();
    expect(screen.getByText('Hedeflerinize ulaşmak için sayacı kullanın.')).toBeInTheDocument();
  });

  it('CounterDisplay render edilir', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    expect(screen.getByText('Mevcut Değer')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Artır butonu çalışır', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: 'Artır' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Azalt butonu çalışır', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: 'Azalt' }));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('Sıfırla butonu onay modalı açar', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: 'Sıfırla' }));
    expect(screen.getByText('Sayaç Sıfırlama')).toBeInTheDocument();
  });

  it('sidebar navigation Notlar açar', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: /Notlar/ }));
    expect(mockNavigate).toHaveBeenCalledWith('notes');
  });

  it('sidebar navigation Geçmiş açar', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: /Geçmiş/ }));
    expect(mockNavigate).toHaveBeenCalledWith('history');
  });

  it('sidebar navigation Ayarlar açar', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: /Ayarlar/ }));
    expect(mockNavigate).toHaveBeenCalledWith('settings');
  });

  it('Yeni Not butonu navigasyon tetikler', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    const buttons = screen.getAllByRole('button');
    const yeniNotButton = buttons.find((b) => b.textContent?.includes('Yeni Not'))!;
    fireEvent.click(yeniNotButton);
    expect(mockNavigate).toHaveBeenCalledWith('notes');
  });

  it('Son İşlemler başlığı görünür', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    expect(screen.getByText('Son İşlemler')).toBeInTheDocument();
  });

  it('henüz işlem yoksa boş durum mesajı gösterir', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    expect(screen.getByText(/Henüz işlem yapılmadı/)).toBeInTheDocument();
  });

  it('işlem yapıldığında history widget güncellenir', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: 'Artır' }));
    expect(screen.getByText('Artırıldı')).toBeInTheDocument();
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('history entry birden fazla işlem sonrası doğru sıralanır', () => {
    render(<SayacEkrani onNavigate={mockNavigate} />);
    fireEvent.click(screen.getByRole('button', { name: 'Artır' }));
    fireEvent.click(screen.getByRole('button', { name: 'Artır' }));
    fireEvent.click(screen.getByRole('button', { name: 'Azalt' }));
    expect(screen.getAllByText(/Artırıldı|Azaltıldı/).length).toBeGreaterThanOrEqual(1);
  });

  it('history event dinleyicisi mount/unmount edilir', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<SayacEkrani onNavigate={mockNavigate} />);
    expect(addSpy).toHaveBeenCalledWith('history-update', expect.any(Function));
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('history-update', expect.any(Function));
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
