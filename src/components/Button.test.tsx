import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('varsayılan olarak primary variant ile render edilir', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toBeInTheDocument();
  });

  it('onClick handler çağrılır', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Tıkla</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Tıkla' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled durumunda tıklanamaz', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Pasif</Button>);
    const button = screen.getByRole('button', { name: 'Pasif' });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('variant=secondary doğru class içerir', () => {
    render(<Button variant="secondary">İkincil</Button>);
    const button = screen.getByRole('button', { name: 'İkincil' });
    expect(button.className).toContain('bg-secondary-container');
  });

  it('variant=danger doğru class içerir', () => {
    render(<Button variant="danger">Sil</Button>);
    const button = screen.getByRole('button', { name: 'Sil' });
    expect(button.className).toContain('bg-error');
  });

  it('size=sm küçük boyut classı içerir', () => {
    render(<Button size="sm">Küçük</Button>);
    const button = screen.getByRole('button', { name: 'Küçük' });
    expect(button.className).toContain('px-3');
  });

  it('size=lg büyük boyut classı içerir', () => {
    render(<Button size="lg">Büyük</Button>);
    const button = screen.getByRole('button', { name: 'Büyük' });
    expect(button.className).toContain('px-6');
    expect(button.className).toContain('text-base');
  });

  it('aria-label prop doğru şekilde uygulanır', () => {
    render(<Button ariaLabel="Kapat">×</Button>);
    expect(screen.getByRole('button', { name: 'Kapat' })).toBeInTheDocument();
  });

  it('type=submit olarak ayarlanabilir', () => {
    render(<Button type="submit">Gönder</Button>);
    const button = screen.getByRole('button', { name: 'Gönder' });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('children olarak ReactNode kabul eder', () => {
    render(
      <Button>
        <span data-testid="icon">★</span>
        <span>Metin</span>
      </Button>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Metin')).toBeInTheDocument();
  });
});
