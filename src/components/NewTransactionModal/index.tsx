import { FormEvent, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { useTransactions } from "@/hooks/useTransactions";

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
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        X
      </button>

      <form className={styles.container} onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <div className={styles.radioBox}>
          <button
            className={styles.radioBox}
            type="button"
            onClick={() => {
              setType("deposit");
            }}
          >
            <Image src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            className={styles.radioBox}
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <Image src={outcomeImg} alt="Saída" />
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
