import {RiCheckFill} from '@remixicon/react';

export default function WhatWeCanOffer() {
    return (
        <div id='services' className="mt-16">
            <h3 className="heading">What We Can Offer</h3>
            <div className="px-64">
                <div className="flex gap-8">
                    <div className="flex flex-1 flex-col gap-8">
                        <div>
                            <div className="flex items-start gap-2">
                                <div className="bg-primary mt-1 rounded-full text-white">
                                    <RiCheckFill/>
                                </div>
                                <div>
                                    <h4 className="text-primary text-2xl font-bold">Dedicated Client Service</h4>
                                    <div className="mt-4">
                                        <p>
                                            At <strong className="text-primary font-bold">Loans by Sheilla, LLC</strong>,
                                            we are dedicated to
                                            delivering attentive and responsive service at every stage of the loan
                                            process.
                                        </p>
                                        <p></p>
                                        <p className="mt-4">
                                            We value clear communication and are available to address any questions,
                                            concerns, or feedback you may
                                            have.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start gap-2">
                                <div className="bg-primary mt-1 rounded-full text-white">
                                    <RiCheckFill/>
                                </div>
                                <div>
                                    <h4 className="text-primary text-2xl font-bold">Comprehensive Loan Programs</h4>
                                    <div className="mt-4">
                                        <p>
                                            We provide a range of mortgage solutions tailored to your needs, including
                                            financing for
                                            <span className="text-primary font-bold">
                                                &nbsp;primary homes, second homes, investment properties,&nbsp;
                                            </span>
                                            and options for
                                            <span className="text-primary font-bold">&nbsp;rate-and-term&nbsp;</span>
                                            or
                                            <span
                                                className="text-primary font-bold">&nbsp;cash-out refinancing.&nbsp;</span>
                                        </p>
                                        <p className="mt-4">
                                            We work to match you with the loan option that best aligns with your
                                            financial goals and situation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="/images/offer.png" className="h-full rounded-xl object-cover object-center" alt=""/>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h5 className="text-xl">We make sure you're in the right hands.</h5>
                        <h6 className="mt-8 text-xl font-bold">Ready to Apply?</h6>
                        <button
                            className="bg-primary mt-2 self-start rounded-full px-4 py-2 font-bold text-white">Contact
                            Now
                        </button>
                        <img className="mt-8 flex-1 rounded-xl object-cover object-center" src="/images/offer-2.png"
                             alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
