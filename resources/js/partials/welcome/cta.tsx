import { Link } from '@inertiajs/react';

export default function CTA() {
    return (
        <div className="mx-auto my-32 flex max-w-5xl justify-center gap-16">
            <div className="flex w-96 flex-col items-center">
                <h3 className="mb-8 text-center text-4xl font-semibold">SEE HOW MUCH YOU CAN AFFORD</h3>
                <Link
                    className="mt-auto w-full rounded-full border border-[#A6A6A6] bg-[#E2E6DB] px-8 py-4 text-center text-2xl font-semibold whitespace-nowrap duration-300 hover:scale-105 hover:border-[#074A42] hover:bg-[#265D41] hover:text-white"
                    href="/calculator"
                >
                    MORTGAGE CALCULATOR
                </Link>
            </div>
            <div className="flex w-96 flex-col items-center">
                <h3 className="mb-8 text-center text-4xl font-semibold">SEE TODAY'S RATES</h3>
                <Link
                    className="mt-auto w-full rounded-full border border-[#A6A6A6] bg-[#E2E6DB] px-8 py-4 text-center text-2xl font-semibold duration-300 hover:scale-105 hover:border-[#074A42] hover:bg-[#265D41] hover:text-white"
                    href="/rates"
                >
                    MORTGAGE RATES
                </Link>
            </div>
        </div>
    );
}
