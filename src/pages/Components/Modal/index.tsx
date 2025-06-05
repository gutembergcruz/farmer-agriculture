import { FiX } from "react-icons/fi";
import { ModalContainer, ModalContent } from "./styles";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    onRequestClose: () => void;
    onConfirm: () => void;
}

export default function Modal({ children, title, subtitle, onRequestClose, onConfirm }: ModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <div className="header-modal">
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <button onClick={() => onRequestClose()}>
            {" "}
            <FiX />{" "}
          </button>
        </div>
        <div className="body-modal">
          {children}
        </div>
        <div className="footer-modal">
          <button onClick={() => onRequestClose()} >Cancelar</button>
          <button onClick={() => onConfirm()} >Salvar</button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
