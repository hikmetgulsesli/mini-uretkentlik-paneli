import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';
import { STORAGE_KEYS } from '../types';

describe('useCounter Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('varsayılan değer 0 olur', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.value).toBe(0);
  });

  it('increment değeri 1 artırır', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    expect(result.current.value).toBe(1);
  });

  it('decrement değeri 1 azaltır', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.decrement(); });
    expect(result.current.value).toBe(-1);
  });

  it('reset değeri sıfırlar', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    act(() => { result.current.increment(); });
    expect(result.current.value).toBe(2);
    act(() => { result.current.reset(); });
    expect(result.current.value).toBe(0);
  });

  it('increment history entry üretir', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(1);
    expect(history[0].type).toBe('increment');
    expect(history[0].value).toBe(1);
    expect(history[0].description).toBe('Sayaç artırıldı');
  });

  it('decrement history entry üretir', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.decrement(); });
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(1);
    expect(history[0].type).toBe('decrement');
    expect(history[0].value).toBe(-1);
  });

  it('reset history entry üretir', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    act(() => { result.current.reset(); });
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(2);
    expect(history[0].type).toBe('reset');
    expect(history[0].value).toBe(0);
  });

  it('localStorage counter değerini senkronize tutar', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    expect(JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNTER)!)).toBe(1);
  });

  it('var olan counter değerini localStorage dan okur', () => {
    localStorage.setItem(STORAGE_KEYS.COUNTER, JSON.stringify(42));
    const { result } = renderHook(() => useCounter());
    expect(result.current.value).toBe(42);
  });

  it('dispatch history-update event tetikler', () => {
    const listener = vi.fn();
    window.addEventListener('history-update', listener);
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener('history-update', listener);
  });

  it('ardışık increment/decrement doğru çalışır', () => {
    const { result } = renderHook(() => useCounter());
    act(() => { result.current.increment(); });
    act(() => { result.current.increment(); });
    act(() => { result.current.decrement(); });
    act(() => { result.current.increment(); });
    expect(result.current.value).toBe(2);
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)!);
    expect(history).toHaveLength(4);
  });
});
