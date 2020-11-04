import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { FaTimesCircle } from "react-icons/fa";

import "../css/modal.css";

const Modal = ({
  showModal = true,
  setShowModal,
  hasCloseButton = false,
  children,
}) => {
  const [initalShow, setInitalShow] = useState(showModal);
  const [classe, setClasse] = useState("");

  useEffect(() => {
    if (showModal) {
      setClasse("show");
    } else {
      setClasse("hidden");
    }
  }, [showModal]);

  useEffect(() => {
    if (initalShow === showModal) return
    setInitalShow(showModal)
    if (showModal) {
      setClasse("fade-in");
    } else {
      setClasse("fade-out");
    }
  }, [showModal]);

  return ReactDom.createPortal(
    <section className={`modal-container ${classe}`}>
      <div className="modal-wrapper">
        {hasCloseButton ? (
          <div className="close" onClick={() => setShowModal(false)}>
            <FaTimesCircle />
          </div>
        ) : null}
        {children}
      </div>
    </section>,
    document.getElementById("portal")
  );
};

export default Modal;
