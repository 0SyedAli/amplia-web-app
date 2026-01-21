"use client";

import Modal from "@/component/modals/Modal";

export default function AddServiceModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Add Service">
      <form className="form">
        <div className="form-group">
          <label>Service Name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea rows={4}></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" />
        </div>

        <div className="form-group">
          <label>Upload a image file</label>
          <div className="file-input">
            <input type="file" />
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn primary">
            Add Services
          </button>
        </div>
      </form>
    </Modal>
  );
}
