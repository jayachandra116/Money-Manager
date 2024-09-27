import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeModal } from "../../store/modal";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { content, isOpen } = useAppSelector((state) => state.modal);

  if (!isOpen) {
    return null;
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return ReactDOM.createPortal(
    <div className={classes["modal-backdrop"]} onClick={handleCloseModal}>
      <div className={classes["modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={classes["modal__header"]}>
          <h2>{content.title}</h2>
          <button
            onClick={handleCloseModal}
            className={classes["modal__close-btn"]}
          >
            <span className={classes["X"]}></span>
            <span className={classes["Y"]}></span>
            <div className={classes["close"]}>Close</div>
          </button>
        </div>
        {content.body}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
