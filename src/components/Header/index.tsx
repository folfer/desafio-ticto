import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <Image src={Logo} alt="ticto" fill />
        </span>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </header>
  );
}
