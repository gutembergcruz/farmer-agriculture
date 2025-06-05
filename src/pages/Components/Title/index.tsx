import { FiPlus } from "react-icons/fi";
import { TitleContainer } from "./styles";
import Modal from "../Modal";
import { useState } from "react";
import Form from "../Form";

interface TitleProps {
  haveButton?: boolean;
  title: string;
}

export default function Title({ haveButton, title }: TitleProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <TitleContainer>
      <h2>{title}</h2>
      {haveButton && (
        <button onClick={() => setModalIsOpen(true)}>
          <FiPlus />
          Novo Produtor
        </button>
      )}
      {modalIsOpen && (
        <Modal
          title="Novo produtor"
          subtitle="Preencha os dados abaixo"
          onRequestClose={() => setModalIsOpen(false)}
          onConfirm={() => setModalIsOpen(false)}
        >
          <Form />
        </Modal>
      )}
    </TitleContainer>
  );
}
