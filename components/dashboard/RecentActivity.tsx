"use client";

export default function RecentActivity() {
    return (
        <div className="space-y-8 font-display">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                    Recent Activity
                </h3>
                <div className="space-y-6">
                    {/* Activity Item 1 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    shopping_cart
                                </span>
                            </div>
                            <div className="w-px h-full bg-slate-100 dark:bg-slate-800 my-1"></div>
                        </div>
                        <div className="pb-6">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                New Sale: Order #2415
                            </p>
                            <p className="text-xs text-slate-500 mb-2">
                                3 items • $42.50 Paid via Stripe
                            </p>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                2 minutes ago
                            </span>
                        </div>
                    </div>
                    {/* Activity Item 2 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    person_add
                                </span>
                            </div>
                            <div className="w-px h-full bg-slate-100 dark:bg-slate-800 my-1"></div>
                        </div>
                        <div className="pb-6">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                New Customer Registered
                            </p>
                            <p className="text-xs text-slate-500 mb-2">
                                Sarah Jenkins joined the loyalty program
                            </p>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                1 hour ago
                            </span>
                        </div>
                    </div>
                    {/* Activity Item 3 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    inventory_2
                                </span>
                            </div>
                            <div className="w-px h-full bg-slate-100 dark:bg-slate-800 my-1"></div>
                        </div>
                        <div className="pb-6">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                Low Stock Alert
                            </p>
                            <p className="text-xs text-slate-500 mb-2">
                                "Wireless Earbuds" is below 10 units
                            </p>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                3 hours ago
                            </span>
                        </div>
                    </div>
                    {/* Activity Item 4 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    update
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                Price Adjusted
                            </p>
                            <p className="text-xs text-slate-500 mb-2">
                                Updated price for "Gaming Chair Red"
                            </p>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">
                                5 hours ago
                            </span>
                        </div>
                    </div>
                </div>
                <button className="w-full mt-8 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    View Activity Feed
                </button>
            </div>
        </div>
    );
}
