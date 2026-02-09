"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth-schemas";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailOrUsername: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        // Mock API call - replace with actual authentication logic
        console.log("Login data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Extract name from email (temporary until we have real user data)
        const name = data.emailOrUsername.split("@")[0] || data.emailOrUsername;

        // Login user and redirect to dashboard
        login(data.emailOrUsername, name);
        router.push("/dashboard");
    };

    return (
        <div className="flex min-h-screen w-full flex-col lg:flex-row font-display bg-background-light dark:bg-background-dark text-foreground">
            {/* Left Side: Hero Image (Hidden on small screens) */}
            <div className="relative hidden w-full lg:flex lg:w-[55%] xl:w-[60%] overflow-hidden bg-[#111418]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-black/20"></div>
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn4bFjhPbQWWSdPKv2rwTR-CR1ZPvycJiFNkSWQAdlFrWkM8n5Lan3QEtXQZTYdbix415DNAwzvSAqDHBf0oexg0dExfBQO47WqqrMS3UVP2QT_iJoPBEBWc2l0-VgZEYyyjZNZDQN12_xn8oU--ZDpFpMef1GzVYZwQPydNVz7G4jg-WkVh74ghchG2gIqG8EB5JnBpobo-v-mgbLxWgsDlitNoc1yWvPtfZ0VdXPtLtQ4Wk_gcg3Vz4VSZOQozhksXOstHXOixll')",
                    }}
                ></div>
                <div className="relative z-20 flex h-full w-full flex-col justify-between p-12 text-white">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-2xl">
                                point_of_sale
                            </span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            RetailPOS SaaS
                        </span>
                    </div>
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
                            Empower your retail business with precision.
                        </h2>
                        <p className="mt-6 text-lg text-white/80 leading-relaxed">
                            Streamline your operations, manage inventory in real-time, and
                            provide an unparalleled checkout experience for your customers.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="flex -space-x-2">
                            <div
                                className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5keDlCXzbGp2rQOwohaWc7mslLf13DQPDGPmIqjyJOdbyYibPRdP84t9SgrCdtkmanTnXZQtdgnxEEYOJwMnzscZagvFDnsFXA_psh_YLDCRnTEUFN_Dw5UT0GXovK5ma8YjS3WlM1rbw1zQJSEDliJCUEVaRr3RbC-gLx1qVLUSr_JEf-VS8dB1owIitTnTli5h9d37RwIcvVUNDc5vDiHEbK6kGZ95t73es58QmBd18tGcLOwxOTr2RXxHiUInW2yQB_leBQ3L6')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div
                                className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-qRt0ACCm1cR6rnvafchiTroBPcIRvA2_-RiDW2gRfyyf3ppp4a_6nDEKrvr9WKP8QDc-UJiM00CeVzvl1R-c8fEgYkie1Hvi9FQo3cQMZ71J6YkHZ5hEXJIMh2p1YrS5sIwuyzVu01eI6zGfxDaOYTbd9YwJZjmiZx9poPBN4Baskcr2q7kFMHrTTq4CqaOyJ46MojdKvkcdqBg_oed3TAU8RhmQfLO6UnWTeZeyx3niR1pxqXSsNtUv7KF2B7cqmZTIj_kGBNld')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div
                                className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGn_1igSjXJ0D0virUF5mIJKEFVzakd0-iKwBrCSWA9EHrmv2or-5qd3AWnFktLREOhv-ESVgRAvjxt2w6kuOjNy7N0hWtp088asMTHUuV_PcOpy7lMclFR_Hum4mumrePwx-sOQE_7eFd-xUJ4v46x0RUSa9BQdqN6WQrj9ZLaLG46lUCnjzp9CtCAIlXhtiic-4sHhqK95FeqoyODhaZhOFFqEbRAtf50mdryBLm3zZ-yxlsCjiXWnrD9HZqiT_1RJxZAtmZ5MkX')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                        </div>
                        <span>Joined by 10,000+ store owners globally</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex w-full flex-col bg-white px-6 py-10 dark:bg-background-dark lg:w-[45%] xl:w-[40%] lg:px-16 lg:py-12 justify-center">
                <div className="mx-auto w-full max-w-[420px]">
                    {/* Mobile Header */}
                    <div className="mb-10 flex items-center gap-2 lg:hidden">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-2xl">
                                point_of_sale
                            </span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">
                            RetailPOS
                        </span>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">
                            Welcome Back
                        </h1>
                        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                            Enter your credentials to access your store dashboard
                        </p>
                    </div>

                    {/* SSO Section */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 px-4 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-background-dark dark:text-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                ></path>
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                ></path>
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                    fill="#FBBC05"
                                ></path>
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                ></path>
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 px-4 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-background-dark dark:text-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 23 23"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
                                    fill="#f25022"
                                ></path>
                            </svg>
                            Microsoft
                        </button>
                    </div>

                    <div className="relative mb-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <span className="relative bg-white px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:bg-background-dark">
                            Or continue with email
                        </span>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 mb-2">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. admin@store.com"
                                {...register("emailOrUsername")}
                                className={`block w-full rounded-lg border ${errors.emailOrUsername
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-gray-300 focus:border-primary focus:ring-primary/20"
                                    } px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 dark:border-gray-700 dark:bg-background-dark dark:text-white h-14 transition-all`}
                            />
                            {errors.emailOrUsername && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.emailOrUsername.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 mb-2">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    {...register("password")}
                                    className={`block w-full rounded-lg border ${errors.password
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        : "border-gray-300 focus:border-primary focus:ring-primary/20"
                                        } px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 dark:border-gray-700 dark:bg-background-dark dark:text-white h-14 transition-all pr-12`}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    {...register("rememberMe")}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link
                                    href="#"
                                    className="font-semibold text-primary hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-4 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    {/* Help/Footer */}
                    <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account yet?{" "}
                        <Link
                            href="/register"
                            className="font-semibold leading-6 text-primary hover:underline"
                        >
                            Request a demo
                        </Link>
                    </p>

                    <div className="mt-12 flex justify-center gap-6 text-xs text-gray-400">
                        <Link
                            href="#"
                            className="hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
