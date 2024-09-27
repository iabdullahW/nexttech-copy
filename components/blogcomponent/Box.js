import React from 'react'
import Image from 'next/image'
// import img from "./../../app/blogs/images/what-is-malware.jpg"
import logo from "./../../public/secondlogo.svg"
import { FaShareAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';


const Box = ({img,title,paragraph}) => {
  return (
    <>
        <div className='w-[30%] h-[80vh] my-10 max-[768px]:h-[100vh] max-[768px]:w-[45%] max-[320px]:w-[100%]'>
        <div className=' rowflex'>
        <div className="">

        <Image src={img} className='bg-red-500 '/>
        </div>
        {/* <div className='colflex'>

        <Image src={logo}/>
        <h1>SPAN FILTERS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero veritatis sit temporibus consequuntur, sequi suscipit quaerat laborum officia rerum eaque beatae praesentium pariatur aspernatur delectus, qui quibusdam expedita atque obcaecati.</p>
        </div> */}
        </div>
        <div className='flex flex-col gap-y-8'>
        <div className='flex flex-col colflex gap-y-3'>
            <h2 className='text-sm text-gray-400'>
                <Link href="/blogs" className='text-sm font-semibold text-blue-700'>BLOGS/</Link>/January 6,2023
            </h2>
            <h1 className='text-2xl font-semibold '>{title}</h1>
            <p className='text-gray-400'>{paragraph}</p>
        </div>
        <div className='flex justify-between min-[768px]:hidden'>
            <div className='flex items-center gap-x-2'>
            <FaShareAlt className='p-1 text-4xl border-4 rounded-full'/>
            <h1 className='text-sm text-gray-400'>By USER</h1>
            </div>
            <div className='flex items-center gap-x-4'>
            <div className='flex items-center text-gray-400'>
            <FiMessageCircle />
            <p>0</p>
            </div>
            <div className='flex items-center text-gray-400'>

            <CiHeart />
            <p>0</p>
            </div>
            </div>
          
        </div>
        </div>
        
       
        </div>
    </>
  )
}

export default Box