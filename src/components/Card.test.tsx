import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('children içeriğini render eder', () => {
    render(
      <Card>
        <h2>Kart Başlığı</h2>
        <p>Kart içeriği</p>
      </Card>,
    );
    expect(screen.getByText('Kart Başlığı')).toBeInTheDocument();
    expect(screen.getByText('Kart içeriği')).toBeInTheDocument();
  });

  it('varsayılan classları içerir', () => {
    render(<Card>İçerik</Card>);
    const card = screen.getByText('İçerik').parentElement;
    expect(card?.className).toContain('rounded-xl');
    expect(card?.className).toContain('bg-surface-container');
    expect(card?.className).toContain('p-6');
  });

  it('custom className ile genişletilebilir', () => {
    render(<Card className="max-w-md">Genişletilmiş</Card>);
    const card = screen.getByText('Genişletilmiş').parentElement;
    expect(card?.className).toContain('max-w-md');
  });
});
