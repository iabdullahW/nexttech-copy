import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = () => {
  return (
    <>
        <div className='bg-[#171b3a] h-[20vh] max-sm:hidden'>
        <div className='flex items-center justify-center'>
                        <button className='flex items-center px-8 py-4 font-bold text-white bg-blue-700 gap-x-3 rounded-3xl'>VIEW MORE CASES STUDY <GoArrowUpRight className='text-2xl font-bold text-white'/></button>
                    </div>
        </div>
    </>
  )
}

export default Button