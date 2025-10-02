import {cn} from '@/lib/utils';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperControls from './swiper-controls';
import {Review} from "@/types/props";

export default function Testimonials({reviews}: { reviews: Review[] }) {
    return (
        <div id='reviews' className='md:pt-64 pt-32 px-4 md:px-0'>
            <h2 className="heading">
                What My Clients Say About Me
            </h2>
            <div>
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={
                        {
                            760: {
                                slidesPerView: 2,
                            },
                            1368: {
                                slidesPerView: 4,
                            }
                        }
                    }
                    className="p-8">
                    {reviews.map((review: Review, index: number) => (
                        <SwiperSlide title={review.content} key={index}>
                            {({isActive}) => (
                                <div
                                    className={cn(
                                        'bg-card relative mx-auto my-20 max-w-4xl min-w-56 rounded-2xl p-8 duration-300',
                                        isActive ? 'mx-12 scale-130' : 'pointer-events-none',
                                    )}
                                >
                                    {/* Quote mark */}
                                    <div className="absolute -top-14 z-20 select-none">
                                        <span className="blockquote"></span>
                                    </div>

                                    {/* Rating stars */}
                                    <div className="mb-6 flex gap-1">
                                        {Array.from({length: review.rating}).map((_, i) => (
                                            <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial text */}
                                    <p className="relative mb-8 text-sm">{review.excerpt}</p>

                                    {/* Author info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src={review.img_url}
                                            alt="avatar"
                                        />
                                        <div>
                                            <div
                                                className="text-xs font-bold whitespace-nowrap">{review.author}</div>
                                            <div className="text-xs text-gray-600">from {review.source}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                    <SwiperControls buttonClass="bg-primary text-white hover:bg-primary/90"/>
                </Swiper>
            </div>
        </div>
    );
}
