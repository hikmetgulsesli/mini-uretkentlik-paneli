import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CounterDisplay } from '../components/CounterDisplay';

describe('Debug3', () => {
  it('finds Artır button in CounterDisplay', () => {
    render(<CounterDisplay />);
    const artir = screen.queryByRole('button', { name: 'Artır' });
    console.log('ARTIR FOUND:', !!artir);
    const allButtons = screen.getAllByRole('button');
    allButtons.forEach(b => {
      console.log('  btn aria-label:', b.getAttribute('aria-label'), '| text:', b.textContent?.trim());
    });
  });
});
