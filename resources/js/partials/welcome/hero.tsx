import {RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill} from '@remixicon/react';

export default function Hero() {
    return (
        <>
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
                     className="pointer-events-none hidden right-0 lg:block absolute bottom-0 h-[115%] w-auto"/>

                <div className="absolute md:top-24 top-12 md:left-32 z-10 flex flex-col justify-center">
                    <div className="2xl:text-[8rem] lg:text-[7rem] text-5xl md:text-[5rem] leading-none font-extrabold text-white">
                        <h2>Find Your</h2>
                        <h2>Perfect</h2>
                        <h2>Mortgage!</h2>
                    </div>
                </div>

                <div className="lg:absolute w-full inset-x-0 bottom-12 z-10 md:-mt-34 flex flex-col xl:flex-row gap-12">
                    <ul className="flex flex-1 px-4 sm:px-32 items-center justify-stretch gap-12 lg:pr-0 lg:pl-32 mt-6 z-20 text-xl font-semibold">
                        <a
                            target="_blank"
                            className="bg-secondary md:text-lg text-sm hover:bg-accent text-primary w-full rounded-full px-8 py-4 text-center 2xl:text-2xl font-bold transition duration-300"
                            href="https://www.loanfactory.com/sheilla/"
                        >
                            Request a Quote
                        </a>
                        <a
                            target="_blank"
                            className="bg-secondary hover:bg-accent md:text-lg text-sm text-primary w-full rounded-full px-8 py-4 text-center 2xl:text-2xl font-bold transition duration-300"
                            href='https://loanfactory.my1003app.com/1399453/register'
                        >
                            Ready to Apply
                        </a>
                    </ul>
                    <div className="bg-primary/90 flex flex-col xl:flex-row items-center flex-1 gap-8 xl:rounded-l-full -mt-36 md:mt-0 px-20 py-6 text-xs text-white">
                        <div className="flex gap-8 mt-24 md:mt-4 xl:mt-0">
                            <div className="flex flex-col items-center text-center">
                                <p>WITH <br className="2xl:hidden hidden lg:block"/> OVER</p>
                                <p className="text-secondary text-2xl font-semibold">21</p>
                                <p>YEARS OF EXPERIENCE</p>
                                <p>IN THE LOAN INDUSTRY</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <p>HELPED <br className="2xl:hidden hidden lg:block"/> OVER</p>
                                <p className="text-secondary text-2xl font-semibold">2,100</p>
                                <p>FAMILIES FINANCE</p>
                                <p>THEIR HOMES</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <p>WITH <br className="2xl:hidden hidden lg:block"/> OVER</p>
                                <p className="text-secondary text-2xl font-semibold">157</p>
                                <p>REVIEWS FROM GOOGLE,</p>
                                <p>ZILLOW & EXPERIENCE</p>
                            </div>
                        </div>
                        <div className="ml-8 flex flex-col items-center text-center">
                            <p>FOLLOW US ON</p>
                            <div className="text-primary mt-2 flex gap-2">
                                <a href="https://www.facebook.com/Loansbysheilla"
                                   target="_blank"
                                   className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiFacebookFill className="size-6"/>
                                </a>
                                <a href="https://www.instagram.com/loansbysheilla"
                                   target="_blank"
                                   className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiInstagramFill className="size-6"/>
                                </a>
                                <a href="https://www.linkedin.com/in/sheillalavadia/"
                                   target="_blank"
                                   className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiLinkedinFill className="size-6"/>
                                </a>
                                <a href="https://www.youtube.com/@loansbysheilla"
                                   target="_blank"
                                   className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiYoutubeFill className="size-6"/>
                                </a>
                                <a href="https://www.tiktok.com/@moneytalkwithsheilla"
                                   target="_blank"
                                   className="hover:bg-card inline-flex items-center justify-center rounded bg-white p-2">
                                    <RiTiktokFill className="size-6"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
