"use client";

import { useState } from "react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Account", "Notifications", "Security", "Billing"];

    return (
        <div className="space-y-6 font-display">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Settings
                </h2>
                <p className="text-sm text-slate-500">
                    Manage your store settings and preferences
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation for Settings */}
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-2">
                        <nav className="space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                            ? "bg-primary/10 text-primary"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {tab === "General" && "settings"}
                                        {tab === "Account" && "person"}
                                        {tab === "Notifications" && "notifications"}
                                        {tab === "Security" && "lock"}
                                        {tab === "Billing" && "credit_card"}
                                    </span>
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                            {activeTab} Settings
                        </h3>

                        {activeTab === "General" && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Store Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="My Awesome Store"
                                            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Currency
                                        </label>
                                        <select className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                            <option>USD ($)</option>
                                            <option>EUR (€)</option>
                                            <option>GBP (£)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Timezone
                                        </label>
                                        <select className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                            <option>UTC-05:00 Eastern Time</option>
                                            <option>UTC-08:00 Pacific Time</option>
                                            <option>UTC+00:00 GMT</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Language
                                        </label>
                                        <select className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                            <option>English</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Address
                                    </label>
                                    <textarea
                                        rows={3}
                                        defaultValue="123 Commerce St, Business City, CA 90210"
                                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === "Account" && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-20 h-20 rounded-full bg-slate-300 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaWtSXQSX4gjHMHLTASfPsPR7-nrzjC-jBkqHc5tVYjhrBkKs_uiEgQxhtwHJ2S4bWFMYrRaFU_gELgYH-B4UjzEMdVpMwMJ5D7N5QmhwJV448umj8YlifyzZQQ896Mw2Si2-i4t-NWmfn6AWh1tPQLozl-PtD3nuOM4Nt3_Un_vOmHgV1d2Ohz0UY_NPl1ZRn8r7fjYT3k0SUqD1tghLQdZotimmfkyP62Fw0uX391OpxsOjNo6Fpkz7gmmBu7SfaSnFUIrXx3_xC')",
                                        }}
                                    ></div>
                                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        Change Photo
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Alex Merchant"
                                            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue="alex.merchant@example.com"
                                            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {(activeTab !== "General" && activeTab !== "Account") && (
                            <div className="text-center py-12">
                                <div className="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-slate-400 text-[32px]">construction</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-medium mb-1">Coming Soon</h4>
                                <p className="text-slate-500 text-sm">This section is currently under development.</p>
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                            <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
