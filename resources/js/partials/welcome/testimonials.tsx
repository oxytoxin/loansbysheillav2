import {cn} from '@/lib/utils';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperControls from './swiper-controls';

export default function Testimonials() {
    const testimonials = [
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        {
            rating: 5,
            text: 'Sheilla has been very helpful from the very beginning of our home buying journey. As a first time buyer with non-US employment record, she helped us prepare my documents to get approval.',
            author: 'Bermudez-Willcockson, F.',
            source: 'from Google Reviews',
            image: '/images/testimonials/bermudez.jpg',
        },
        // Add more testimonials here
    ];

    return (
        <div id='reviews' className='pt-64'>
            <h2 className="heading">
                What My Clients Say About Me
            </h2>
            <div>
                <Swiper centeredSlides={true} loop={true} spaceBetween={30} slidesPerView={4} className="p-8">
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
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
                                        {Array.from({length: testimonial.rating}).map((_, i) => (
                                            <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial text */}
                                    <p className="relative mb-8 text-sm">{testimonial.text}</p>

                                    {/* Author info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://images.pexels.com/photos/27603433/pexels-photo-27603433/free-photo-of-blonde-beauty-s-eye-catching-glasses.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            alt="avatar"
                                        />
                                        <div>
                                            <div
                                                className="text-xs font-bold whitespace-nowrap">{testimonial.author}</div>
                                            <div className="text-xs text-gray-600">{testimonial.source}</div>
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
