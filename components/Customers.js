"use client"
import React from 'react'
import logo1 from "./../public/assets/technology/pngtree-wolf-logo-png-image_2306634-removebg-preview.png"
// import logo2 from "./../public/assets/technology/download (2).jpeg"
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
// import { Image } from 'next/image'




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Caro from './Caro'
import uncle from "./../public/assets/uncle.webp"
import boy from "./../public/assets/boy.webp"
import uncle2 from "./../public/assets/uncle2.webp"


const Customers = () => {

    var settings = {
        dots: 0,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
  return (
    <>
        <div className='w-[100%] bg-[#e3f0ff] h-auto py-20'>
            <div className='w-[80%] mx-auto  flex gap-x-4 max-sm:flex max-sm:flex-col max-sm:gap-y-4'>
            <div className='left w-[35%] h-[80vh] bg-white rounded-2xl max-sm:w-[100%] max-sm:h-[30vh]'>
            <div className='flex flex-col gap-y-20'>   
            <div className='flex flex-col items-center pt-5 font-extrabold gap-y-10'>
                <h1 className='text-5xl text-blue-800'>3,900+</h1>
                <h1 className='text-4xl max-sm:hidden'>customers <br /> win deals <br /> with  Techno</h1>
                </div>
                <div className='flex justify-between px-4'>
                    <div className='flex flex-col gap-y-2'>
                        <Image src={logo1} alt="logo1" className='w-[100px]'/>
                        <div className='flex text-yellow-300 max-sm:hidden'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <h1 className='text-sm'>From 200+ reviews</h1>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Image src={logo1} alt="logo1" className='w-[100px]'/>
                        <div className='flex text-yellow-300 max-sm:hidden ' >
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <h1 className='text-sm'>From 200+ reviews</h1>
                    </div>
                    
                </div>
            </div>
            
               

            </div>
            <div className='right w-[65%] max-sm:w-[100%]'>
            <Slider {...settings}>
            <div>
                <Caro img={boy}/>
            </div>
            <div>
                <Caro img={uncle2}/>
            </div>
           
           
            
            </Slider>
            </div>
            </div>
        </div>
    </>
  )
}

export default Customers

