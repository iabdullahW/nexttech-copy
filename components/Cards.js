import React from 'react'
import "./Cards.css"
// import {expertSlider} from "../utils/constants"
import Image from 'next/image'


const Cards = ({logo}) => {
   
  return (
    <>
    
        {/* <div className='text-white card'>
            sd
        </div> */}
       <div className='text-center card'>
       {/* <div className='bg-white'></div> */}
      
          <Image src={logo} alt='logo' className='absolute flex text-center w-[50%] h-[50%] left-7 top-4 '/>
          
       </div> 
      
    </>
  )
}

export default Cards