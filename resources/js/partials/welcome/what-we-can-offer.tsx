export default function WhatWeCanOffer() {
    return (
        <div className="mt-32">
            <h3 className="text-primary text-center text-4xl">
                What <span className="font-bold">We Can Offer</span>
            </h3>
            <div className="mx-auto mt-12 flex max-w-7xl gap-16 px-32">
                <div className="bg-card w-1/2 rounded-lg border-2 p-4 duration-300 hover:scale-105">
                    <h4 className="text-primary text-center text-2xl font-bold">Dedicated Client Service</h4>
                    <div className="mt-8 px-8 text-center">
                        <p>
                            At <strong>Loans by Sheilla, LLC</strong>,
                        </p>
                        <p>we are committed to providing attentive and responsive service throughout every stage of the loan process.</p>
                        <p className="mt-4">
                            We value clear communication and are available to address any questions, concerns, or feedback you may have.
                        </p>
                    </div>
                </div>
                <div className="bg-card w-1/2 rounded-lg border-2 p-4 duration-300 hover:scale-105">
                    <h4 className="text-primary text-center text-2xl font-bold">Comprehensive Loan Programs</h4>
                    <div className="mt-8 px-8 text-center">
                        <p>
                            We offer a variety of mortgage solutions tailored to your needs, including primary home purchases, second homes,
                            investment properties, rate-and-term refinancing, and cash-out refinancing.
                        </p>
                        <p className="mt-4">We work to match you with the loan option that best aligns with your financial goals and situation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
