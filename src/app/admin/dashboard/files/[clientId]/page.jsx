"use client";

import AddFileModal from "@/component/modals/files/AddFileModal";
import EditFileModal from "@/component/modals/files/EditFileModal";
import { useState } from "react";
import {
    FiEye,
    FiDownload,
    FiEdit,
    FiTrash2,
    FiUpload,
} from "react-icons/fi";

export default function FileListingPage() {
    const [activeYear, setActiveYear] = useState("all");
    const [openEdit, setOpenEdit] = useState(false);
    const [openAddFile, setOpenAddFile] = useState(false);

    const files = [
        {
            id: 1,
            name: "Tax Returns 2025.pdf",
            year: "2025",
            size: "2.4 MB",
            uploaded: "Oct 15, 2025",
        },
        {
            id: 2,
            name: "Annual Statement 2024.pdf",
            year: "2024",
            size: "2.4 MB",
            uploaded: "Oct 15, 2025",
        },
    ];

    return (
        <>
            <section className="amplia-page">
                {/* HEADER ROW */}
                <div className="files-header">
                    <div className="tabs mb-0">
                        {["all", "2025", "2024", "2023"].map((year) => (
                            <button
                                key={year}
                                className={`tab-btn ${activeYear === year ? "active" : ""
                                    }`}
                                onClick={() => setActiveYear(year)}
                            >
                                {year === "all" ? "All Files" : year}
                            </button>
                        ))}
                    </div>

                    <button className="btn upload" onClick={() => setOpenAddFile(true)}>
                        <FiUpload /> Upload
                    </button>
                </div>

                {/* FILE CARDS */}
                <div className="file-list">
                    {files.map((file) => (
                        <div key={file.id} className="row gx-0 file-card">
                            
                            <div className="col-6 file-info">
                                <div className="file-icon">📄</div>

                                <div>
                                    <h4>{file.name}</h4>
                                    <div className="file-meta">
                                        <span>{file.year}</span>
                                        <span>•</span>
                                        <span>{file.size}</span>
                                    </div>
                                    <p className="file-date">
                                        Uploaded: {file.uploaded}
                                    </p>
                                </div>
                            </div>

                            <div className="col-6 file-actions">
                                <button className="btn">
                                    <FiEye /> View
                                </button>
                                <button className="btn">
                                    <FiDownload /> Download
                                </button>
                                <button className="btn edit" onClick={() => setOpenEdit(true)}>
                                    <FiEdit /> Edit
                                </button>
                                <button className="btn delete">
                                    <FiTrash2 /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <EditFileModal
                open={openEdit}
                onClose={() => setOpenEdit(false)}
            />
            <AddFileModal
                open={openAddFile}
                onClose={() => setOpenAddFile(false)}
            />
        </>
    );
}
