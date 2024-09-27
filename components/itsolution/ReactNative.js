"use client"
import React from 'react'
import Image from 'next/image'
import reactnative from "./../../public/react-native.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const ReactNative = ({title,paragraph,img}) => {
    useEffect(() => {
        Aos.init({duration:1000,easing:"ease-in-out",once:false})
      
    }, []);
  return (
    <>
        <div className='w-[100%]  bg-black text-white p-20 max-sm:p-5'>
            <div className='w-[90%] mx-auto flex flex-row-reverse justify-between items-center max-sm:flex max-sm:flex-col max-sm:w-[100%]  '>
                <div className='left w-[50%] flex flex-col gap-y-3 max-sm:w-[100%]'>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <hr className='w-[43%] h-1 bg-teal-800 '/>
                    <p className=''>{paragraph}</p>
                </div>
                <div className='right w-[50%] max-sm:w-[100%]' data-aos="fade-right">
                    <Image src={img} alt="flutter"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReactNative