import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwiper } from 'swiper/react';

export default function SwiperControls({ bodyClass, buttonClass }: { bodyClass?: string; buttonClass?: string }) {
    const swiper = useSwiper();
    return (
        <div className={cn('flex justify-center', bodyClass)}>
            <button
                type="button"
                onClick={() => swiper.slidePrev()}
                className={cn('mr-2 cursor-pointer rounded-full bg-white p-2 shadow-md duration-300 hover:bg-[#a6a6a6]', buttonClass)}
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                type="button"
                onClick={() => swiper.slideNext()}
                className={cn('ml-2 cursor-pointer rounded-full bg-white p-2 shadow-md duration-300 hover:bg-[#a6a6a6]', buttonClass)}
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    );
}
