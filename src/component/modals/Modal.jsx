"use client";

export default function Modal({
    open,
    onClose,
    title,
    children,
    width = "520px",
}) {
    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container" style={{ width }}>
                {/* HEADER */}
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                {/* BODY */}
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}
