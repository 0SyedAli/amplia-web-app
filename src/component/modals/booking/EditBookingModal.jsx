"use client";

import Modal from "@/component/modals/Modal";

export default function EditBookingModal({ open, onClose }) {
    return (
        <Modal open={open} onClose={onClose} title="Edit Booking">
            <form className="form">
                <div className="form-group">
                    <label>Client Name</label>
                    <input type="text" defaultValue="Sarah Johnson" />
                </div>

                <div className="form-group">
                    <label>Service</label>
                    <select defaultValue="Tax Preparation">
                        <option>Tax Preparation</option>
                        <option>Tax Preparation</option>
                        <option>Tax Preparation</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="text" defaultValue="Oct 18, 2025" />
                </div>

                <div className="form-group">
                    <label>Time</label>
                    <input type="text" defaultValue="10:00 AM" />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select defaultValue="In Progress">
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Complete</option>
                    </select>
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
