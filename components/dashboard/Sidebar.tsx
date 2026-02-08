"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col h-full font-display">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                        storefront
                    </span>
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        SaaS POS
                    </h1>
                    <p className="text-xs text-slate-500 font-medium">Main Branch</p>
                </div>
            </div>
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group"
                >
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="font-semibold text-sm">Dashboard</span>
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">receipt_long</span>
                    <span className="font-medium text-sm">Sales</span>
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span className="font-medium text-sm">Inventory</span>
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">group</span>
                    <span className="font-medium text-sm">Customers</span>
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">bar_chart</span>
                    <span className="font-medium text-sm">Reports</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mb-2"
                >
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-medium text-sm">Settings</span>
                </Link>
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div
                        className="w-10 h-10 rounded-full bg-slate-300 flex-shrink-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaWtSXQSX4gjHMHLTASfPsPR7-nrzjC-jBkqHc5tVYjhrBkKs_uiEgQxhtwHJ2S4bWFMYrRaFU_gELgYH-B4UjzEMdVpMwMJ5D7N5QmhwJV448umj8YlifyzZQQ896Mw2Si2-i4t-NWmfn6AWh1tPQLozl-PtD3nuOM4Nt3_Un_vOmHgV1d2Ohz0UY_NPl1ZRn8r7fjYT3k0SUqD1tghLQdZotimmfkyP62Fw0uX391OpxsOjNo6Fpkz7gmmBu7SfaSnFUIrXx3_xC')",
                        }}
                    ></div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                            Alex Merchant
                        </p>
                        <p className="text-xs text-slate-500 truncate">Store Owner</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
