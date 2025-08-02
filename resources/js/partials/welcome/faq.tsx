import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'What is Loans by Sheilla?',
            answer: 'Loans by Sheilla is a trusted mortgage lending service that helps individuals and families achieve their homeownership dreams through personalized loan solutions and expert guidance throughout the mortgage process.',
        },
        {
            question: 'Who is Sheilla Lavadia?',
            answer: 'Sheilla Lavadia is a seasoned mortgage professional with years of experience in helping clients secure the best possible mortgage solutions. She is known for her personalized approach and dedication to making the mortgage process smooth and transparent.',
        },
        {
            question: 'What services do we offer?',
            answer: 'We offer a comprehensive range of mortgage services including conventional loans, FHA loans, VA loans, refinancing options, and specialized programs for first-time homebuyers. Each service is tailored to meet your specific needs and financial goals.',
        },
        {
            question: 'Why choose Loans by Sheilla?',
            answer: 'Choosing Loans by Sheilla means working with a dedicated professional who prioritizes your needs, offers competitive rates, and provides clear communication throughout the entire mortgage process. We have a proven track record of successful closings and satisfied clients.',
        },
        {
            question: 'Where is Loans by Sheilla available?',
            answer: "Loans by Sheilla serves clients throughout Washington state, with our main office located in Bellevue. We can assist you whether you're buying in Seattle, Bellevue, Redmond, or any other location in Washington.",
        },
        {
            question: "How do I reach Loans By Sheilla's customer service?",
            answer: "You can email us your queries at info@loansbysheilla.com or call us at (425) 900-6082. We are available from Mondays to Fridays, 8AM-5PM, Pacific Standard Time.",
        },
        {
            question: "What do I need to apply?",
            answer: "To apply for a loan with Loans By Sheilla, you generally need to provide personal information, identification, and income verification documents. You'll also need to share employment details and complete the lender's application form.",
        },
        {
            question: "How can Loans By Sheilla help me get a pre-approval letter?",
            answer: "Loans By Sheilla can help you obtain a pre-approval letter by first assessing your financial information, including your income, credit history, and debt-to-income ratio. Once your application is reviewed and deemed eligible, they will issue a pre-approval letter indicating the loan amount you qualify for. This letter can be beneficial for demonstrating your financial credibility to potential sellers or real estate agents when purchasing a home.",
        },
    ];

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative mt-32">
            <div className="mx-auto px-96">
                <h2 className="heading mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                            <button onClick={() => toggleQuestion(index)} className="flex w-full items-center justify-between p-6 text-left">
                                <span className="text-lg">{faq.question}</span>
                                <span className="text-primary ml-4">
                                    {openIndex === index ? <MinusIcon className="h-6 w-6" /> : <PlusIcon className="h-6 w-6" />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="border-t border-gray-100 p-6 text-gray-600">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    );
}
