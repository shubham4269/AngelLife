import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Heroslider.css";

const HeroSlider = () => {
  const slides = [
    {
      image: "/Images/slider-1.webp",
      title: "India’s Leading Aesthetic Institute",
      subtitle: "Angel Life International",
    },
    {
      image: "/Images/slider-2.webp",
      title: "National Award for Excellence",
      subtitle: "Empowering the Future of Wellness",
    },
    {
      image: "/Images/slider-3.webp",
      title: "Cosmetology & Wellness Experts",
      subtitle: "Transforming Global Education Standards",
    },
    {
      image: "/Images/slider-4.webp",
      title: "Global Standards in Aesthetic Science",
      subtitle: "Shaping Tomorrow’s Beauty Leaders",
    },
     {
      image: "/Images/slider-5.webp",
      title: "Global Standards in Aesthetic Science",
      subtitle: "Shaping Tomorrow’s Beauty Leaders",
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
