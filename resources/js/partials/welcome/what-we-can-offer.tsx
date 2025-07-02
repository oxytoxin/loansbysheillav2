import { RiCheckFill } from "@remixicon/react";

export default function WhatWeCanOffer() {
    return (
        <div className="mt-16">
            <h3 className="heading">
                What We Can Offer
            </h3>
            <div className="px-64">
                <div className="flex gap-8">
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <div className="flex items-start gap-2">
                                <div className="bg-primary mt-1 text-white rounded-full">
                                    <RiCheckFill />
                                </div>
                                <div>
                                    <h4 className="text-primary text-2xl font-bold">Dedicated Client Service</h4>
                                    <div className="mt-4">
                                        <p>
                                            At <strong className="font-bold text-primary">Loans by Sheilla, LLC</strong>, we are dedicated to
                                            delivering attentive and responsive service at every
                                            stage of the loan process.
                                        </p>
                                        <p></p>
                                        <p className="mt-4">
                                            We value clear communication and are available to address any questions, concerns, or feedback you may have.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start gap-2">
                                <div className="bg-primary mt-1 text-white rounded-full">
                                    <RiCheckFill />
                                </div>
                                <div>
                                    <h4 className="text-primary text-2xl font-bold">Comprehensive Loan Programs</h4>
                                    <div className="mt-4">
                                        <p>
                                            We provide a range of mortgage solutions tailored
                                            to your needs, including financing for
                                            <span className="font-bold text-primary">
                                                &nbsp;primary homes, second homes, investment properties,&nbsp;
                                            </span>
                                            and options for
                                            <span className="font-bold text-primary">
                                                &nbsp;rate-and-term&nbsp;
                                            </span>
                                            or
                                            <span className="font-bold text-primary">
                                                &nbsp;cash-out refinancing.&nbsp;
                                            </span>
                                        </p>
                                        <p className="mt-4">We work to match you with the loan option that best aligns with your financial goals and situation.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="/images/offer.png" className="h-full rounded-xl object-cover object-center" alt="" />
                    </div>
                    <div className="flex-1">
                        <h5>We make sure you're in the right hands.</h5>
                        <h6 className="text-xl font-bold mt-8">Ready to Apply?</h6>
                        <button className="bg-primary text-white px-4 py-2 font-bold rounded-full mt-2">Contact Now</button>
                        <img className="rounded-xl object-cover object-center mt-8" src="/images/offer-2.png" alt="" />
                    </div>
                </div>

            </div>


        </div>
    );
}
