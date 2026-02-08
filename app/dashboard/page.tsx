"use client";

import DailySummary from "@/components/dashboard/DailySummary";
import KPICards from "@/components/dashboard/KPICards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SalesChart from "@/components/dashboard/SalesChart";
import TopProducts from "@/components/dashboard/TopProducts";

export default function DashboardPage() {
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
