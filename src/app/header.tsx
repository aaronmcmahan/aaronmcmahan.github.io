'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Header() {
    const pathName = usePathname()

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Posts', path: '/posts' },
    ]

    return (
        <header className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 pt-16 py-12">
            <figure className="flex-none w-20 h-20 rounded-full overflow-hidden">
                <Link href="/">
                    <img src="/images/profile.png" alt="profile picture" />
                </Link>
            </figure>
            <div className="flex flex-col gap-5">
                <Link href="/">
                    <h1 className="text-center sm:text-left text-4xl font-extrabold text-gray-800 ">Aaron McMahan</h1>
                </Link>
                <nav>
                    <ul className="flex uppercase text-xs font-semibold gap-7 text-gray-500 ">
                        {navLinks.map((link) => (
                            <li key={link.title} className="hover:text-gray-500">
                                <Link href={link.path} className={pathName === link.path ? "text-gray-900" : ""}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}