"use client";

export default function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-display">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined">payments</span>
                    </div>
                    <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                        +12.5%
                    </span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Total Sales</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    $4,250.00
                </h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg text-emerald-600">
                        <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                        +8.2%
                    </span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Net Profit</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    $1,120.50
                </h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600">
                        <span className="material-symbols-outlined">point_of_sale</span>
                    </div>
                    <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                        +5.4%
                    </span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-1">Transactions</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    84
                </h3>
            </div>
        </div>
    );
}
