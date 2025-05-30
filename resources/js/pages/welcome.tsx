import Articles from '@/partials/welcome/articles';
import Contact from '@/partials/welcome/contact';
import CTA from '@/partials/welcome/cta';
import FAQ from '@/partials/welcome/faq';
import Footer from '@/partials/welcome/footer';
import Header from '@/partials/welcome/header';
import Hero from '@/partials/welcome/hero';
import HeroSecondary from '@/partials/welcome/hero-secondary';
import License from '@/partials/welcome/license';
import MortgageMoments from '@/partials/welcome/mortgage-moments';
import MortgageProcess from '@/partials/welcome/mortgage-process';
import Testimonials from '@/partials/welcome/testimonials';
import WhatWeCanOffer from '@/partials/welcome/what-we-can-offer';
import { Head } from '@inertiajs/react';
export default function Welcome() {
    return (
        <>
            <div className="bg-primary fixed inset-0 z-10 grid place-items-center text-white sm:hidden">
                <div>
                    <h3 className="text-xl">Mobile View Coming Soon!</h3>
                    <h1 className="mt-4 text-2xl font-semibold">Loans By Sheilla</h1>
                </div>
            </div>
            <Head title="Welcome" />
            <Header />
            <Hero />
            <WhatWeCanOffer />
            <HeroSecondary />
            <CTA />
            <MortgageProcess />
            <MortgageMoments />
            <Articles />
            <Testimonials />
            <Contact />
            <FAQ />
            <License />
            <Footer />
        </>
    );
}
