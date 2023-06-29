import { createContext, ReactNode, useContext, useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  handleDeleteElement: (id: number) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const { amount, category, title, type } = transactionInput;

    const newTransactionValue = {
      id: Math.random(),
      amount,
      category,
      title,
      type,
      createdAt: new Date().toISOString(),
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransactionValue,
    ]);
  }

  const handleDeleteElement = (id: number) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        handleDeleteElement,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
