"use client";

import AddUserModal from "@/component/modals/user/AddUserModal";
import { useState } from "react";
import { FiTrash2, FiSearch } from "react-icons/fi";

export default function BookingsPage() {
  const [openAddUser, setOpenAddUser] = useState(false);

  const bookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      email: "abc@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      client: "Sarah Johnson",
      email: "abc@gmail.com",
      status: "Active",
    },
  ];

  return (
    <>
      <section className="amplia-page">
        <div className="services-top">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search users..." />
          </div>

          <button className="btn primary" onClick={() => setOpenAddUser(true)}>Add User</button>
        </div>

        {/* TABLE */}
        <div className="table-wrapper">
          <table className="amplia-table">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
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
                  <td>{booking.email}</td>
                  <td>
                    <span className="status in-progress">
                      {booking.status}
                    </span>
                  </td>
                  <td className="actions">
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
      <AddUserModal
        open={openAddUser}
        onClose={() => setOpenAddUser(false)}
      />
    </>
  );
}
