import { Link, usePage } from '@inertiajs/react';

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
        <div className="bg-primary absolute -top-7 z-10 flex justify-between gap-56 rounded-2xl px-6 py-4 text-white">
            <ul className="flex items-center justify-center gap-12">
                {navItems.map((item) => (
                    <li className="text-xl tracking-wider" key={item.label}>
                        <Link
                            href={item.href}
                            className={url === item.href ? 'border-b-[1.5px] border-white pb-1' : 'pb-1 hover:border-b-[1.5px] hover:border-white'}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-2">
                <li>
                    <Link className="bg-secondary hover:bg-accent rounded-full px-4 py-2 text-black transition duration-300" href="/">
                        APPLY NOW
                    </Link>
                </li>
                <li>
                    <Link className="rounded-full bg-[#C1FF72] px-4 py-2 text-black transition duration-300 hover:bg-[#F4F5F8]" href="/">
                        SIGN IN
                    </Link>
                </li>
            </ul>
        </div>
    );
}
