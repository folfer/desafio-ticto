import styles from "./styles.module.scss";

export function TransactionsTable() {

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

            <tr>
              <td>título</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(1000)}
              </td>
              <td>categoria</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date()
                )}
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
