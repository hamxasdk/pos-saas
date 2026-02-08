"use client";

export default function DailySummary() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 font-display">
            <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Daily Summary
                </h2>
                <p className="text-slate-500">
                    Real-time overview of your store performance for Today, Oct 24.
                </p>
            </div>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">
                        calendar_today
                    </span>
                    <span>This Week</span>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-md shadow-primary/20 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="material-symbols-outlined text-lg">add</span>
                    <span>New Order</span>
                </button>
            </div>
        </div>
    );
}
