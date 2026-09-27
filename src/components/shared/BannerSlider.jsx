import React from "react";
import Slider from "react-slick";

import { banners } from "../../utils/constants";

const BannerSlider = () => {
  const settings = {
    centerMode: true,

    // Desktop
    centerPadding: "180px",

    slidesToShow: 1,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,

    arrows: true,
    dots: true,

    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,

    responsive: [
      {
        // Large desktop
        breakpoint: 1440,
        settings: {
          centerPadding: "140px",
          arrows: true,
        },
      },
      {
        // Desktop / laptop
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
          arrows: true,
        },
      },
      {
        // Tablet
        breakpoint: 992,
        settings: {
          centerPadding: "60px",
          arrows: false,
        },
      },
      {
        // Mobile
        breakpoint: 768,
        settings: {
          centerPadding: "25px",
          arrows: false,
          dots: true,
        },
      },
      {
        // Small mobile
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-4 sm:py-5 md:py-6 lg:py-8">
      <div className="mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i} className="px-1 sm:px-2">
              <div className="overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
                <img
                  src={banner}
                  alt={`Banner ${i + 1}`}
                  className="
                    w-full
                    h-[180px]
                    sm:h-[220px]
                    md:h-[260px]
                    lg:h-[300px]
                    xl:h-[340px]
                    2xl:h-[380px]
                    object-cover
                    object-center
                    select-none
                  "
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BannerSlider;
