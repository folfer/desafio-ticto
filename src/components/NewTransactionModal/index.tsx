import { FormEvent, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { useTransactions } from "@/hooks/useTransactions";

import close from "../../../public/close.svg";
import incomeImg from "../../../public/up.svg";
import outcomeImg from "../../../public/down.svg";
import Image from "next/image";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");
  const [isDepositActive, setIsDepositActive] = useState(false);
  const [isWithdrawActive, setIsWithdrawActive] = useState(false);

  function handleDepositActive() {
    setIsDepositActive(!isDepositActive);
    setIsWithdrawActive(false);
  };

  function handleWithdrawActive() {
    setIsWithdrawActive(!isWithdrawActive);
    setIsDepositActive(false);
  };

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form data-testId="newTransactionModal_component" className={styles.container} onSubmit={handleCreateNewTransaction}>
        <legend>
          <h2>Cadastrar transação</h2>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <Image src={close} alt="Fechar" />
          </button>
        </legend>

        <input
          placeholder="Nome"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <div className={styles.transactionTypeContainer}>
          <button
            className={styles[isDepositActive ? 'deposit' : 'radioBox']}
            type="button"
            onClick={() => {
              setType("deposit");
              handleDepositActive();
            }}
          >

            <Image src={outcomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            className={styles[isWithdrawActive ? 'withdraw' : 'radioBox']}
            type="button"
            onClick={() => {
              setType("withdraw");
              handleWithdrawActive();
            }}
          >
            <Image src={incomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </div>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
}

Modal.setAppElement("body");
