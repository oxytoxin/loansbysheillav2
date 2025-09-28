import {Link} from '@inertiajs/react';
import {RiFundsLine, RiHome4Line, RiHome9Line, RiMoneyDollarCircleLine, RiPercentLine} from '@remixicon/react';
import Staticon from "@/components/staticon";

export default function HeroSecondary({guides}) {
    const items = [
        {
            icon: <RiHome4Line className="size-20"/>,
            text: 'Buy a New Home',
            subtext: '(Primary Residence)',
        },
        {
            icon: <RiHome9Line className="size-20"/>,
            text: 'Buy a Second Home',
            subtext: null,
        },
        {
            icon: <RiFundsLine className="size-20"/>,
            text: 'Investment',
            subtext: '(Rental Property)',
        },
        {
            icon: <RiPercentLine className="size-20"/>,
            text: 'Rate-and-Term',
            subtext: 'Refinance',
        },
        {
            icon: <RiMoneyDollarCircleLine className="size-20"/>,
            text: 'Cash-Out',
            subtext: 'Refinance',
        },
    ];

    return (
        <div className="bg-card mt-32 p-16">
            <h3 className="heading">
                Are You Looking To
            </h3>
            <div className="mx-auto mt-20 flex max-w-7xl flex-wrap justify-center gap-16 text-white">
                {guides.map((item, index) => (
                    <Link
                        href={item.url}
                        preserveScroll={true}
                        key={index}
                        className="hover:text-primary flex min-w-96 shrink-0 flex-col items-center rounded-lg border border-[#074A42] bg-[#265D41] p-8 text-2xl duration-300 hover:scale-105 hover:border-[#A6A6A6] hover:bg-[#D9E2E1]"
                    >
                        <Staticon size={60} icon={item.icon}/>
                        <p className='mt-4 text-center' dangerouslySetInnerHTML={{__html: item.heading}}></p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
