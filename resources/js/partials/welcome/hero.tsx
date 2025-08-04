import {Link} from '@inertiajs/react';
import {RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill} from '@remixicon/react';
import Navbar from './navbar';

export default function Hero() {
    return (
        <>
            <Navbar/>
            <div className="relative flex flex-col items-center">
                <div className="w-full">
                    <img
                        className="max-h-[44rem] w-full object-cover"
                        src="https://images.pexels.com/photos/24551050/pexels-photo-24551050/free-photo-of-scandinavian-house-in-efrem-sweden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="home"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <img src="/images/sl-3.png" alt=""
                     className="pointer-events-none absolute right-0 bottom-0 h-[115%] w-auto"/>

                <div className="absolute top-24 left-32 z-10 flex flex-col justify-center">
                    <div className="text-[8rem] leading-none font-extrabold text-white">
                        <h2>Find Your</h2>
                        <h2>Perfect</h2>
                        <h2>Mortgage!</h2>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-12 z-10 flex gap-12">
                    <ul className="flex flex-1 items-center justify-stretch gap-12 pl-32 text-xl font-semibold">
                        <Link
                            className="bg-secondary hover:bg-accent text-primary w-full rounded-full px-8 py-4 text-center text-2xl font-bold transition duration-300"
                            href="/"
                        >
                            Request a Quote
                        </Link>
                        <a
                            target="_blank"
                            className="bg-secondary hover:bg-accent text-primary w-full rounded-full px-8 py-4 text-center text-2xl font-bold transition duration-300"
                            href='https://loanfactory.my1003app.com/1399453/register'
                        >
                            Ready to Apply
                        </a>
                    </ul>
                    <div className="bg-primary/90 flex flex-1 gap-8 rounded-l-full px-20 py-6 text-xs text-white">
                        <div className="flex flex-col items-center text-center">
                            <p>WITH OVER</p>
                            <p className="text-secondary text-2xl font-semibold">21</p>
                            <p>YEARS OF EXPERIENCE</p>
                            <p>IN THE LOAN INDUSTRY</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <p>HELPED OVER</p>
                            <p className="text-secondary text-2xl font-semibold">2,100</p>
                            <p>FAMILIES FINANCE</p>
                            <p>THEIR HOMES</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <p>WITH OVER</p>
                            <p className="text-secondary text-2xl font-semibold">157</p>
                            <p>REVIEWS FROM GOOGLE,</p>
                            <p>ZILLOW & EXPERIENCE</p>
                        </div>
                        <div className="ml-8 flex flex-col items-center text-center">
                            <p>FOLLOW US ON</p>
                            <div className="text-primary mt-2 flex gap-2">
                                <Link href="/"
                                      className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiFacebookFill className="size-6"/>
                                </Link>
                                <Link href="/"
                                      className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiInstagramFill className="size-6"/>
                                </Link>
                                <Link href="/"
                                      className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiLinkedinFill className="size-6"/>
                                </Link>
                                <Link href="/"
                                      className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiYoutubeFill className="size-6"/>
                                </Link>
                                <Link href="/"
                                      className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiTiktokFill className="size-6"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
