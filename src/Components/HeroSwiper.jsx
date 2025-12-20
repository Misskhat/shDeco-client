import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";
import 'swiper/css';


const slider = [slider1, slider2, slider3, slider4, slider5, slider6];

const HeroSwiper = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}

                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {slider.map((slide, i) => <SwiperSlide key={i}><div className='object-contain'><img className=' rounded object-fill h-[650px] w-full' src={slide} alt="slider" /></div></SwiperSlide>
                )}

            </Swiper>
        </div>
    );
};

export default HeroSwiper;