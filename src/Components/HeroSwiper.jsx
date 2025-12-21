import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";
import slider6 from "../assets/slider6.png";

const slides = [
    {
        image: slider1,
        title: "Elegant Home Decoration",
        subtitle: "Transform your home with modern style",
    },
    {
        image: slider2,
        title: "Wedding Ceremony Design",
        subtitle: "Make your special day unforgettable",
    },
    {
        image: slider3,
        title: "Office & Event Decoration",
        subtitle: "Professional designs for corporate events",
    },
    {
        image: slider4,
        title: "Birthday & Party Setup",
        subtitle: "Colorful moments, beautiful memories",
    },
    {
        image: slider5,
        title: "Luxury Interior Styling",
        subtitle: "Premium decoration services",
    },
    {
        image: slider6,
        title: "Smart Decoration Solutions",
        subtitle: "Modern design with smart planning",
    },
];

const HeroSwiper = () => {
    return (
        <Swiper
            pagination={{ dynamicBullets: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="relative h-[650px] w-full rounded-xl overflow-hidden">
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt="slider"
                            className="h-full w-full object-cover rounded-xl overflow-hidden"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl mb-6 max-w-2xl">
                                {slide.subtitle}
                            </p>
                            <button className="px-8 text-white font-bold py-4 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105">
                                Book Decoration Service
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSwiper;
