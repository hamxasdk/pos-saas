"use client";

import ThemeToggle from "../ThemeToggle";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function Header() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 font-display">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        search
                    </span>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-400 outline-none"
                        placeholder="Search for orders, products, or customers..."
                        type="text"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">help</span>
                </button>

                {/* User Info & Logout */}
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-slate-700">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            {user?.name || "User"}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {user?.email || ""}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors cursor-pointer"
                        title="Logout"
                    >
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
