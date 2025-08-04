import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperControls from './swiper-controls';
import ArticleCard from "@/partials/welcome/article-card";
import {ArticlesGroups} from "@/types/props";

export default function Articles({articles_groups}: { articles_groups: ArticlesGroups }) {

    return (
        <div className="mx-32 mt-16 flex flex-col items-center justify-center">
            <h2 className="text-primary my-8 text-4xl">
                Know More About <strong>Homebuying</strong>
            </h2>
            <div className="relative w-full">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className="[&_.swiper-pagination-bullet]:!bg-primary [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination]:!bottom-[-2rem]"
                >
                    {articles_groups.map((group, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="grid grid-cols-4 gap-8 p-8">
                                {group.map((article, cardIndex) => (
                                    <ArticleCard article={article} key={cardIndex}/>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperControls bodyClass="mt-2" buttonClass="bg-primary text-white hover:bg-primary/90"/>
                </Swiper>
            </div>
        </div>
    );
}
