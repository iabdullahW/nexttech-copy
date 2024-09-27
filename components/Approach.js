

"use client";
import React from "react";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    "Discovery Phase",
    "Design and Development",
    "Maintenance",
    "Deployment",
    "Testing and QA",
  ];

  const descriptions = [
    "Data-driven diagnostic and predictive app for improving outcomes. Data-driven diagnostic and predictive app for improving.",
    "Design and develop innovative solutions tailored to client needs, ensuring scalability and performance.",
    "Regular maintenance to ensure optimal performance and implement necessary updates and improvements.",
    "Seamless deployment strategies to launch products efficiently and effectively.",
    "Rigorous testing and quality assurance to deliver reliable and high-quality products.",
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <div className="bg-[#e3f0ff] w-[100%] ">
        <div className="w-[96%] mx-auto flex flex-col md:flex-row justify-between pt-10">
          {/* Left Side */}
          <div className="w-full md:w-[48%] mb-10 md:mb-0">
            <div className="flex flex-col pb-5 gap-y-5">
              <h3 className="text-lg font-medium">WORKING PROCESS</h3>
              <h1 className="text-5xl font-bold">
                Our <span className="text-blue-700">Approach</span>
              </h1>
            </div>
            <div className="flex flex-col gap-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-y-5">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
                    <h1 className="text-3xl font-semibold">
                      {`0${index + 1}. ${step}`}
                    </h1>
                    <p className="text-3xl font-extrabold ">
                      {activeIndex === index ? (
                        <GoDash />
                      ) : (
                        <FaPlus />
                      )}
                    </p>
                  </div>
                  {activeIndex === index && (
                    <p className="text-lg text-gray-500 bg-[#cce3ff] py-4 px-8">
                      {descriptions[index]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-[48%] flex flex-col items-center">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`px-8 py-4 text-2xl md:text-4xl h-[80px] md:h-[100px] w-full mb-4 border-2 rounded-full transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-blue-700 text-white"
                    : "bg-tranparent text-black border-2 border-gray"
                }`}
                onClick={() => handleToggle(index)}
              >
                {step}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;

