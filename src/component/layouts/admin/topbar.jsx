"use client"
import Image from "next/image"
import { usePathname } from "next/navigation";

const TOPBAR_ROUTES = [
  {
    path: "/admin/dashboard",
    title: "Users Management",
  },
  {
    path: "/admin/dashboard/service",
    title: "Services Management",
  },
  {
    path: "/admin/dashboard/bookings",
    title: "Bookings Management",
  },
  {
    path: "/admin/dashboard/files",
    title: "File Management",
  },
  {
    path: "/admin/dashboard/chat-support",
    title: "Live Chat Support",
  }
];

export default function TopBar() {
  const pathname = usePathname();

  const current = TOPBAR_ROUTES.find(
    (route) => pathname === route.path
  );
  return (
    <div className="topbar">
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p>{current?.title || "Dashboard"}</p>
        </div>
      </div>
      <div className="topbar-actions">
        <div className="topbar-icon">
          <Image src="/images/noti-icon.png" width={18} height={18} className="img-fluid" alt="Child Progress" />
        </div>

      </div>
    </div>
  )
}
