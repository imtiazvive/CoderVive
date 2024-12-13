"use client";
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-gray-50  overflow-hidden flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className=" border-gray-200">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium text-gray-800">{item.title}</span>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                activeIndex === index ? "rotate-45" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
