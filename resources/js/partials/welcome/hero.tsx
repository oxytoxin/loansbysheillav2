import { Link } from '@inertiajs/react';
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill } from '@remixicon/react';
import Navbar from './navbar';

export default function Hero() {
    return (
        <div className="relative mx-12 mt-12 flex flex-col items-center">
            <div className="w-full">
                <img
                    className="max-h-[44rem] w-full rounded-4xl object-cover"
                    src="https://images.pexels.com/photos/24551050/pexels-photo-24551050/free-photo-of-scandinavian-house-in-efrem-sweden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="home"
                />
                <div className="absolute inset-0 rounded-4xl bg-black opacity-50"></div>
            </div>
            <Navbar />
            <div className="absolute top-32 left-8 z-10 flex flex-col justify-center">
                <div className="text-[6rem] leading-none font-extrabold text-white">
                    <h2>Find Your</h2>
                    <h2>Perfect</h2>
                    <h2>Mortgage!</h2>
                </div>
                <ul className="mt-12 flex items-center gap-12 text-xl font-semibold">
                    <li>
                        <Link className="bg-secondary hover:bg-accent rounded-full px-16 py-4 text-2xl font-bold text-black transition duration-300" href="/">
                            Request a Quote
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-full bg-[#C1FF72] px-16 py-4 text-2xl font-bold text-black transition duration-300 hover:bg-[#F4F5F8]" href="/">
                            Ready to Apply
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-primary absolute right-0 bottom-0 z-10 flex gap-8 rounded-4xl px-20 py-6  text-white">
                <div className="flex flex-col items-center">
                    <p>WITH OVER</p>
                    <p className="text-secondary text-2xl font-semibold">21</p>
                    <p>YEARS OF EXPERIENCE</p>
                    <p>IN THE LOAN INDUSTRY</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>HELPED OVER</p>
                    <p className="text-secondary text-2xl font-semibold">2,100</p>
                    <p>FAMILIES FINANCE</p>
                    <p>THEIR HOMES</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>WITH OVER</p>
                    <p className="text-secondary text-2xl font-semibold">157</p>
                    <p>REVIEWS FROM GOOGLE,</p>
                    <p>ZILLOW & EXPERIENCE</p>
                </div>
                <div className="ml-8 flex flex-col items-center">
                    <p>FOLLOW US ON</p>
                    <div className="text-primary mt-2 flex gap-2">
                        <Link href="/" className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                            <RiFacebookFill className="size-6" />
                        </Link>
                        <Link href="/" className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                            <RiInstagramFill className="size-6" />
                        </Link>
                        <Link href="/" className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                            <RiLinkedinFill className="size-6" />
                        </Link>
                        <Link href="/" className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                            <RiYoutubeFill className="size-6" />
                        </Link>
                        <Link href="/" className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                            <RiTiktokFill className="size-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
