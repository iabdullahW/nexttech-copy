import React from 'react'
import Image from 'next/image'
import logo from "./images/BANNER-OUR-STORY (1).jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaQuora } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const page = () => {
  return (
    <>
        <div className='flex items-center w-full max-sm:flex max-sm:flex-col'>
                <div className='left w-[50%] max-sm:w-[100%]'>
                <Image src={logo} alt='logo'/>
                </div>
                <div className='right w-[50%] flex flex-col gap-y-5 text-3xl font-bold px-10 max-sm:w-[100%] max-sm:items-center max-sm:py-10'>
                <h1>OUR STORY</h1>
                <p className='text-xl font-semibold text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid excepturi, nesciunt vel sed et impedit est atque magni aperiam tempora aut consequatur praesentium, distinctio alias fugit perferendis optio rerum eligendi! Ducimus molestias sit, consectetur dolorum possimus sequi repellendus labore et eum illum eligendi alias, ipsam accusamus animi reprehenderit est recusandae, aperiam accusantium nisi. Dignissimos perspiciatis, reiciendis autem eligendi molestias, eveniet unde pariatur, odio quam hic at. Cupiditate, numquam ipsa?</p>
                <div className='flex gap-x-4'>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaGithub />
                <FaQuora />
                <FaTiktok />

                </div>
                </div>
        </div>
    </>
  )
}

export default page