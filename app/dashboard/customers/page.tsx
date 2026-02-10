"use client";

import { useState } from "react";

export default function CustomersPage() {
    return (
        <div className="space-y-6 font-display">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Customers
                    </h2>
                    <p className="text-sm text-slate-500">
                        Manage your customer base and loyalty programs
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">cloud_download</span>
                        Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">person_add</span>
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg text-indigo-600">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                            +12.5%
                        </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Customers</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        2,450
                    </h3>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg text-green-600">
                            <span className="material-symbols-outlined">person_add</span>
                        </div>
                        <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                            +5.2%
                        </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-1">New This Month</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        145
                    </h3>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600">
                            <span className="material-symbols-outlined">star</span>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Active Members</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        850
                    </h3>
                </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Customer List
                    </h3>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-64">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Search customers..."
                                className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full"
                            />
                        </div>
                        <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                            <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Total Spent</th>
                                <th className="px-6 py-4">Last Visit</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <tr key={item} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400 flex items-center justify-center font-bold">
                                                {String.fromCharCode(64 + item)}M
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">Alex Merchant {item}</p>
                                                <p className="text-xs text-slate-500">ID: CUST-829{item}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                        <div className="flex flex-col">
                                            <span>alex.m{item}@example.com</span>
                                            <span className="text-xs text-slate-500">+1 (555) 123-456{item}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                        $1,240.50
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">
                                        2 days ago
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Showing 5 of 2,450 customers</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-sm disabled:opacity-50" disabled>
                            Previous
                        </button>
                        <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
