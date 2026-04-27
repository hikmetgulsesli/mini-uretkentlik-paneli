import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SayacEkrani } from './SayacEkrani';

describe('Debug', () => {
  it('renders', () => {
    render(<SayacEkrani onNavigate={() => {}} />);
    const buttons = screen.getAllByRole('button');
    console.log('BUTTONS:', buttons.map(b => b.getAttribute('aria-label') || b.textContent?.trim()));
  });
});
