"use client";

import EditBookingModal from "@/component/modals/booking/EditBookingModal";
import { useState } from "react";
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [openEdit, setOpenEdit] = useState(false);

  const bookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      service: "Tax Preparation",
      date: "Oct 18, 2025",
      time: "10:00 AM",
      status: "In Progress",
    },
    {
      id: 2,
      client: "Sarah Johnson",
      service: "Tax Preparation",
      date: "Oct 18, 2025",
      time: "10:00 AM",
      status: "In Progress",
    },
  ];

  return (
    <>
      <section className="amplia-page">

        {/* TABS */}
        <div className="tabs mt-0">
          {["active", "scheduled", "completed"].map((tab) => (
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
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <div className="chat-user">
                      <div className="avatar">
                        {booking.client
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      {booking.client}
                    </div>
                  </td>
                  <td>{booking.service}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <span className="status in-progress">
                      {booking.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="btn complete">
                      <FiCheck /> Complete
                    </button>
                    <button className="btn edit" onClick={() => setOpenEdit(true)}>
                      <FiEdit /> Edit
                    </button>
                    <button className="btn delete">
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <EditBookingModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      />
    </>
  );
}
