'use client'
import React from 'react'

import Cards from './Cards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "@/utils/constants";

const SliderComponent = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        // ...similarSettings,
        slidesToShow: 7,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              // ...similarSettings,
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              // ...similarSettings,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              // ...similarSettings,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 320,
            settings: {
              // ...similarSettings,
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <>
    <div className="h-[25vh] bg-[#0232b8] text-white w-[100%] pt-5 ">
    <div className=" w-[98%] ml-auto flex  items-center justify-center  h-full gap-x-5">
        
        <div className=''>
            <h1 className='font-extrabold text-md'>Our Featured <br /> Partner's</h1>
        </div>
        <div className='   w-[90%]  overflow-hidden'>
        <Slider {...settings}>

     {carouselData.map((item)=>{
        return <Cards logo={item.img}/>
     })}
     
        </Slider>
    </div>
        
        </div>
    </div>
    </>
  )
}

export default SliderComponent;