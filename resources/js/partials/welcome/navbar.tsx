import {Link, usePage} from '@inertiajs/react';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {MenuIcon} from "lucide-react";

export default function Navbar() {
    const navItems = [
        {
            label: 'HOME',
            href: '/',
            type: 'inertia'
        },
        {
            label: 'RATES',
            href: 'https://www.loanfactory.com/today-rates',
            target: '_blank'
        },
        {
            label: 'CALCULATOR',
            href: '/#calculator',
        },
        {
            label: 'LEARN',
            href: '/#articles',
        },
        {
            label: 'REVIEWS',
            href: '/#reviews',
        },
        {
            label: 'CONTACT',
            href: '/#contact',
        },
    ];
    const {url} = usePage();

    return (
        <div className="bg-primary flex w-full justify-between md:px-32 px-2 py-4 text-white">
            <Popover className="lg:hidden">
                <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
                    <MenuIcon className="size-6"/>
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor="bottom"
                    className="divide-y z-10 divide-white/5 rounded-xl bg-primary p-8 border-white border-4 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                >
                    <ul className="items-center flex-col lg:flex-row justify-center gap-8">
                        {navItems.map((item) => (
                            <li className="text-lg tracking-wider" key={item.label}>
                                {item.type === 'inertia' ?
                                    <Link href={item.href}
                                          className={url === item.href ? 'text-secondary pb-1' : 'hover:text-secondary pb-1 duration-300'}>
                                        {item.label}
                                    </Link>
                                    :
                                    <a href={item.href}
                                       target={item.target ?? '_self'}
                                       className={url === item.href ? 'text-secondary pb-1' : 'hover:text-secondary pb-1 duration-300'}
                                    >
                                        {item.label}
                                    </a>
                                }
                            </li>
                        ))}
                    </ul>
                </PopoverPanel>
            </Popover>
            <ul className="hidden lg:flex items-center flex-col lg:flex-row justify-center gap-8">
                {navItems.map((item) => (
                    <li className="text-lg tracking-wider" key={item.label}>
                        {item.type === 'inertia' ?
                            <Link href={item.href}
                                  className={url === item.href ? 'text-secondary pb-1' : 'hover:text-secondary pb-1 duration-300'}>
                                {item.label}
                            </Link>
                            :
                            <a href={item.href}
                               target={item.target ?? '_self'}
                               className={url === item.href ? 'text-secondary pb-1' : 'hover:text-secondary pb-1 duration-300'}
                            >
                                {item.label}
                            </a>
                        }
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center gap-4 md:gap-12">
                <li>
                    <a
                        target="_blank"
                        className="hover:bg-secondary inline-block rounded-full bg-white px-8 py-1 text-xl font-bold whitespace-nowrap text-black transition duration-300"
                        href="https://loanfactory.my1003app.com/1399453/register"
                    >
                        APPLY NOW
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        className="hover:bg-secondary inline-block rounded-full bg-white px-8 py-1 text-xl font-bold whitespace-nowrap text-black transition duration-300"
                        href="https://www.loanfactory.com/sheilla/login"
                    >
                        SIGN IN
                    </a>
                </li>
            </ul>
        </div>
    );
}

