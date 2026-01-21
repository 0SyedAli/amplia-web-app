"use client";

import AddServiceModal from "@/component/modals/service/AddServiceModal";
import { useState } from "react";
import {
  FiEdit2,
  FiSearch,
} from "react-icons/fi";
import {
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";


export default function ServicesPage() {
    const [openAddService, setOpenAddService] = useState(false);

  const [services, setServices] = useState([
    
    {
      id: 1,
      title: "Payroll Management",
      description: "Professional tax filing and preparation services",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineDocumentText size={22} />,
    },
    {
      id: 2,
      title: "Tax Planning & Preparation",
      description: "Expert financial advice and planning",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineCurrencyDollar size={22} />,
    },
    {
      id: 3,
      title: "Monthly Financial Reports",
      description: "Professional tax filing and preparation services",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineDocumentText size={22} />,
    },
    {
      id: 4,
      title: "Bookkeeping Services",
      description: "Expert financial advice and planning",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineCurrencyDollar size={22} />,
    },
    {
      id: 5,
      title: "Cash Flow Management",
      description: "Professional tax filing and preparation services",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineDocumentText size={22} />,
    },
    {
      id: 6,
      title: "Compliance & Audit Support",
      description: "Expert financial advice and planning",
      price: "$150 - $500",
      bookings: 24,
      active: true,
      icon: <HiOutlineCurrencyDollar size={22} />,
    },
  ]);

  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <>
      <section className="amplia-page">
        {/* TOP CONTROLS */}
        <div className="services-top">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search services..." />
          </div>

          <button className="btn primary" onClick={() => setOpenAddService(true)}>Add Services</button>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* HEADER */}
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={service.active}
                    onChange={() => toggleService(service.id)}
                  />
                  <span className="slider" />
                </label>
              </div>

              {/* BODY */}
              <h4>{service.title}</h4>
              <p className="service-desc">{service.description}</p>

              <div className="service-meta">
                <div>
                  <span>Price Range</span>
                  <strong>{service.price}</strong>
                </div>

                <div className="text-right">
                  <span>Bookings</span>
                  <strong>{service.bookings}</strong>
                </div>
              </div>

              {/* FOOTER */}
              <button className="btn outline full">
                <FiEdit2 /> Edit Service
              </button>
            </div>
          ))}
        </div>
      </section>
      <AddServiceModal
        open={openAddService}
        onClose={() => setOpenAddService(false)}
      />
    </>
  );
}
