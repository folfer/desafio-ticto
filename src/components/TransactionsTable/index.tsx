import { useTransactions } from "@/hooks/useTransactions";
import styles from "./styles.module.scss";
import trash from "../../../public/trash.svg";

import Image from "next/image";

export function TransactionsTable() {
  const { transactions, handleDeleteElement } = useTransactions();

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.head}>
          <h2>Listagem</h2>
          <p>
            {transactions.length === 1 ?
              `${transactions.length} item` :
              `${transactions.length} itens`
            }
          </p>
          <span>Descrição</span>
          <span>Valor</span>
          <span>Categoria</span>
          <span>Data</span>
        </div>
        {transactions.map((transaction) => (
          <div className={styles.grid} key={transaction.title}>
            <span>{transaction.title}</span>
            <span className={styles[transaction.type]}>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(transaction.amount)}
            </span>
            <span>{transaction.category}</span>
            <span>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(transaction.createdAt)
              )}
            </span>
            <span>
              <button
                onClick={() => handleDeleteElement(transaction.id)}
              >
                <Image src={trash} alt="Ícone de lixeira" />
              </button>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}