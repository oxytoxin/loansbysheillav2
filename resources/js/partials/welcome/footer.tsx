import {
    RiPhoneLine,
    RiMailLine,
    RiMapPinLine,
    RiFacebookFill,
    RiInstagramFill,
    RiLinkedinFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiLock2Fill
} from '@remixicon/react';

export default function Footer() {
    return (
        <footer className="bg-[#35363d] text-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-3 gap-16">
                    {/* Contact Us */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#b6ff3b] mb-2 text-2xl font-semibold">Contact Us</h3>
                        <div className="font-semibold">SHEILLA LAVADIA</div>
                        <div>with Loans by Sheilla, LLC.<br />NMLS #1399453</div>
                        <div className="flex items-center gap-2 mt-2">
                            <RiPhoneLine className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" />
                            <span>(425) 900 6082 #101</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiMailLine className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" />
                            <span>info@loansbysheilla.com</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <a href="#" className="flex items-center gap-2">
                                <RiFacebookFill className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" /> Facebook
                            </a>
                            <a href="#" className="flex items-center gap-2">
                                <RiInstagramFill className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" /> Instagram
                            </a>
                            <a href="#" className="flex items-center gap-2">
                                <RiLinkedinFill className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" /> LinkedIn
                            </a>
                            <a href="#" className="flex items-center gap-2">
                                <RiYoutubeFill className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" /> YouTube
                            </a>
                            <a href="#" className="flex items-center gap-2">
                                <RiTiktokFill className="size-8 px-1 rounded-lg bg-accent text-[#35363d]" /> TikTok
                            </a>
                        </div>
                    </div>

                    {/* Location & Licensing */}
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#b6ff3b] mb-2 text-2xl font-semibold">Location</h3>
                            <div className="flex items-center gap-2">
                                <RiMapPinLine className="text-[#b6ff3b] w-6 h-6" />
                                <span>14205 SE 36th St, STE 112,<br />Bellevue WA 98006</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#b6ff3b] mb-2 text-2xl font-semibold">Licensed In</h3>
                            <div className="text-center">AR, AZ, CA, FL, OR, TX, and WA</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#b6ff3b] mb-2 text-2xl font-semibold">Mortgage</h3>
                            <a href="#" className="hover:text-[#b6ff3b]">Services</a>
                            <a href="#" className="hover:text-[#b6ff3b]">Learning Center</a>
                            <a href="#" className="hover:text-[#b6ff3b]">Mortgage Calculator</a>
                            <a href="#" className="hover:text-[#b6ff3b]">Privacy Policy</a>
                            <a href="#" className="hover:text-[#b6ff3b]">Terms of Service</a>
                            <a href="#" className="hover:text-[#b6ff3b]">Texas Compliant Notice</a>
                        </div>
                    </div>

                    {/* Logo & SSL */}
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/images/logo.png" alt="Loans By Sheilla" className="h-16 w-auto" />
                            <img src="/images/equal-housing.png" alt="Equal Housing Lender" className="h-16 w-auto" />
                        </div>
                        <div className="flex items-center gap-2 rounded-md bg-[#b6ff3b] px-4 py-2">
                            <RiLock2Fill className="text-[#35363d] h-5 w-5" />
                            <span className="text-[#35363d] font-semibold">SSL Secured</span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center text-lg font-semibold">© 2024 - 2025 Loans By Sheilla, LLC.</div>
            </div>
        </footer>
    );
}
