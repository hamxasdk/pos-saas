"use client";

import DailySummary from "@/components/dashboard/DailySummary";
import KPICards from "@/components/dashboard/KPICards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SalesChart from "@/components/dashboard/SalesChart";
import TopProducts from "@/components/dashboard/TopProducts";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, isLoading, router]);

    // Show loading state while checking authentication
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    // Don't render dashboard if not authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <DailySummary />
            <KPICards />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Sales Performance Chart + Top Products */}
                <div className="xl:col-span-2 space-y-8">
                    <SalesChart />
                    <TopProducts />
                </div>
                {/* Side Panel: Recent Activity */}
                <RecentActivity />
            </div>
        </>
    );
}
