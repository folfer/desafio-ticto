import { render, screen } from '@testing-library/react';
import { useTransactions } from '@/hooks/useTransactions';
import { Sumarry } from './index';

jest.mock('../../hooks/useTransactions');

describe('Sumarry', () => {
  test('renders component correctly', () => {
    const transactionsMock = [
      { id: 1, type: 'deposit', amount: 100 },
      { id: 2, type: 'withdraw', amount: 50 },
    ];

    // Mock do hook personalizado useTransactions
    const useTransactionsMock = jest.fn();
    useTransactionsMock.mockReturnValue({ transactions: transactionsMock });
    useTransactions.mockImplementation(() => useTransactionsMock());

    render(<Sumarry />);

    const depositsElement = screen.getByText(/entradas/i);
    expect(depositsElement).toBeInTheDocument();

    const withdrawalsElement = screen.getByText(/saídas/i);
    expect(withdrawalsElement).toBeInTheDocument();

    const totalElement = screen.getByText(/total/i);
    expect(totalElement).toBeInTheDocument();
  });
});