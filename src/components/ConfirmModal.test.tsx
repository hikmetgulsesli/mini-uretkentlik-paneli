import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmModal } from './ConfirmModal';

describe('ConfirmModal', () => {
  const defaultProps = {
    isOpen: true,
    title: 'Tüm Verileri Sil',
    description: 'Silmek istediğinize emin misiniz?',
    onConfirm: vi.fn(),
    onCancel: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('isOpen=true iken render edilir', () => {
    render(<ConfirmModal {...defaultProps} />);
    expect(screen.getByText('Tüm Verileri Sil')).toBeInTheDocument();
    expect(screen.getByText('Silmek istediğinize emin misiniz?')).toBeInTheDocument();
  });

  it('isOpen=false iken null döner', () => {
    const { container } = render(<ConfirmModal {...defaultProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('onConfirm butonu tıklandığında callback çağrılır', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /Sil$/ }));
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('onCancel butonu tıklandığında callback çağrılır', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'İptal' }));
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('Escape tuşu ile onCancel çağrılır', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('custom confirmLabel gösterir', () => {
    render(<ConfirmModal {...defaultProps} confirmLabel="Onayla" />);
    expect(screen.getByRole('button', { name: 'Onayla' })).toBeInTheDocument();
  });

  it('custom cancelLabel gösterir', () => {
    render(<ConfirmModal {...defaultProps} cancelLabel="Vazgeç" />);
    expect(screen.getByRole('button', { name: 'Vazgeç' })).toBeInTheDocument();
  });

  it('role=dialog ve aria-modal=true içerir', () => {
    render(<ConfirmModal {...defaultProps} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  it('aria-labelledby title ile eşleşir', () => {
    render(<ConfirmModal {...defaultProps} />);
    const modal = screen.getByRole('dialog');
    const titleId = modal.getAttribute('aria-labelledby');
    expect(screen.getById(titleId!)).toHaveTextContent('Tüm Verileri Sil');
  });
});
