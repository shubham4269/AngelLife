import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Heroslider.css";

const HeroSlider = () => {
  const slides = [
    {
      image: "/Images/1.png",
      title: "Premium Beauty & Wellness Courses",
      subtitle: "Angel Life International",
    },
    {
      image: "/Images/2.png",
      title: "National Award for Excellence",
      subtitle: "MS.TAMANNAH BHATIA",
    },
    {
      image: "/Images/3.png",
      title: "TOP AESTHETICS CHAIN AWARDED BY",
      subtitle: "MS. NEHA DHUPIA",
    },
    {
      image: "/Images/6.png",
      title: "Premium Beauty & Wellness Courses",
      subtitle: "Angel Life International",
    },
    {
      image: "/Images/4.png",
      title: "Global Standards in Aesthetic Science",
      subtitle: "MS. MALAIKA ARORA",
    },
    {
      image: "/Images/5.png",
      title: "TOP SKIN, LASER AND BEAUTY COURSES",
      subtitle: "STARLET MS. SARA ALI KHAN",
    },
  ];

  return (
    <div className="hero-slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        centeredSlides
        breakpoints={{
          0: {
            slidesPerView: 1, // mobile
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1.2, // tablet
            spaceBetween: -20,
          },
          1024: {
            slidesPerView: 1.5, // desktop
            spaceBetween: -50,
          },
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />
            </div>
            <div className="caption-premium">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;


