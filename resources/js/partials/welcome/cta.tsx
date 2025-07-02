import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

function MortgageCalculator() {
    const [homePrice, setHomePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(20);
    const [loanTerm, setLoanTerm] = useState(30);
    const [interestRate, setInterestRate] = useState(6.5);

    const loanAmount = homePrice - (homePrice * (downPayment / 100));
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyInterest = loanAmount * monthlyInterestRate;
    const monthlyPayment = homePrice === 0 ? 0 :
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const principalPortion = monthlyPayment - monthlyInterest;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8 max-w-4xl mx-auto my-8">
            <div className="flex-1">
                <h4 className="text-lg font-bold mb-4 text-primary">Mortgage Calculator</h4>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Home Price</label>
                    <input
                        type="number"
                        className="w-full border-3 border-primary px-3 py-2"
                        value={homePrice}
                        min={0}
                        onChange={e => setHomePrice(Number(e.target.value))}
                        placeholder="Enter home price"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Down Payment</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={downPayment}
                            onChange={e => setDownPayment(Number(e.target.value))}
                            className="flex-1 "
                        />
                        <span>{downPayment}%</span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Loan Term</label>
                    <div className="flex gap-4 flex-col">
                        {[10, 15, 20, 30].map(term => (
                            <label key={term} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="loanTerm"
                                    value={term}
                                    checked={loanTerm === term}
                                    onChange={() => setLoanTerm(term)}
                                />
                                {term}-Years
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Interest Rate</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min={0}
                            max={15}
                            step={0.01}
                            value={interestRate}
                            onChange={e => setInterestRate(Number(e.target.value))}
                            className="flex-1"
                        />
                        <span>{interestRate}%</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 border-l pl-8">
                <div className="mb-4">
                    <div className="text-sm font-bold">Monthly Interest</div>
                    <div className="text-3xl font-bold text-primary">${monthlyInterest ? monthlyInterest.toLocaleString(undefined, { maximumFractionDigits: 2 }) : 0}</div>
                    <div className="text-xs text-gray-500 mt-1">This is the monthly payment amount applied to the principal balance and interest.</div>
                </div>
                <hr className="my-4 border-primary border-[2px]" />
                <div className="mb-4">
                    <div className="text-sm font-bold">Total Monthly Payment</div>
                    <div className="text-3xl font-bold text-primary">${monthlyPayment ? monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 }) : 0}</div>
                    <div className="text-xs text-gray-500 mt-1">Exclusive of taxes, insurance, PMI, and HOA fees</div>
                </div>
                <hr className="my-4 border-primary border-[2px]" />
                <div className="mb-4">
                    <div className="font-bold">Take the First Step Towards Your New Home</div>
                    <div className="text-xs text-gray-500 mt-1">Use this standard calculator to know your monthly mortgage payment based on the home price, down payment, loan term, and interest rate.</div>
                </div>
                <div className="flex justify-center">
                    <Link className="bg-primary text-white px-6 py-2 rounded-full font-bold mt-2" href="/contact">APPLY NOW</Link>
                </div>
            </div>
        </div>
    );
}

export default function CTA() {
    return (
        <div className="bg-primary py-16">
            <h3 className="heading !text-white">See How Much You Can Afford</h3>
            <MortgageCalculator />
            <div className="flex justify-center">

            </div>
            <div className="flex justify-center">
                <Link
                    className="mt-auto animate-pulse duration-500 inline-block rounded-full border border-[#A6A6A6] bg-[#E2E6DB] px-8 py-4 text-center text-2xl text-primary font-bold"
                    href="/rates"
                >
                    View Live Mortgage Rates
                </Link>
            </div>
        </div>
    );
}
