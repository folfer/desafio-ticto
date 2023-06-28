import { Sumarry } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <main className={styles.container}>
      <Sumarry />
      <TransactionsTable />
    </main>
  );
}
