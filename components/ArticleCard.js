import React from 'react';
import Image from 'next/image';
import { IoIosPersonAdd } from "react-icons/io";

const ArticleCard = ({ image, title, date }) => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative">
        <Image src={image} alt={title} className="object-cover w-full h-48 rounded-2xl hover:scale-50 hover:delay-700" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
          {/* <button className="p-2 text-white bg-blue-600 rounded-full">
            <i className="fas fa-arrow-right"></i>
          </button> */}
        </div>
      </div>
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <div className="text-sm text-gray-600">
          <p className="flex items-center">
            <span><IoIosPersonAdd /></span>
            <span>By admin</span>
            <span className="ml-4">{date}</span>
            <span className="ml-4">0 Comments</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
