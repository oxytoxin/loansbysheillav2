export default function MortgageProcess() {
    const steps = [
        'CHECK THE RATES ON OUR WEBSITE.',
        'COMPLETE THE LOAN APPLICATION AND GET PRE-APPROVED.',
        'LOCK IN THE INTEREST RATE AND COST.',
        'ORDER APPRAISAL REPORT.',
        'PROCESSING YOUR LOAN.',
        'SIGNING THE LOAN DOCUMENTS.',
    ];

    return (
        <div className="bg-card relative z-10 mx-auto my-32 flex max-w-10/12 flex-col gap-16 rounded-lg p-16">
            <h2 className="heading">Our Mortgage Process</h2>
            <div className="flex items-stretch justify-between gap-8">
                <div className="flex-3/5 p-12">
                    <div className="relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-center gap-4 pb-12">
                                <div className="relative flex-shrink-0">
                                    <div className="bg-primary z-10 h-4 w-4 rounded-full"></div>
                                    {index !== steps.length - 1 && (
                                        <div className="bg-primary absolute top-4 left-1/2 h-[calc(100%+3.5rem)] w-0.5 -translate-x-1/2"></div>
                                    )}
                                </div>
                                <div className="text-2xl font-medium">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-2/5">
                    <img src="/images/process.png" alt="Mortgage Process" className="h-full rounded-lg object-cover object-right shadow-lg" />
                </div>
            </div>
        </div>
    );
}
