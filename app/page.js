import React from "react";
import Hero from "./../components/Hero";
import SliderComponent from "@/components/SliderComponent";
import Services from "@/components/Services";
import leftshape from "./../public/assets/leftshape.webp";
import rightshape from "./../public/assets/rightshape.webp";
import Image from "next/image";
import Mission from "@/components/Mission";
// import FullSlider from '@/components/FullSlider'
import FullSliderCarousel from "@/components/FullSliderCarousel";
import FullSlider2 from "@/components/FullSlider2";
import FullSlider3 from "@/components/FullSlider3";
import FullSlider from "@/components/FullSlider";
import "./../components/sticky.css"
import Button from "@/components/Button";
import Approach from "@/components/Approach";
import Technologies from "@/components/Technologies";
import Customers from "@/components/Customers";
import Faq from "@/components/Faq";
import Articles from "@/components/Articles";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import HomePage from "@/components/HomePage";

const page = () => {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col gap-y-10 bg-[#e3f0ff] ">
        <SliderComponent />
        <div className="">
          {/* <Image
            src={leftshape}
            alt="leftshape"
            className="absolute w-[140px] top-[150px] z-50 "
          /> */}
        </div>

        <Services />

        {/* <Image
          src={rightshape}
          alt="leftshape"
          className="absolute w-[140px] bottom-[0px] right-0   "
        /> */}
      </div>
      <Mission />
      {/* <div className='p-10 bg-[#171b3a]'>
      <FullSliderCarousel/>
      </div> */}
      <div className="flex flex-col gap-y-20 bg-[#171b3a]">
      <div className="pt-10 bg-[#171b3a]">
        <div className="scroll"><FullSlider /></div>
        <div className="scroll"> <FullSlider2 /> </div>
        <div className="scroll">  <FullSlider3 /> </div>
      </div>
      <div>

        <Button/>
      </div>
      <div>
        <Approach/>
      </div>
      
      </div>
      <div className=" max-sm:overflow-hidden">
        <Technologies/>
      </div>
      <div>
        <Customers/>
      </div>
      <div>
        <Faq/>
      </div>
      <div>
        <Articles/>
      </div>
      <div>
        <ContactSection/>
      </div>
      {/* <div>
        <Footer/>
      </div> */}
      
      
    </div>
  );
};

export default page;
