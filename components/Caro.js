import React from 'react'
import person from "./../public/assets/uncle.webp"
import uniqa from "./../public/assets/technology/images__4_-removebg-preview.png"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';

const Caro = ({img}) => {
  return (
    <>
         <div className='right w-[100%] h-[80vh] bg-white rounded-2xl pt-5 pl-5 pr-5 flex flex-col justify-around'>
                <h1 className='text-2xl font-bold text-blue-800'>Amazing software services</h1>
                <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium, laborum, animi dolor eos earum necessitatibus nesciunt cupiditate deserunt iusto veritatis commodi dolores atque facilis pariatur quasi. Odio id corrupti cumque magni. Cupiditate nobis voluptatum minus veniam fuga excepturi consequatur repellat maiores, fugit architecto saepe vero quam ipsum! Repellat quis pariatur maiores assumenda odit. Blanditiis explicabo suscipit autem eius amet?</p>
                <div className='flex justify-between'>
                    <div className='flex items-center left gap-x-5'>
                        <Image src={img} alt="person" className='w-[100px] rounded-2xl '/>
                        <div className='flex flex-col gap-y-2'>
                            <h1>Maverick Phoenix</h1>
                            <p>Board Member,UNIQA</p>
                            <p>Seattle,Ukrain</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around right'>
                    <div className='flex items-center gap-x-3'>
                    <Image src={uniqa} alt='uniqa' className='w-[70px]'/>
                    <h1 className='text-[#005ea6] font-bold text-xl'>UNIQA</h1>
                    </div>
                    <div className='flex self-end gap-x-2'>
                    <FaArrowAltCircleLeft className='text-[#e3f0ff] text-3xl'/>
                    <FaArrowAltCircleRight className='text-[#e3f0ff] text-3xl'/>
                    
                    </div>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default Caro