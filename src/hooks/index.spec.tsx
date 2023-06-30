import { renderHook, act } from "@testing-library/react";
import { TransactionsProvider, useTransactions } from "./useTransactions";

describe("useTransactions", () => {
  test("retorna transações vazias inicialmente", () => {
    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider,
    });

    expect(result.current.transactions).toEqual([]);
  });

  test("adiciona uma nova transação", async () => {
    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider,
    });

    await act(async () => {
      await result.current.createTransaction({
        title: "Nova transação",
        amount: 100,
        type: "income",
        category: "Teste",
      });
    });

    expect(result.current.transactions).toHaveLength(1);
  });
});
