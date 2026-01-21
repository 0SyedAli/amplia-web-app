"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuCalendarCheck } from "react-icons/lu";
import { HiOutlineFolder } from "react-icons/hi2";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: <LuCalendarCheck size={18} />,
      label: "Users Management",
      path: "/admin/dashboard",
    },
    {
      icon: <HiOutlineFolder size={18} />,
      label: "Services Management",
      path: "/admin/dashboard/service",
    },
    {
      icon: <PiChatCircleTextLight size={18} />,
      label: "Bookings Management",
      path: "/admin/dashboard/bookings",
    },
    {
      icon: <PiChatCircleTextLight size={18} />,
      label: "Files Management",
      path: "/admin/dashboard/files",
    },
    {
      icon: <PiChatCircleTextLight size={18} />,
      label: "Live Chat Support",
      path: "/admin/dashboard/chat-support",
    },
  ];

  const isActive = (path) => pathname === path;

  return (
    <aside className="amplia-sidebar">
      {/* LOGO */}
      <div className="amplia-logo">
        <Image src="/images/logo-main.png" width={200} height={200} className="img-fluid" alt="Amplia" />
   
      </div>

      {/* MENU */}
      <nav className="amplia-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`amplia-item ${isActive(item.path) ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="amplia-logout">
        <Link href="#!">
          <IoLogOutOutline size={18} />
          Logout
        </Link>
      </div>
    </aside>
  );
}
