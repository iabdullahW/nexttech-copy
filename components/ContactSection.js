import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";


const ContactSection = () => {
  return (
    <div className="flex flex-col min-h-screen p-10 lg:flex-row lg:gap-x-4 bg-blue-50 lg:justify-center">
      {/* Left Section */}
      <div className="w-full p-8 bg-white rounded-md shadow-lg lg:w-1/3">
        <h2 className="mb-4 text-sm font-bold text-black ">YOU ARE HERE</h2>
        <h2 className="mb-4 text-3xl font-bold text-black">Let’s Start</h2>
        <p className="mb-8 text-black">Initiating Your Journey <br /> to Success and Growth.</p>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="mr-4 text-2xl text-blue-500"><BsFillTelephoneFill className='p-1 text-3xl text-white bg-blue-700 rounded-3xl '/></span>
            <p className="text-gray-600">+880-1680-6361-89</p>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-2xl text-blue-500"><TbBrandGmail className='p-1 text-3xl text-white bg-blue-700 rounded-3xl '/></span>
            <p className="text-gray-600">techco@gmail.com</p>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-2xl text-blue-500"><FaLocationDot className='p-1 text-3xl text-white bg-blue-700 rounded-3xl ' /></span>
            <p className="text-gray-600">Sunshine Business Park</p>
          </div>
        </div>
        <div className="mt-8 space-y-2">
          <div className="flex items-center">
            <span className="mr-2 font-bold text-blue-600">01</span>
            <p className="text-gray-700">Share your requirements</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold text-blue-600">02</span>
            <p className="text-gray-700">Discuss them with our experts</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold text-blue-600">03</span>
            <p className="text-gray-700">Get a free quote</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-bold text-blue-600">04</span>
            <p className="text-gray-700">Start the project</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full p-8 mt-10 bg-white rounded-md shadow-lg lg:w-1/2 lg:mt-0">
        <h3 className="mb-6 text-2xl font-bold text-blue-800">Let’s Connect!</h3>
        <h3 className="mb-6 text-xl font-bold text-black">Send us a message, and we'll promptly discuss your project with you.</h3>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
         <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Your Phone No."
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Your Company Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            placeholder="How can we help you?"
            className="w-full h-32 p-4 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-6 py-4 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
