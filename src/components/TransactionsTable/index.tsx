import { useTransactions } from "@/hooks/useTransactions";
import styles from "./styles.module.scss";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <div className={styles.container}>
      <section>
      <div className={styles.head}>
        <h2>Listagem</h2>
        <p>
          {transactions.length <= 1 ? 
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
      </div>
       ))}
       </section>
    </div>
  );
}


// <table>
// <thead>
//   <tr>
//     <th>Título</th>
//     <th>Valor</th>
//     <th>Categoria</th>
//     <th>Data</th>
//   </tr>
// </thead>

// <tbody>
//   {transactions.map((transaction) => (
//     <tr key={transaction.title}>
//       <td>{transaction.title}</td>
//       <td className={styles[transaction.type]}>
//         {new Intl.NumberFormat("pt-BR", {
//           style: "currency",
//           currency: "BRL",
//         }).format(transaction.amount)}
//       </td>
//       <td>{transaction.category}</td>
//       <td>
//         {new Intl.DateTimeFormat("pt-BR").format(
//           new Date(transaction.createdAt)
//         )}
        
//       </td>
//     </tr>
//   ))}
// </tbody>
// </table>