"use client";

import Modal from "@/component/modals/Modal";

export default function AddFileModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Add File Details">
      <form className="form">
        <div className="form-group">
          <label>File Name</label>
          <input type="text"  />
        </div>

        <div className="form-group">
          <label>Year</label>
          <select defaultValue="">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        {/* <div className="form-group">
          <label>File Size</label>
          <input type="text" disabled />
        </div> */}

        <div className="form-group">
          <label>Upload File</label>
          <div className="file-input">
            <input type="file" />
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn primary">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}
