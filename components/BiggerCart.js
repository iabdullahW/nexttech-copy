import React from 'react'
import "./BiggerCart.css"
import {services} from "./../utils/constants"
import Image from 'next/image'
import { FaRegCircleDot } from "react-icons/fa6";

const BiggerCart = ({title,icon,paragraph1,paragraph2,paragraph3,paragraph4}) => {

    

  return (
    <>
       <div className='p-8 m-5 text-black rounded-lg shadow-lg rounded-tr-6xl newcard'>
      <div className='flex flex-col gap-y-8'>
       <span className='text-6xl text-blue-700 '>{icon}</span>
   <h1 className='text-2xl font-bold'>{title}</h1>
  
   {/* <Image src={icon} alt='loading'/> */}
   <div className='flex flex-col gap-y-3 '>     
    <h1 className='flex items-center text-xl gap-x-3 '> <FaRegCircleDot className='text-sm text-blue-700' /><span className='px-3 py-1 rounded-md bg-gradient-to-l from-sky-100 via-sky-100 to-stone-100'>{paragraph1}</span></h1>
    <h1 className='flex items-center text-xl gap-x-3 '> <FaRegCircleDot className='text-sm text-blue-700' /><span className='px-3 py-1 rounded-md bg-gradient-to-l from-sky-100 via-sky-100 to-stone-100'>{paragraph2}</span></h1>
    <h1 className='flex items-center text-xl gap-x-3 '> <FaRegCircleDot className='text-sm text-blue-700' /><span className='px-3 py-1 rounded-md bg-gradient-to-l from-sky-100 via-sky-100 to-stone-100'>{paragraph3}</span></h1>
    <h1 className='flex items-center text-xl gap-x-3 '> <FaRegCircleDot className='text-sm text-blue-700' /><span className='px-3 py-1 rounded-md bg-gradient-to-l from-sky-100 via-sky-100 to-stone-100'>{paragraph4}</span></h1>
    

   
      
      </div>
</div>
    
       </div>
    </>
  )
}

export default BiggerCart