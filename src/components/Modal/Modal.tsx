import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <div className={classes["modal-backdrop"]}>
      <div className={classes["modal"]}>
        <div className={classes["modal__header"]}>
          <h2>{title}</h2>
          <button onClick={onClose} className={classes["modal__close-btn"]}>
            <span className={classes["X"]}></span>
            <span className={classes["Y"]}></span>
            <div className={classes["close"]}>Close</div>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
