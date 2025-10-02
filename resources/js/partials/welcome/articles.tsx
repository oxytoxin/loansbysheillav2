import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperControls from './swiper-controls';
import ArticleCard from "@/partials/welcome/article-card";
import {Article} from "@/types/props";
import {useWindowSize} from "@uidotdev/usehooks";
import {useEffect, useState} from "react";

export default function Articles({articles}: { articles: Article[] }) {
    const size = useWindowSize();
    const [groups, setGroups] = useState<Article[][]>([]);
    useEffect(() => {
        if (size?.width < 480) {
            setGroups(Array.from({length: Math.ceil(articles.length)}, (_, i) =>
                articles.slice(i, i + 1)
            ))
        } else if (size?.width < 1024) {
            setGroups(Array.from({length: Math.ceil(articles.length / 2)}, (_, i) =>
                articles.slice(i * 2, i * 2 + 2)
            ))
        } else if (size?.width < 1560) {
            setGroups(Array.from({length: Math.ceil(articles.length / 6)}, (_, i) =>
                articles.slice(i * 6, i * 6 + 6)
            ))
        } else {
            setGroups(Array.from({length: Math.ceil(articles.length / 8)}, (_, i) =>
                articles.slice(i * 8, i * 8 + 8)
            ))
        }
    }, [size.width]);
    return (
        <div id="articles" className="lg:mx-32 mt-16 flex flex-col items-center justify-center">
            <h2 className="my-8 heading">
                Know More About Homebuying
            </h2>
            <div className="relative w-full">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className="[&_.swiper-pagination-bullet]:!bg-primary [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination]:!bottom-[-2rem]"
                >
                    {groups.map((group, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-8">
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
