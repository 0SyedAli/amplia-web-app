"use client";

import { useState } from "react";
import { FiSend, FiCheck, FiX } from "react-icons/fi";

export default function LiveChatPage() {
    const [activeTab, setActiveTab] = useState("all");

    const chats = [
        {
            id: 1,
            name: "Michael Chen",
            message: "Thank you for the consultation",
            status: "active",
            time: "15m ago",
        },
        {
            id: 2,
            name: "Michael Chen",
            message: "Thank you for the consultation",
            status: "active",
            time: "15m ago",
        },
    ];

    return (
        <section className="amplia-page">

            {/* TABS */}
            <div className="tabs">
                {["all", "active", "waiting", "resolved"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* TABLE */}
            <div className="table-wrapper">
                <table className="amplia-table">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Time</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {chats.map((chat) => (
                            <tr key={chat.id}>
                                <td>
                                    <div className="chat-user">
                                        <div className="avatar">
                                            {chat.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        {chat.name}
                                    </div>
                                </td>

                                <td className="chat-message">{chat.message}</td>

                                <td>
                                    <span className="status active">Active</span>
                                </td>

                                <td className="chat-time">{chat.time}</td>

                                <td className="actions">
                                    <button className="btn reply">
                                        <FiSend /> Reply
                                    </button>
                                    <button className="btn complete">
                                        <FiCheck /> Resolve
                                    </button>
                                    <button className="btn delete">
                                        <FiX /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
