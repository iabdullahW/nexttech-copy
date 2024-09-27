"use client"
import React, { useState } from 'react';

const Questions = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {data?.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300">
          <div
            className="flex items-center justify-between p-4 bg-white cursor-pointer "
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-2xl font-semibold text-blue-900 hover:text-blue-600">
              {faq.question}
            </h3>
            <div
              className={`text-white rounded-lg  p-4 ${activeIndex === index ? 'bg-blue-600' : 'bg-blue-600'}`}
            >
              {activeIndex === index ? '-' : '+'}
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4 text-blue-900 bg-blue-100">
              <p className="mb-2">{faq.answer}</p>
              <ul className="pl-5 list-disc">
                {faq.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
