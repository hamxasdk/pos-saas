"use client";

import Link from "next/link";

export default function TopProducts() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-display">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Top Selling Products
                </h3>
                <Link
                    href="#"
                    className="text-sm font-bold text-primary hover:underline"
                >
                    View All
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                        <tr>
                            <th className="px-6 py-3">Product Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Units Sold</th>
                            <th className="px-6 py-3 text-right">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlWqcKV2odvECc6HATe9uDMxrVO4-f15WhmjwVEDpko3_zT30--bl3UVXtyQ1aZK77LR-aus1d1ArMedwhyAuhd40Ldii5U15eYJpoUoj7pbAoDgQuZM7ZbuvhoFlossvwAmeqJPnh3NmUTobwus8f1gfXCTDKbnDr8ciG8e_AZjWmI4sVjBztSukP3ziYo5qBTchLTnjnCsVjnISR4iJWIbePqspr3qfcqTtD2xHWYqDLqeoG5WRidTc5VTjTi-kWzOXfwkEIE924')",
                                        }}
                                    ></div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                                        AeroRunner Pro V2
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                Footwear
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">$129.00</td>
                            <td className="px-6 py-4 text-sm">482</td>
                            <td className="px-6 py-4 text-sm font-bold text-right">
                                $62,178.00
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKKbL152iZV7VjU3EM7QB3axbDXBcwXIEHhjswIu2W48rHmMoP5n42GuyF9E_EFyjNRcfdwU9c1o7kqnP04kfQ7l2xviMoeBvSnToX48QK0yAPdr_yVLdfXpeRDN_ht8gArp_JUo0LYXaE8JpkHEBYJQAxatnzmK22UMS9MX_KSIPO5i5eislxyWtvL_tPviQfAC2LG64rD93Cq-p_gGkun_8_Z5tMfda0ed66rgw-sp0TiJ4bOYDXg20MNQvgLl40r2kH2MWyXgCg')",
                                        }}
                                    ></div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                                        Minimalist Classic Watch
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                Accessories
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">$85.00</td>
                            <td className="px-6 py-4 text-sm">312</td>
                            <td className="px-6 py-4 text-sm font-bold text-right">
                                $26,520.00
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCL1JPNBM86aNCy6Eaejdb4-y-ezeDwVS-CstiRg8tqlrJ8mnB0kBuRpLAW_3c4Est2KwIp7W6qwMrBcx8Y3yv5pGPjAF79xImgRnQPJnceXOBGiAFhgehdeXL14bBzwAgONhpuTn6MAtiAeM3mcmCYYKhb1G-i_8E1bBnsS3v30eeOAb3Z7klVDJCeWZqGEhb8tfvetwtNj77xL7CmmoRw2xMeaGUB4m8u1YkxM2_GI0l-pzMRCTCCyh9MfWSRo22BoJ3C1jmQx8tr')",
                                        }}
                                    ></div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                                        Over-Ear ANC Headphones
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                Electronics
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">$249.00</td>
                            <td className="px-6 py-4 text-sm">124</td>
                            <td className="px-6 py-4 text-sm font-bold text-right">
                                $30,876.00
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
