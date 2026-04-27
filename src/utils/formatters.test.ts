import { describe, it, expect } from 'vitest';
import { formatTurkishDateTime } from './formatters';

describe('formatTurkishDateTime', () => {
  it('ISO tarihi Turkce formatlar', () => {
    expect(formatTurkishDateTime('2026-04-27T14:35:00.000Z')).toBe('27 Nisan 2026, 14:35');
  });

  it('baska bir tarih dogru formatlar', () => {
    expect(formatTurkishDateTime('2026-01-05T09:12:00.000Z')).toBe('5 Ocak 2026, 09:12');
  });

  it('tek haneli gun/ay dogru formatlar', () => {
    expect(formatTurkishDateTime('2026-03-08T03:07:00.000Z')).toBe('8 Mart 2026, 03:07');
  });

  it('tum aylar dogru cevrilir', () => {
    const months = [
      ['2026-01-15T10:00:00.000Z', '15 Ocak 2026, 10:00'],
      ['2026-02-15T10:00:00.000Z', '15 Şubat 2026, 10:00'],
      ['2026-03-15T10:00:00.000Z', '15 Mart 2026, 10:00'],
      ['2026-04-15T10:00:00.000Z', '15 Nisan 2026, 10:00'],
      ['2026-05-15T10:00:00.000Z', '15 Mayıs 2026, 10:00'],
      ['2026-06-15T10:00:00.000Z', '15 Haziran 2026, 10:00'],
      ['2026-07-15T10:00:00.000Z', '15 Temmuz 2026, 10:00'],
      ['2026-08-15T10:00:00.000Z', '15 Ağustos 2026, 10:00'],
      ['2026-09-15T10:00:00.000Z', '15 Eylül 2026, 10:00'],
      ['2026-10-15T10:00:00.000Z', '15 Ekim 2026, 10:00'],
      ['2026-11-15T10:00:00.000Z', '15 Kasım 2026, 10:00'],
      ['2026-12-15T10:00:00.000Z', '15 Aralık 2026, 10:00'],
    ];
    months.forEach(([iso, expected]) => {
      expect(formatTurkishDateTime(iso)).toBe(expected);
    });
  });

  it('gecersiz tarih icin bos string doner', () => {
    expect(formatTurkishDateTime('invalid-date')).toBe('');
  });

  it('bos string icin bos string doner', () => {
    expect(formatTurkishDateTime('')).toBe('');
  });
});
