"use client"
import Image from "next/image"
import { usePathname } from "next/navigation";

const TOPBAR_ROUTES = [
  {
    path: "/sub-admin/dashboard",
    title: "Bookings Management",
  },
  {
    path: "/sub-admin/dashboard/files",
    title: "File Management",
  },
  {
    path: "/sub-admin/dashboard/chat",
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
          <Image src="/images/noti-icon.png" width={18} height={18} alt="Child Progress" />
        </div>

      </div>
    </div>
  )
}
