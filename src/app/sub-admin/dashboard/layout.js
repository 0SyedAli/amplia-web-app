"use client"
import TopBar from "@/component/layouts/sub-admin/topbar"
import Sidebar from "@/component/layouts/sub-admin/sidebar"

export default function Dashboard({ children }) {
    return (
        <div style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow-1" style={{ marginLeft: "300px", backgroundColor: "#FFF" }}>
                {/* Top Bar */}
                <TopBar/>
                {children}
            </div>
        </div>
    )
}
