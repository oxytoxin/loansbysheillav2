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
        <div className="bg-card relative z-10 mx-auto my-32 flex max-w-7xl flex-col gap-16 rounded-lg p-16">
            <h2 className="text-primary text-center text-5xl">
                Our <span className="font-bold">Mortgage Process</span>
            </h2>
            <div className="flex items-center justify-between gap-8">
                <div className="flex-3/5">
                    <div className="relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-center gap-4 pb-8">
                                <div className="relative flex-shrink-0">
                                    <div className="bg-primary z-10 h-4 w-4 rounded-full"></div>
                                    {index !== steps.length - 1 && (
                                        <div className="bg-primary absolute top-4 left-1/2 h-[calc(100%+2.5rem)] w-0.5 -translate-x-1/2"></div>
                                    )}
                                </div>
                                <div className="text-xl font-medium">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-2/5">
                    <img
                        src="https://images.pexels.com/photos/20345064/pexels-photo-20345064/free-photo-of-man-giving-woman-keys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Mortgage Process"
                        className="h-auto w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
