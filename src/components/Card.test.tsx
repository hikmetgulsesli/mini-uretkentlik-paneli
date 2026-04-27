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
    const { container } = render(<Card>İçerik</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('rounded-xl');
    expect(card).toHaveClass('bg-surface-container');
    expect(card).toHaveClass('p-6');
  });

  it('custom className ile genişletilebilir', () => {
    const { container } = render(<Card className="max-w-md">Genişletilmiş</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('max-w-md');
  });
});
