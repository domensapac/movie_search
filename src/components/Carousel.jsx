import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// OBVEZNO uvozi stile za pagination
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel({movie}){
    return(
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
                type: 'progressbar', // To ustvari tisto modro črto na vrhu
            }}
            className="mySwiper rounded-xl overflow-hidden"
            >
            {movie.images.backdrops.slice(0,5).map((img, index) => (
                <SwiperSlide key={index}>
                <img 
                    src={`https://image.tmdb.org/t/p/w1280${img.file_path}`} 
                    alt="backdrop" 
                    className="w-full h-[500px] object-cover"
                />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel; 