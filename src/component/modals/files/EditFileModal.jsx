"use client";

import Modal from "@/component/modals/Modal";

export default function EditFileModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Edit File Details">
      <form className="form">
        <div className="form-group">
          <label>File Name</label>
          <input type="text" defaultValue="Tax Returns 2025.pdf" />
        </div>

        <div className="form-group">
          <label>Year</label>
          <select defaultValue="2025">
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>

        <div className="form-group">
          <label>File Size</label>
          <input type="text" defaultValue="2.4 MB" disabled />
        </div>

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
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
}
