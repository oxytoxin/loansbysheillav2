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
        <div className="px-16 absolute -top-10 z-10 ">
            <div className="bg-primary w-full flex justify-between gap-32 rounded-full px-12 py-4 text-white">
                <ul className="flex items-center justify-center gap-12">
                    {navItems.map((item) => (
                        <li className="text-2xl tracking-wider" key={item.label}>
                            <Link
                                href={item.href}
                                className={url === item.href ? 'border-b-[1.5px] border-white pb-1' : 'pb-1 hover:border-b-[1.5px] hover:border-white'}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-8">
                    <li>
                        <Link className="bg-secondary hover:bg-accent rounded-full px-20 font-bold text-xl py-3 inline-block text-black transition duration-300" href="/">
                            APPLY NOW
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-full bg-[#C1FF72] px-20 font-bold text-xl py-3 inline-block text-black transition duration-300 hover:bg-[#F4F5F8]" href="/">
                            SIGN IN
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
