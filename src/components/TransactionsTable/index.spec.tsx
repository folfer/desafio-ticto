import { render, screen } from "@testing-library/react";
import { TransactionsProvider } from "@/hooks/useTransactions";
import { TransactionsTable } from "./index";

// Mock do hook useTransactions
jest.mock("../../hooks/useTransactions", () => ({
  useTransactions: jest.fn(() => ({
    transactions: [
      {
        title: "Test Transaction",
        amount: 100,
        type: "income",
        category: "Test Category",
        createdAt: "2023-06-29T10:00:00.000Z",
      },
    ],
  })),
}));

describe("TransactionsTable", () => {
  beforeEach(() => {
    render(
        <TransactionsTable />
    );
  });

  test("exibe a tabela de transações corretamente", () => {
    const titleCell = screen.getByText("Test Transaction");
    const amountCell = screen.getByText("R$ 100,00");
    const categoryCell = screen.getByText("Test Category");
    const dateCell = screen.getByText("29/06/2023");

    expect(titleCell).toBeInTheDocument();
    expect(amountCell).toBeInTheDocument();
    expect(categoryCell).toBeInTheDocument();
    expect(dateCell).toBeInTheDocument();
  });
});