import React from 'react'
import icon1 from "./../public/assets/icon1.svg"
import icon2 from "./../public/assets/icon2.svg"
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image'
import image from "./../public/assets/case_image_1.webp"
import rightImage from "./../public/assets/case_image_3.webp"
const FullSlider3 = ({subTitle,mainTitle,paragraphs,industry,country, image1,image2, mainImage}) => {



  return (
    <>
        <div className='w-[100%] bg-[#171b3a] '> 
            <div className='w-[97%] mx-auto flex bg-white rounded-2xl shadow-2xl shadow-black max-sm:flex max-sm:flex-col'>
                <div className='left w-[60%]  flex flex-col gap-y-8 pl-20 py-8 max-sm:w-[100%]'>
                    <h2 className='text-xl text-gray-500 '>Real Estate</h2>
                    <h1 className='text-3xl font-bold'>Liberkeys</h1>
                    <p className='tracking-wider text-gray-700 text-md'>
                    Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines.
                    </p>
                    <div className='flex text-xl gap-x-5'>
                       <h1> <span className='font-bold'>Industry</span> : Real estate</h1>
                       <h1> <span className='font-bold'>Country </span> :  France, Paris</h1>
                    </div>
                    <div className='flex gap-x-5'>
                        <h1 className='text-lg font-medium gap-x-5 '>Core Technologies :</h1>
                        <Image src={icon1} alt="angular" className='p-1 text-5xl bg-white rounded-full shadow-2xl shadow-gray-950 '/>
                        <Image src={icon2} alt="angular" className='p-1 text-5xl bg-white rounded-full shadow-2xl shadow-gray-950 '/>
                        
                    </div>
                    <div>
                        <button className='flex items-center px-8 py-4 font-bold text-white bg-blue-700 gap-x-3 rounded-3xl'>READ CASE <GoArrowUpRight className='text-2xl font-bold text-white'/></button>
                    </div>
                </div>
                <div className='right w-[40%] max-sm:w-[100%]'>
                    <Image src={rightImage} alt="image1"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default FullSlider3


