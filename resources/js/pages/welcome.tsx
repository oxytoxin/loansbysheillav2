import Hero from '@/partials/welcome/hero';
import {Head} from '@inertiajs/react';
import {Article, FAQSections, MortgageMoment, Review} from "@/types/props";
import MainLayout from "@/layouts/main-layout";
import WhatWeCanOffer from "@/partials/welcome/what-we-can-offer";
import HeroSecondary from "@/partials/welcome/hero-secondary";
import CTA from "@/partials/welcome/cta";
import MortgageProcess from "@/partials/welcome/mortgage-process";
import MortgageMoments from "@/partials/welcome/mortgage-moments";
import Articles from "@/partials/welcome/articles";
import Testimonials from "@/partials/welcome/testimonials";
import Contact from "@/partials/welcome/contact";
import FAQ from "@/partials/welcome/faq";
import License from "@/partials/welcome/license";
import Footer from "@/partials/welcome/footer";

export default function Welcome({mortgage_moments, faq_sections, articles, reviews, guides}: {
    mortgage_moments: MortgageMoment[],
    faq_sections: FAQSections,
    articles: Article[],
    reviews: Review[]
}) {
    return (
        <>
            <div>
                <Head title="Welcome"/>
                <MainLayout>
                    <Hero/>
                    <WhatWeCanOffer/>
                    <HeroSecondary guides={guides}/>
                    <CTA/>
                    <MortgageProcess/>
                    <MortgageMoments {...{mortgage_moments}}/>
                    <Articles {...{articles}} />
                    <Testimonials {...{reviews}} />
                    <Contact/>
                    <FAQ {...{faq_sections}}/>
                    <License/>
                    <Footer/>
                </MainLayout>
            </div>
        </>
    );
}
