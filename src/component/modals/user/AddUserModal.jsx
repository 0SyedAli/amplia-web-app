"use client";

import Modal from "@/component/modals/Modal";

export default function AddUserModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Add User">
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select defaultValue="">
            <option>Inactive</option>
            <option>active</option>
          </select>
        </div>

        <div className="form-group">
          <label>Role</label>
          <select defaultValue="">
            <option>Client</option>
            <option>User</option>
          </select>
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
