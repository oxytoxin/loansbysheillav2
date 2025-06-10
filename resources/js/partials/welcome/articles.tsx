import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from './article-card';
import SwiperControls from './swiper-controls';

export default function Articles() {
    return (
        <div className="mx-32 flex flex-col items-center justify-center">
            <h2 className="text-primary text-4xl">
                Know More About <strong>Homebuying</strong>
            </h2>
            <div className="relative w-full">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className="[&_.swiper-pagination-bullet]:!bg-primary [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination]:!bottom-[-2rem]"
                >
                    {Array.from({ length: 5 }).map((_, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="grid grid-cols-4 gap-8 p-8">
                                {Array.from({ length: 8 }).map((_, cardIndex) => (
                                    <ArticleCard key={cardIndex} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperControls bodyClass="mt-2" buttonClass="bg-primary text-white hover:bg-primary/90" />
                </Swiper>
            </div>
        </div>
    );
}
