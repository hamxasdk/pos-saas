"use client";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display">
            <Sidebar />
            <main className="flex-1 overflow-y-auto flex flex-col">
                <Header />
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
