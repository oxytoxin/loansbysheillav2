import {Link, usePage} from '@inertiajs/react';

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
            href: '#calculator',
        },
        {
            label: 'LEARN',
            href: '/learn',
        },
        {
            label: 'REVIEWS',
            href: '#reviews',
        },
        {
            label: 'CONTACT',
            href: '/contact',
        },
    ];
    const {url} = usePage();

    return (
        <div className="bg-primary flex w-full justify-between gap-12 px-32 py-4 text-white">
            <ul className="flex items-center justify-center gap-8">
                {navItems.map((item) => (
                    <li className="text-lg tracking-wider" key={item.label}>
                        <Link href={item.href}
                              className={url === item.href ? 'text-secondary pb-1' : 'hover:text-secondary pb-1 duration-300'}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-12">
                <li>
                    <Link
                        className="hover:bg-secondary inline-block rounded-full bg-white px-8 py-1 text-xl font-bold whitespace-nowrap text-black transition duration-300"
                        href="https://loanfactory.my1003app.com/1399453/register"
                    >
                        APPLY NOW
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        className="hover:bg-secondary inline-block rounded-full bg-white px-8 py-1 text-xl font-bold whitespace-nowrap text-black transition duration-300"
                        href="/"
                    >
                        SIGN IN
                    </Link>
                </li>
            </ul>
        </div>
    );
}
