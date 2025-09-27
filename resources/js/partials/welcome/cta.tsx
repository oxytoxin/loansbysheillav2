import {useState} from 'react';

function MortgageCalculator() {
    const [homePrice, setHomePrice] = useState(2000000);
    const [downPayment, setDownPayment] = useState(20);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);

    const loanAmount = homePrice - homePrice * (downPayment / 100);
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyInterest = loanAmount * monthlyInterestRate;
    const monthlyPayment = homePrice === 0 ? 0 : (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return (
        <div className="mx-auto my-8 flex max-w-4xl flex-col gap-8 rounded-lg bg-white p-6 shadow-md md:flex-row">
            <div className="flex-1">
                <h4 className="text-primary mb-4 text-lg font-bold">Mortgage Calculator</h4>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-semibold">Home Price</label>
                    <input
                        type="number"
                        className="border-primary w-full border-3 px-3 py-2"
                        value={homePrice}
                        min={0}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        placeholder="Enter home price"
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-semibold">Down Payment</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="flex-1"
                        />
                        <span>{downPayment}%</span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-semibold">Loan Term</label>
                    <div className="flex flex-col gap-4">
                        {[10, 15, 20, 30].map((term) => (
                            <label key={term} className="flex items-center gap-2">
                                <input type="radio" name="loanTerm" value={term} checked={loanTerm === term}
                                       onChange={() => setLoanTerm(term)}/>
                                {term}-Years
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-1 block text-sm font-semibold">Interest Rate</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={0}
                            max={15}
                            step={0.01}
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="flex-1"
                        />
                        <span>{interestRate}%</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 border-l pl-8">
                <div className="mb-4">
                    <div className="text-sm font-bold">Monthly Interest</div>
                    <div className="text-primary text-3xl font-bold">
                        ${monthlyInterest ? monthlyInterest.toLocaleString(undefined, {maximumFractionDigits: 2}) : 0}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                        This is the monthly payment amount applied to the principal balance and interest.
                    </div>
                </div>
                <hr className="border-primary my-4 border-[2px]"/>
                <div className="mb-4">
                    <div className="text-sm font-bold">Total Monthly Payment</div>
                    <div className="text-primary text-3xl font-bold">
                        ${monthlyPayment ? monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2}) : 0}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Exclusive of taxes, insurance, PMI, and HOA fees</div>
                </div>
                <hr className="border-primary my-4 border-[2px]"/>
                <div className="mb-4">
                    <div className="font-bold">Take the First Step Towards Your New Home</div>
                    <div className="mt-1 text-xs text-gray-500">
                        Use this standard calculator to know your monthly mortgage payment based on the home price, down
                        payment, loan term, and
                        interest rate.
                    </div>
                </div>
                <div className="flex justify-center">
                    <a className="bg-primary mt-2 rounded-full px-6 py-2 font-bold text-white"
                       href="https://loanfactory.my1003app.com/1399453/register">
                        APPLY NOW
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function CTA() {
    return (
        <div id="calculator" className="bg-primary py-16">
            <h3 className="heading !text-white">See How Much You Can Afford</h3>
            <MortgageCalculator/>
            <div className="flex justify-center"></div>
            <div className="flex justify-center">
                <a target="_blank"
                   className="text-primary mt-auto inline-block animate-pulse rounded-full border border-[#A6A6A6] bg-[#E2E6DB] px-8 py-4 text-center text-2xl font-bold duration-500"
                   href="https://www.loanfactory.com/today-rates"
                >
                    View Live Mortgage Rates
                </a>
            </div>
        </div>
    );
}
