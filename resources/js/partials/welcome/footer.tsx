import {
    RiPhoneLine,
    RiMailLine,
    RiFacebookFill,
    RiInstagramFill,
    RiLinkedinFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiLock2Fill
} from '@remixicon/react';

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-3 gap-16">
                    {/* Contact Us & Licensing */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-secondary mb-2 text-2xl font-semibold">Contact Us</h3>
                        <div>Sheilla Lavadia<br />with Loans by Sheilla, LLC<br />NMLS #1395543<br />Licensed in AR, AZ, CA, FL, ME, OR, TX, and WA</div>
                        <div className="my-4">
                            <div>Loan Factory, Inc.</div>
                            <div>NMLS #320841</div>
                        </div>
                        <div>Phone: (425) 900 6082 #101<br />Email: info@loansbysheilla.com<br />Address: 14205 SE 36th St, STE 112 Bellevue, WA 98006</div>
                        <div className="flex gap-2 mt-4">
                            <a href="#"><RiFacebookFill className="size-8 p-1 rounded bg-accent text-gray-700" /></a>
                            <a href="#"><RiInstagramFill className="size-8 p-1 rounded bg-accent text-gray-700" /></a>
                            <a href="#"><RiLinkedinFill className="size-8 p-1 rounded bg-accent text-gray-700" /></a>
                            <a href="#"><RiYoutubeFill className="size-8 p-1 rounded bg-accent text-gray-700" /></a>
                            <a href="#"><RiTiktokFill className="size-8 p-1 rounded bg-accent text-gray-700" /></a>
                        </div>
                    </div>

                    {/* About Links */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-secondary mb-2 text-2xl font-semibold">About</h3>
                        <a href="#" className="hover:text-secondary">Our Services</a>
                        <a href="#" className="hover:text-secondary">Mortgage Rate</a>
                        <a href="#" className="hover:text-secondary">Mortgage Calculator</a>
                        <a href="#" className="hover:text-secondary">Learning Center</a>
                        <a href="#" className="hover:text-secondary">Client Reviews</a>
                        <a href="#" className="hover:text-secondary">Disclosure</a>
                        <a href="#" className="hover:text-secondary">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary">Entity Details</a>
                        <a href="#" className="hover:text-secondary">Terms of Service</a>
                        <a href="#" className="hover:text-secondary">Texas Compliant Notice</a>
                    </div>

                    {/* Logo & SSL */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/images/lbs.png" alt="Loans By Sheilla" className="h-12 w-auto bg-white px-2 rounded" />
                            <img src="/images/equal-housing.png" alt="Equal Housing Lender" className="h-10 w-auto" />
                        </div>
                        <img src="/images/ssl-secure.png" alt="Loans By Sheilla" className="h-12 w-auto" />
                    </div>
                </div>
                <div className="mt-16 text-center text-lg font-semibold">© 2024 - 2025 Loans By Sheilla, LLC</div>
            </div>
        </footer>
    );
}
