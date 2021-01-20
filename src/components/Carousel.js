import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

const Carousel = ({ restaurants, title }) => {
  /* Settings for react-slick Slider-component */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, //Shows max 4 slides at the same time
    slidesToScroll: 1, //Each scroll or arrow click reveals one new slide, aka. the carousel moves one step
    initialSlide: 0,
    centerMode: false,
    /* different amounts of slides according to screen size */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="title">{title}</h2>
      <Slider {...settings}>
        {/* Checking that 'restaurants' has data */}
        {/* mapping restaurants' into cards */}
        {restaurants && restaurants.map(r => <Card key={r.name} restaurant={r} />)}
      </Slider>
    </div>
  );
};

export default Carousel;
