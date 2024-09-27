import React from "react";
import Image from "next/image";
import underHeading from "./../public/underHeading.svg";
import uncle from "./../public/assets/uncle.webp";
import { GoArrowUpRight } from "react-icons/go";
import { TbWorldLongitude } from "react-icons/tb";
import undershape from "./../public/assets/undershape.webp";

const Mission = () => {
  return (
    <>
      <div className="bg-[#010842] text-white w-[100%] h-screen py-10 ">
        <div className="w-[90%] flex justify-between">
          <div className=" left w-[45%] max-sm:w-[100%]">
            <div className="flex flex-col items-start justify-center max-sm:items-center">
              <h1 className="pl-8 text-2xl font-bold">About Us</h1>
              <div className="w-[200px]">
                <Image src={underHeading} alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col mt-3 pl-7 gap-y-5">
              <h1 className="text-4xl font-bold max-sm:text-center">
                Techno <span className="text-blue-700"> Mission & Goal </span>
              </h1>
              <p className="text-lg tracking-wider text-gray-200 ">
                At Techco, our mission is to empower businesses through
                innovative software solutions that streamline operations, foster
                growth, and drive success. With a commitment to excellence and
                customer satisfaction we strive.
              </p>
              <div className="hidden max-sm:flex max-sm:justify-center">
              <Image src={uncle} alt="uncle" className="rounded-2xl w-52 " />
            </div>
            </div>
          </div>
          <div className=" right w-[45%]  flex flex-col gap-y-5 max-sm:hidden">
            <div>
              <Image src={uncle} alt="uncle" className="rounded-2xl w-52 " />
            </div>
            <div className="w-[full] ">
              <div className="bg-white w-[100%] relative h-[250px] pt-5 pl-3 rounded-2xl">
                <Image
                  src={uncle}
                  alt="uncle"
                  className="absolute border-2 border-white rounded-full w-14 h-14"
                />
                <Image
                  src={uncle}
                  alt="uncle"
                  className="absolute z-50 border-2 border-white rounded-full w-14 h-14 left-10 boder-bod"
                />
                <Image
                  src={uncle}
                  alt="uncle"
                  className="absolute border-2 border-white rounded-full w-14 h-14 left-20 "
                />
                <p className="absolute z-50 flex items-center justify-center bg-blue-700 border-2 border-white rounded-full w-12 h-12 left-[120px]  max-md:hidden lg:block">
                  6k+
                </p>
                <h1 className="absolute text-xl text-gray-600 top-20">
                  Happy Customer
                </h1>
                <button className="absolute flex items-center px-8 py-4 bg-blue-700 right-20 rounded-xl">
                  Learn More <GoArrowUpRight />
                </button>
                <div className="">
                  <div className="absolute flex flex-col text-2xl font-bold text-black top-32 left-2 max-md:left-4 max-md:text-md">
                    <h1 className="text-4xl font-extrabold max-md:text-lg">
                      6k+
                    </h1>
                    <p className="font-semibold text-gray-600">Projects Done</p>
                  </div>
                  <div className="absolute flex flex-col text-2xl font-bold text-black top-32 left-44 max-md:left-20 max-md:text-md max-md:hidden">
                    <h1 className="text-4xl font-extrabold ">100%</h1>
                    <p className="font-semibold text-gray-600 ">
                      Results Guaranteed
                    </p>
                  </div>
                </div>
                <div>
                  <TbWorldLongitude />
                  {/* <Image src={undershape} alt="undershape" className="absolute left-0 "/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#010842] text-white w-[100%]  pt-10 flex flex-col items-center gap-y-5">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold max-sm:hidden">CASE STUDIES</h1>
          <Image src={underHeading} alt="under" />
        </div>
        <div>
          <h1 className="text-4xl font-bold max-sm:text-center max-sm:hidden">
            Our latest <span className="text-blue-700"> Case </span>Studies
          </h1>
        </div>
      </div>
    </>
  );
};

export default Mission;
