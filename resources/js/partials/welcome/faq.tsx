import {useState} from 'react';
import {FAQSections} from "@/types/props";


export default function FAQ({faq_sections}: { faq_sections: FAQSections }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative mt-32">
            <div className="mx-auto px-96">
                <h2 className="heading mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-6">
                    {faq_sections.map((section, index) => {
                        return <div key={index}>
                            <h3 className="text-xl text-primary font-bold mb-4">{section.title}</h3>
                            <div className="flex flex-col gap-4">
                                {
                                    section.entries.map((entry, index) => {
                                        return <div key={index}
                                                    className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                            <button onClick={() => toggleQuestion(index)}
                                                    className="flex w-full items-center justify-between p-6 text-left">
                                                <span className="text-lg">{entry.question}</span>
                                                <span className="text-primary ml-4">
                                    {openIndex === index ? <MinusIcon className="h-6 w-6"/> :
                                        <PlusIcon className="h-6 w-6"/>}
                                </span>
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                                }`}
                                            >
                                                <div
                                                    className="border-t border-gray-100 p-6 text-gray-600">{entry.answer}</div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
    );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
        </svg>
    );
}
