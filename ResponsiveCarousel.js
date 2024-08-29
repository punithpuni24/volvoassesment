import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import {Carouseldata} from './data';

 

const carouselSettings = {

  dots: true,

  infinite: true,

  speed: 500,

  slidesToShow: 4,

  slidesToScroll: 1,

  responsive: [

    {

      breakpoint: 768,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1

      }

    },

    {

      breakpoint: 1024,

      settings: {

        slidesToShow: 2,

        slidesToScroll: 2

      }

    }

  ]

};

 

const ResponsiveCarousel = () => {

  return (

    <div>

      <h2>Responsive Carousel</h2>

      <Slider {...carouselSettings}>

         {Carouseldata.map(carousel =>(

 

           <><div>{carousel.bodyType} </div><div><b> {carousel.modelName}</b> {carousel.modelType}</div><img src={carousel.imageUrl} alt="Slide 1" /></>

 

        ))}

       

      </Slider>

    </div>

  );

};

 

export default ResponsiveCarousel;

 
