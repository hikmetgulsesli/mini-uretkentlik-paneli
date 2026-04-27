import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CounterDisplay } from './CounterDisplay';
import { STORAGE_KEYS } from '../types';

describe('CounterDisplay', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('başlangıç değeri 0 olarak gösterilir', () => {
    render(<CounterDisplay />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Artır butonu tıklandığında değer artar', () => {
    render(<CounterDisplay />);
    const incrementButton = screen.getByRole('button', { name: 'Artır' });
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Azalt butonu tıklandığında değer azalır', () => {
    render(<CounterDisplay />);
    const decrementButton = screen.getByRole('button', { name: 'Azalt' });
    fireEvent.click(decrementButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('Sıfırla butonu onay modalı açar', () => {
    render(<CounterDisplay />);
    const resetButton = screen.getByRole('button', { name: 'Sıfırla' });
    fireEvent.click(resetButton);
    expect(screen.getByText('Sayaç Sıfırlama')).toBeInTheDocument();
  });

  it('modalda İptal butonu modalı kapatır', () => {
    render(<CounterDisplay />);
    fireEvent.click(screen.getByRole('button', { name: 'Sıfırla' }));
    fireEvent.click(screen.getByRole('button', { name: 'İptal' }));
    expect(screen.queryByText('Sayaç Sıfırlama')).not.toBeInTheDocument();
  });

  it('modalda Sıfırla butonu değeri sıfırlar', () => {
    render(<CounterDisplay />);
    const incrementButton = screen.getByRole('button', { name: 'Artır' });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Sıfırla' }));
    const modalConfirmButton = screen.getAllByRole('button', { name: /Sıfırla$/ }).pop()!;
    fireEvent.click(modalConfirmButton);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.queryByText('Sayaç Sıfırlama')).not.toBeInTheDocument();
  });

  it('Mevcut Değer etiketi görünür', () => {
    render(<CounterDisplay />);
    expect(screen.getByText('Mevcut Değer')).toBeInTheDocument();
  });

  it('localStorage counter değerini saklar', () => {
    render(<CounterDisplay />);
    fireEvent.click(screen.getByRole('button', { name: 'Artır' }));
    expect(JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNTER)!)).toBe(1);
  });

  it('Escape tuşu modalı kapatır', () => {
    render(<CounterDisplay />);
    fireEvent.click(screen.getByRole('button', { name: 'Sıfırla' }));
    expect(screen.getByText('Sayaç Sıfırlama')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText('Sayaç Sıfırlama')).not.toBeInTheDocument();
  });

  it('değer negatif olabilir', () => {
    render(<CounterDisplay />);
    const decrementButton = screen.getByRole('button', { name: 'Azalt' });
    for (let i = 0; i < 5; i++) {
      fireEvent.click(decrementButton);
    }
    expect(screen.getByText('-5')).toBeInTheDocument();
  });
});
