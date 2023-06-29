"use client";

import { Header } from "@/components/Header";
import styles from "./styles.module.scss";
import { Dashboard } from "@/components/Dashboard";
import { TransactionsProvider } from "@/hooks/useTransactions";
import { useState } from "react";
import { NewTransactionModal } from "@/components/NewTransactionModal";

export default function HomePage() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <section className={styles.container}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </section>
    </TransactionsProvider>
  );
}
