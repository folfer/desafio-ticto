import Image from "next/image";
import styles from "./styles.module.scss";

import incomeImg from "../../../public/income.svg";
import outcomeImg from "../../../public/outcome.svg";

export function Summary() {
  return (
    <div className={styles.container}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(10)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(20)}
        </strong>
      </div>
      <div className={styles.highlightBackground}>
        <header>
          <p>Total</p>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(-10)}
        </strong>
      </div>
    </div>
  );
}
