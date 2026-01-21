"use client";

import Link from "next/link";
import { FiFolder } from "react-icons/fi";

export default function FilesPage() {
    const clients = [
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.j@email.com",
            role: "Client",
            status: "Active",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah.j@email.com",
            role: "Client",
            status: "Inactive",
        },
        {
            id: 3,
            name: "Sarah Johnson",
            email: "sarah.j@email.com",
            role: "Client",
            status: "Active",
        },
    ];

    return (
        <>
            <section className="amplia-page">

                {/* TABLE */}
                <div className="table-wrapper">
                    <table className="amplia-table">
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th className="actions">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>
                                        <div className="chat-user">
                                            <div className="avatar">
                                                {client.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                            {client.name}
                                        </div>
                                    </td>

                                    <td>{client.email}</td>
                                    <td>
                                        <span className="role-pill">{client.role}</span>
                                    </td>
                                    <td>
                                        <span
                                            className={`status ${client.status === "Active"
                                                ? "active"
                                                : "inactive"
                                                }`}
                                        >
                                            {client.status}
                                        </span>
                                    </td>
                                    <td className="actions">
                                        <Link href="/admin/dashboard/files/1" className="btn open">
                                            <FiFolder /> Open Files
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
         
        </>
    );
}
