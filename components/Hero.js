import React from "react";
import Image from "next/image";
import leftarrow from "./../public/leftarrow.webp";
import rightarrow from "./../public/rightarrow.webp";
import underHeading from "./../public/underHeading.svg";
import { FaDotCircle } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import underleftarrow from "./../public/underLeftArrow.webp";
import circleInner from "./../public/circleInner.png";
import circleInner1 from "./../public/circleInner1.webp";
import circleInner2 from "./../public/circleInner2.webp";
import circleInner3 from "./../public/circleInner3.webp";
import underRight from "./../public/underRight.webp";
// import { IoEllipsisVerticalOutline } from "react-icons/io5";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="bg-[#020842]  text-white max-[768px]:h-[300vh] max-sm:h-screen">
        <div className="w-[98%]  ml-auto">
          <div className="flex justify-between max-[768px]:flex max-[768px]:flex-col">
            <div className="left w-[50%] flex flex-col gap-y-4 max-[1025px]:w-[100%] max-[1024px]:items-center max-[768px]:w-[100%]">
              <div className="w-[90%] ">
                {" "}
                <Image src={rightarrow} alt="leftarrow " className="" />{" "}
              </div>
              <div>
                <h1 className="font-semibold">PERFECT COMPANY SOLUTION</h1>
                <Image src={underHeading} alt="underHeading" />
              </div>
              <div className="text-6xl font-bold tracking-wider header max-sm:text-3xl">
                <h1 className="leading-tight ">
                  We Help Companies <br /> in{" "}
                  <span className="text-[#3341c2]  font-extrabold">
                    {" "}
                    Digitizing{" "}
                  </span>
                  Their <br /> Business.{" "}
                </h1>
              </div>
              <div className="paragraph">
                <p className="text-gray-400 text-md ">
                  In today's rapidly evolving digital landscape, staying ahead
                  of the curve <br /> is essential for businesses aiming to
                  thrive and succeed.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h1 className="flex items-center font-semibold text-md gap-x-5">
                  {" "}
                  <FaDotCircle className="text-2xl text-[#0042e8] " />
                  Focus on quality first
                </h1>
                <h1 className="flex items-center font-semibold text-md gap-x-5">
                  {" "}
                  <FaDotCircle className="text-2xl text-[#0042e8]" />
                  Get to on the martket on time
                </h1>
              </div>
              <div className="flex gap-x-5">
                <div>
                  {" "}
                  <button className="bg-[#0042eb] px-8 rounded-3xl py-3 flex items-center gap-x-2 font-bold ">
                    {" "}
                    Contact Us Today! <BsArrowDownRight />
                  </button>
                </div>
                <div className="flex gap-x-4">
                  <div>
                    <MdPhoneInTalk className="px-2 text-5xl bg-green-400 rounded-3xl animate-pulse" />
                  </div>
                  <div className="max-sm:hidden">
                    <h1 className="opacity-70">Contact Us DAILY</h1>
                    <h1 className="text-xl font-bold">(+420) 318568 511</h1>
                  </div>
                </div>
              </div>
              <div>
                <Image src={underleftarrow} alt="loading" />
              </div>
            </div>
            <div className="right w-[50%] relative max-[1025px]: max-[1024px]:hidden max-[768px]:block max-[768px]:w-[100%] max-sm:hidden">
              <div className="w-[45%] absolute right-0 ">
                <Image src={leftarrow} alt="leftarrow " className="max-[768px]:hidden" />
              </div>
              <div className="relative top-16 w-[80%] left-10  max-[768px]:left-20 " >
                <Image
                  src={circleInner}
                  alt="circleInner"
                  className="absolute w-[100%] rotate-spin md:right-8 "
                />
                <Image
                  src={circleInner1}
                  alt="circleInner"
                  className="absolute w-[80%] top-10 left-16 rotate transition delay-1000 duration-1000 ease-in-out md:left-5 max-[768px]:left-20 max-[768px]:w-[85%] "
                />
                <Image
                  src={circleInner2}
                  alt="circleInner"
                  className="absolute w-[70%] top-16 left-[50px] anti max-[768px]:left-[60px]"
                />
                <Image
                  src={circleInner3}
                  alt="circleInner"
                  className="absolute w-[20%] top-[190px] left-[185px] max-[768px]:w-[25%] "
                />
              </div>
              <div className="w-[45%] absolute right-0 bottom-0 max-lg:hidden ">
                <Image src={underRight} alt="leftarrow " className="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


//top-[185px] left-[160px] 

