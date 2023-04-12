import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";
import { useContext } from "react";
const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay "}>
      <div className="modal-container">
        <h3>modal context</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
