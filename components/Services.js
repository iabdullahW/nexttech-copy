import React from 'react'
import Image from 'next/image'
import underHeading from "./../public/underHeading.svg"
import BiggerCart from './BiggerCart'
import { FaCircleStop } from "react-icons/fa6";
// import { Cardo } from 'next/font/google'

// const data=[
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
//   {h1:"Data is loading"},
// ]

import {services} from "./../utils/constants"


const Services = () => {
  return (
    <>
        <div className='w-[100%] bg-[#e3f0ff] text-black '>
            <div className='w-[99%] mx-auto'>
                  <div className='py-5'>
                  <div className='flex flex-col items-center justify-center gap-y-10'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-medium'>Our Services</h1>
                            <Image src={underHeading} alt='underHeading'/>
                        </div>
                        <div>
                          <h1 className='text-4xl font-bold'>How We Can <span className='text-blue-700'> Help </span> You</h1>
                        </div>
                        </div>
                        <div className='flex flex-wrap justify-around my-10'>
                            {services.map((service)=>{
                              return <BiggerCart title={service.title} icon={service.icon} paragraph1={service.para1} paragraph2={service.para2} paragraph3={service.para3} paragraph4={service.para4}/>
                            })}
                        </div>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Services