import React from 'react';
import Cr1 from '../../asset/image/carousel-1.jpg';
import Cr2 from '../../asset/image/carousel-2.jpg';
import Cr3 from '../../asset/image/carousel-3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="container mx-auto mb-3" style={{ zIndex: -1 }}>
      <div className="w-full h-full">
        <Slider {...settings}>
          <div className="carousel-item relative h-96">
            <img className="absolute w-full h-full object-cover" src={Cr1} alt="Carousel 1" />
          </div>
          <div className="carousel-item relative h-96">
            <img className="absolute w-full h-full object-cover" src={Cr2} alt="Carousel 2" />
          </div>
          <div className="carousel-item relative h-96">
            <img className="absolute w-full h-full object-cover" src={Cr3} alt="Carousel 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
