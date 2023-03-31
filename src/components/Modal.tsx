import React from "react";
import "./Modal.css";

type modalConfirmationProps = {
  show: boolean;
  handleClose: () => void;
  onDelete: () => void;
};

export const ModalConfirmation = ({
  show,
  handleClose,
  onDelete,
}: modalConfirmationProps) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Are you sure you want to delete this restorant?</h3>
        <div className="btn-modal">
          <button className="close-btn" onClick={onDelete}>
            Delete
          </button>
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
