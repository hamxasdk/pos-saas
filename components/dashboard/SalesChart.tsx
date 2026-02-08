"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Mon", value: 4000 },
    { name: "Tue", value: 3000 },
    { name: "Wed", value: 5000 },
    { name: "Thu", value: 2780 },
    { name: "Fri", value: 1890 },
    { name: "Sat", value: 2390 },
    { name: "Sun", value: 3490 },
];

export default function SalesChart() {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm font-display">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Sales Performance
                    </h3>
                    <p className="text-xs text-slate-500">
                        Revenue tracking over the last 7 days
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                            Net Sales
                        </span>
                    </div>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">
                        <span className="material-symbols-outlined text-slate-400">
                            more_horiz
                        </span>
                    </button>
                </div>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#136dec" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#136dec" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e2e8f0"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                            }}
                            itemStyle={{ color: "#1e293b", fontWeight: 600 }}
                            labelStyle={{ color: "#64748b", marginBottom: "4px" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#136dec"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
