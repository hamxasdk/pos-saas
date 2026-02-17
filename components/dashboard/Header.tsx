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
        <header className="h-16 mt-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10 font-display transition-colors duration-200">
            {/* Left: Search */}
            <div className="flex gap-4">
            <div className="flex-1 max-w-xl pr-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 pl-10 pr-4 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center justify-end gap-3 md:gap-4 shrink-0">
                <ThemeToggle />

                {/* Notifications */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative cursor-pointer">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                </button>

                {/* Help */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">help</span>
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                            {user?.name || "User"}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                            {user?.email || ""}
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                        title="Logout"
                    >
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </div>
            </div>
        </header>
    );
}
