"use client";

import { useState } from "react";

export default function ReportsPage() {
    const [dateRange, setDateRange] = useState("Last 30 Days");

    const reports = [
        {
            title: "Sales Summary",
            description: "Detailed breakdown of sales by category, payment method, and time.",
            icon: "payments",
            color: "text-blue-600",
            bg: "bg-blue-100 dark:bg-blue-900/20",
        },
        {
            title: "Inventory Valuation",
            description: "Current value of stock on hand, low stock alerts, and turnover rates.",
            icon: "inventory_2",
            color: "text-purple-600",
            bg: "bg-purple-100 dark:bg-purple-900/20",
        },
        {
            title: "Customer Insights",
            description: "New vs returning customers, top spenders, and engagement metrics.",
            icon: "group",
            color: "text-emerald-600",
            bg: "bg-emerald-100 dark:bg-emerald-900/20",
        },
        {
            title: "Profit & Loss",
            description: "Net profit analysis, expense tracking, and margin calculations.",
            icon: "account_balance",
            color: "text-amber-600",
            bg: "bg-amber-100 dark:bg-amber-900/20",
        },
    ];

    return (
        <div className="space-y-6 font-display">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Reports & Analytics
                    </h2>
                    <p className="text-sm text-slate-500">
                        Gain insights into your business performance
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        {dateRange}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        Export All
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white shadow-lg shadow-primary/20">
                    <p className="text-primary-100 font-medium mb-1">Total Revenue</p>
                    <h3 className="text-3xl font-extrabold mb-4">$24,500.00</h3>
                    <div className="flex items-center gap-2 text-sm bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>+15.2% vs last month</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <p className="text-slate-500 font-medium mb-1">Gross Profit</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">$8,240.00</h3>
                    <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 w-fit px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>+8.5%</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <p className="text-slate-500 font-medium mb-1">Total Orders</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">452</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                        <span>0% vs last month</span>
                    </div>
                </div>
            </div>

            {/* Report Categories */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-4">
                Available Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reports.map((report) => (
                    <div
                        key={report.title}
                        className="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-primary/50"
                    >
                        <div className={`w-12 h-12 rounded-xl ${report.bg} ${report.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined text-[24px]">
                                {report.icon}
                            </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            {report.title}
                        </h4>
                        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                            {report.description}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                            <span className="mr-1">View Report</span>
                            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Exports */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Recent Exports
                    </h3>
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-800">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Monthly_Sales_Report_Oct_2025.pdf</p>
                                    <p className="text-xs text-slate-500">Generated on Oct 31, 2025 at 10:30 AM</p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">download</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
