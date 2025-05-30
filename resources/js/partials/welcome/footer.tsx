export default function Footer() {
    return (
        <footer className="bg-[#35363d] text-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-3 gap-16">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex flex-col items-center">
                                <h3 className="text-secondary mb-2 text-xl">ABOUT</h3>
                                <div className="flex flex-col items-center gap-2">
                                    <p>SHEILLA LAVADIA</p>
                                    <p>NMLS #1399453</p>
                                    <p>MORTGAGE LOAN ORIGINATOR</p>
                                    <a href="#" className="hover:text-secondary">
                                        NMLS CONSUMER ACCESS
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-secondary mb-2 text-xl">STATE LICENSES</h3>
                                <p>AZ, AR, CA, FL, ME, OR, TX, & WA</p>
                            </div>
                            <div>
                                <h3 className="text-secondary mb-4 text-xl">SOCIAL MEDIA</h3>
                                <div className="flex flex-col items-center gap-1">
                                    <a href="#" target="_blank" className="hover:text-secondary">
                                        FACEBOOK
                                    </a>
                                    <a href="#" target="_blank" className="hover:text-secondary">
                                        INSTAGRAM
                                    </a>
                                    <a href="#" target="_blank" className="hover:text-secondary">
                                        LINKEDIN
                                    </a>
                                    <a href="#" target="_blank" className="hover:text-secondary">
                                        YOUTUBE
                                    </a>
                                    <a href="#" target="_blank" className="hover:text-secondary">
                                        TIKTOK
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-secondary mb-2 text-xl">CONTACT</h3>
                            <div className="flex flex-col items-center gap-2">
                                <a href="tel:+14259006082" className="hover:text-secondary">
                                    (425) 900 6082 #101
                                </a>
                                <a href="mailto:INFO@LOANSBYSHEILLA.COM" className="hover:text-secondary uppercase">
                                    Info@LoansBySheilla.com
                                </a>
                                <p>14205 SE 36TH ST, STE 112,</p>
                                <p>BELLEVUE WA 98006</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-secondary mb-2 text-xl">MORTGAGE</h3>
                            <div className="flex flex-col items-center gap-2">
                                <a href="#" className="hover:text-secondary">
                                    MORTGAGE RATES
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    MORTGAGE CALCULATOR
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    LEARNING CENTER
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    SERVICES
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    PRIVACY POLICY
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    TERMS OF SERVICE
                                </a>
                                <a href="#" className="hover:text-secondary">
                                    TEXAS COMPLIANT NOTICE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/images/logo.png" alt="Loans By Sheilla" className="h-16 w-auto" />
                            <img src="/images/equal-housing.png" alt="Equal Housing Lender" className="h-16 w-auto" />
                        </div>
                        <div className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2">
                            <LockIcon className="text-secondary h-5 w-5" />
                            <span className="text-secondary">SSL Secured</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center text-sm text-gray-400">© 2024 - 2025 LOANS BY SHEILLA, LLC.</div>
            </div>
        </footer>
    );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4z"
            />
        </svg>
    );
}
