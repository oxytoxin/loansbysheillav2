import { Link } from '@inertiajs/react';
import { RiFundsLine, RiHome4Line, RiHome9Line, RiMoneyDollarCircleLine, RiPercentLine } from '@remixicon/react';

export default function HeroSecondary() {
    const items = [
        {
            icon: <RiHome4Line className="size-12" />,
            text: 'Buy a New Home',
            subtext: '(Primary Residence)',
        },
        {
            icon: <RiHome9Line className="size-12" />,
            text: 'Buy a Second Home',
            subtext: null,
        },
        {
            icon: <RiFundsLine className="size-12" />,
            text: 'Investment',
            subtext: '(Rental Property)',
        },
        {
            icon: <RiPercentLine className="size-12" />,
            text: 'Rate-and-Term',
            subtext: 'Refinance',
        },
        {
            icon: <RiMoneyDollarCircleLine className="size-12" />,
            text: 'Cash-Out',
            subtext: 'Refinance',
        },
    ];

    return (
        <div className="bg-card mt-32 p-16">
            <h3 className="text-center text-4xl font-semibold">
                Are You <span className="text-primary">Looking To</span>
            </h3>
            <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-10 text-white">
                {items.map((item, index) => (
                    <Link
                        href="/"
                        preserveScroll={true}
                        key={index}
                        className="hover:text-primary flex min-w-80 shrink-0 flex-col items-center rounded-lg border border-[#074A42] bg-[#265D41] p-8 text-xl duration-300 hover:scale-105 hover:border-[#A6A6A6] hover:bg-[#D9E2E1]"
                    >
                        <div className="my-8">{item.icon}</div>
                        <p>{item.text}</p>
                        {item.subtext && <p>{item.subtext}</p>}
                    </Link>
                ))}
            </div>
        </div>
    );
}
