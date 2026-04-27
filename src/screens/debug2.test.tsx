import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SayacEkrani } from './SayacEkrani';

describe('Debug2', () => {
  it('finds Artır button', () => {
    render(<SayacEkrani onNavigate={() => {}} />);
    const artir = screen.queryByRole('button', { name: 'Artır' });
    console.log('ARTIR FOUND:', !!artir);
    if (!artir) {
      const allButtons = screen.getAllByRole('button');
      allButtons.forEach(b => {
        console.log('  btn aria-label:', b.getAttribute('aria-label'), '| text:', b.textContent?.trim());
      });
    }
  });
});
