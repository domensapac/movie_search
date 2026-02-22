import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel({movie}){
    return(
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
                type: 'progressbar'
            }}
            style={{
            "--swiper-pagination-color": "#ff9900ff", // Barva progresa (npr. modra)
            "--swiper-navigation-color": "#fff", // Če želiš spremeniti še barvo puščic
    }}
            className="mySwiper rounded-xl overflow-hidden"
            >
            {movie.images.backdrops.slice(0,5).map((img, index) => (
                <SwiperSlide key={index}>
                <img 
                    src={`https://image.tmdb.org/t/p/w1280${img.file_path}`} 
                    alt="backdrop" 
                    className="sm:w-full sm:h-[370px] object-cover"
                />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel; 