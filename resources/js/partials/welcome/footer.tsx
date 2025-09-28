import {RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiYoutubeFill} from '@remixicon/react';

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-3 gap-16">
                    {/* Contact Us & Licensing */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-secondary mb-2 text-2xl font-semibold">Contact Us</h3>
                        <div>
                            Sheilla Lavadia
                            <br/>
                            with Loans by Sheilla, LLC
                            <br/>
                            NMLS #1395543
                            <br/>
                            Licensed in AR, AZ, CA, FL, ME, OR, TX, and WA
                        </div>
                        <div className="my-4">
                            <div>Loan Factory, Inc.</div>
                            <div>NMLS #320841</div>
                        </div>
                        <div>
                            Phone: (425) 900 6082 #101
                            <br/>
                            Email: info@loansbysheilla.com
                            <br/>
                            Address: 14205 SE 36th St, STE 112 Bellevue, WA 98006
                        </div>
                        <div className="text-gray-700 mt-2 flex gap-2">
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

                    {/* About Links */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-secondary mb-2 text-2xl font-semibold">About</h3>
                        <a href="/#services" className="hover:text-secondary">
                            Our Services
                        </a>
                        <a href="https://www.loanfactory.com/today-rates" className="hover:text-secondary">
                            Mortgage Rate
                        </a>
                        <a href="/#calculator" className="hover:text-secondary">
                            Mortgage Calculator
                        </a>
                        <a href="/#articles" className="hover:text-secondary">
                            Learning Center
                        </a>
                        <a href="/#reviews" className="hover:text-secondary">
                            Client Reviews
                        </a>
                        <a href="https://www.loanfactory.com/disclosure?fbclid=IwY2xjawNFHS9leHRuA2FlbQIxMABicmlkETE1N0tVMDVKd1h1WWtkbFQxAR4OXrZz8gEFfVbGhk9XEVtXe4JwaPg7JL3iTyXiNghF_7Fo5zdOhurnywK-6w_aem_TEGl8rmIUVg3TgvyhGWwsQ"
                           className="hover:text-secondary">
                            Disclosure
                        </a>
                        <a href="https://www.loanfactory.com/privacy?fbclid=IwY2xjawNFHOZleHRuA2FlbQIxMABicmlkETE1N0tVMDVKd1h1WWtkbFQxAR5e2QTvJZwxxq2L0W7lLStLHQuEXJ_vrIk8i1w3bx4rUeooCJH0nA_1sVrrBg_aem_vOiu_IHXWtO6Mo5TfXmMkg"
                           className="hover:text-secondary">
                            Privacy Policy
                        </a>
                        <a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/320841?fbclid=IwY2xjawNFHVJleHRuA2FlbQIxMABicmlkETE1N0tVMDVKd1h1WWtkbFQxAR4OXrZz8gEFfVbGhk9XEVtXe4JwaPg7JL3iTyXiNghF_7Fo5zdOhurnywK-6w_aem_TEGl8rmIUVg3TgvyhGWwsQ"
                           className="hover:text-secondary">
                            Entity Details
                        </a>
                        <a href="https://www.loanfactory.com/terms-and-conditions" className="hover:text-secondary">
                            Terms of Service
                        </a>
                        <a href="https://www.loanfactory.com/sheilla/texas-disclosures"
                           className="hover:text-secondary">
                            Texas Compliant Notice
                        </a>
                    </div>

                    {/* Logo & SSL */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/images/lbs.png" alt="Loans By Sheilla"
                                 className="h-12 w-auto rounded bg-white px-2"/>
                            <img src="/images/equal-housing.png" alt="Equal Housing Lender" className="h-20 w-auto"/>
                        </div>
                        <img src="/images/ssl-secure.png" alt="Loans By Sheilla" className="h-12 w-auto"/>
                    </div>
                </div>
                <div className="mt-16 text-center text-lg font-semibold">© 2024 - 2025 Loans By Sheilla, LLC</div>
            </div>
        </footer>
    );
}
