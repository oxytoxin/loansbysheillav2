import {cn} from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperControls from './swiper-controls';
import {MortgageMoment} from "@/types/props";

export default function MortgageMoments({mortgage_moments}: { mortgage_moments: MortgageMoment[] }) {
    return (
        <section className="relative -mt-96 select-none">
            <div className="bg-primary relative pt-64">
                <div
                    className="absolute top-0 right-0 left-0 -mt-[0.5px] h-48 bg-white"
                    style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}
                />
                <div className="mx-auto px-4 pt-32 pb-48">
                    <h2 className="mb-20 heading !text-white">
                        Mortgage Moments
                    </h2>
                    <div className="overflow-hidden">
                        <div className="pb-16">
                            <Swiper
                                spaceBetween={10}
                                centeredSlides={true}
                                slidesPerView={5}
                                loop={true}
                                className="[&_.swiper-pagination-bullet]:!bg-card !overflow-visible [&_.swiper-pagination]:!bottom-[-4rem] [&_.swiper-pagination-bullet-active]:!bg-white"
                            >
                                {mortgage_moments.map(({url}, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            {({isActive}) => (
                                                <div
                                                    className={cn(
                                                        'transition-all duration-300',
                                                        isActive ? 'opacity-100' : 'pointer-events-none scale-90 opacity-50',
                                                    )}
                                                >
                                                    <div
                                                        className="border-card aspect-[9/16] overflow-hidden rounded-lg border-2 bg-white shadow-xl">
                                                        <iframe
                                                            className="h-full w-full"
                                                            src={url}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            )}
                                        </SwiperSlide>
                                    );
                                })}
                                <SwiperControls bodyClass="mt-16"/>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute right-0 -bottom-[0.5px] left-0 h-48 bg-white"
                    style={{clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)'}}
                />
            </div>
        </section>
    );
}
