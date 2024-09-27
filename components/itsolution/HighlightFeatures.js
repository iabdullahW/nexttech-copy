"use client"
import { useState } from 'react';
import Image from "next/image";
// import featureImage from "../public/image.png";
import highlight from "./../../public/highlight.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const HighlightedFeatures = ({heading,paragraph}) => {

    useEffect(() => {
        Aos.init({duration:1000,easing:"ease-in-out",once:false})
      
    }, []);

  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  const features = [
    {
      title: 'Profiling a Perfect User Interface',
      content: 'We design a user-friendly interface for your application; appealing in its outlook and easy to navigate. We make it easy for customers to find out what they are looking for.',
    },
    {
      title: 'Developing a Robust Structure',
      content: 'We build a strong, scalable, and flexible structure that ensures smooth performance and future growth.',
    },
    {
      title: 'Making It Error-Free',
      content: 'Our team ensures that the application is free from bugs and errors through extensive testing.',
    },
    {
      title: 'Getting the App Deployed',
      content: 'We deploy the app efficiently, ensuring it works flawlessly across different platforms.',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-between w-[80%] py-20  mx-auto lg:flex-row">
      <div className="w-full pr-8 lg:w-1/2">
        <h2 className="text-3xl font-bold text-[#020842] mb-4">{heading}</h2>
        <p className="mb-8 text-gray-700">
          {paragraph}
        </p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between py-3 border-b cursor-pointer"
                onClick={() => toggleFeature(index)}
              >
                <span className="text-lg font-semibold text-[#020842]">{feature.title}</span>
                <span>{openFeature === index ? '-' : '+'}</span>
              </div>
              {openFeature === index && (
                <div className="p-4 text-gray-700 border-l-4 border-blue-500">
                  {feature.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 lg:w-1/2 lg:mt-0">
        <div className="overflow-hidden border-blue-500 rounded-full w-96 h-72">
          <Image
            src={highlight}
            alt="Feature"
            layout="responsive"
            width={500}
            height={500}
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightedFeatures;
