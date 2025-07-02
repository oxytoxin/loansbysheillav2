import { Link, usePage } from '@inertiajs/react';
import { LucideSearch } from 'lucide-react';

export default function Navbar() {
    const navItems = [
        {
            label: 'HOME',
            href: '/',
        },
        {
            label: 'RATES',
            href: '/rates',
        },
        {
            label: 'CALCULATOR',
            href: '/calculator',
        },
        {
            label: 'LEARN',
            href: '/learn',
        },
        {
            label: 'REVIEWS',
            href: '/reviews',
        },
        {
            label: 'CONTACT',
            href: '/contact',
        },
    ];
    const { url } = usePage();

    return (
        <div className="bg-primary w-full flex justify-between gap-12 px-48 py-4 text-white">
            <ul className="flex items-center justify-center gap-12">
                {navItems.map((item) => (
                    <li className="text-xl tracking-wider" key={item.label}>
                        <Link
                            href={item.href}
                            className={url === item.href ? 'text-secondary pb-1' : 'pb-1 hover:text-secondary duration-300'}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="relative self-stretch flex flex-1 items-center gap-2">
                <input type="text" className="border w-full focus:outline-none border-white rounded-full px-4 py-2" />
                <LucideSearch className="size-6 bg-white rounded-full p-1 absolute right-2 text-primary" />
            </div>
            <ul className="flex items-center gap-8">
                <li>
                    <Link className="whitespace-nowrap hover:bg-secondary bg-white rounded-full px-8 font-bold text-xl py-1 inline-block text-black transition duration-300" href="/">
                        APPLY NOW
                    </Link>
                </li>
                <li>
                    <Link className="whitespace-nowrap hover:bg-secondary bg-white rounded-full px-8 font-bold text-xl py-1 inline-block text-black transition duration-300" href="/">
                        SIGN IN
                    </Link>
                </li>
            </ul>
        </div>
    );
}
